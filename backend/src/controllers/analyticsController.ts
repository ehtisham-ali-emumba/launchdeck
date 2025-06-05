import { Request, Response } from "express";
import Product from "../models/Product";
import Category from "../models/Category";
import {
  generateMongoQuery,
  analyzeQueryContext,
} from "../services/groqService";
import {
  generateChartData,
  generateTableData,
  generateAnalyticsStats,
} from "../services/dataAnalysisService";

// Define interface for the MongoDB filter object
interface MongoFilter {
  [key: string]: any;
  launchDate?: {
    $gte?: Date | string;
    $gt?: Date | string;
    $lte?: Date | string;
    $lt?: Date | string;
    $eq?: Date | string;
    [key: string]: any;
  };
  needsCategoryLookup?: boolean;
  categoryName?: string;
}

export const getAnalyticsData = async (req: Request, res: Response) => {
  try {
    const { query } = req.query as { query?: string };

    let mongoFilter: MongoFilter = {};
    let analysis = {
      queryType: "general",
      suggestedCharts: ["popularity", "category", "timeline"],
      suggestedTables: ["leaderboard", "recent", "detailed"],
      keyInsights: ["Showing all products", "Data overview"],
      recommendedLayout: "dashboard",
    };

    // If query is provided, use AI to generate filter and analysis
    if (query) {
      try {
        const aiFilter = await generateMongoQuery(query);
        mongoFilter = aiFilter as MongoFilter;
        console.log(
          "🚀 ~ getAnalyticsData ~ initial mongoFilter:",
          JSON.stringify(mongoFilter)
        );

        // Handle category lookup if needed
        if (mongoFilter.needsCategoryLookup && mongoFilter.categoryName) {
          const categoryPattern = new RegExp(mongoFilter.categoryName, "i");
          const category = await Category.findOne({
            name: { $regex: categoryPattern },
          });

          if (category) {
            console.log(
              `Found category '${category.name}' with ID: ${category._id}`
            );
            mongoFilter = { categoryId: category._id };
          } else {
            console.log(
              `Category '${mongoFilter.categoryName}' not found, falling back to empty filter`
            );
            // Try a more relaxed search if exact match fails
            const wordPattern = mongoFilter.categoryName.split(/\s+/).join("|");
            const categoryByWord = await Category.findOne({
              name: { $regex: wordPattern, $options: "i" },
            });

            if (categoryByWord) {
              console.log(
                `Found category by word match: '${categoryByWord.name}' with ID: ${categoryByWord._id}`
              );
              mongoFilter = { categoryId: categoryByWord._id };
            } else {
              mongoFilter = {}; // No matching category, clear filter
            }
          }
        }

        // Handle date filtering and ensure dates are valid objects
        if (mongoFilter.launchDate) {
          console.log(
            "Original date filter:",
            JSON.stringify(mongoFilter.launchDate)
          );

          // Define all possible comparison operators
          const dateOperators = ["$gte", "$gt", "$lte", "$lt", "$eq"];

          // Process each operator if it exists
          dateOperators.forEach((op) => {
            if (
              mongoFilter.launchDate &&
              mongoFilter.launchDate[op] !== undefined
            ) {
              // If it's already a Date object, leave it alone
              if (
                !(mongoFilter.launchDate[op] instanceof Date) &&
                (typeof mongoFilter.launchDate[op] === "string" ||
                  typeof mongoFilter.launchDate[op] === "number")
              ) {
                try {
                  const dateValue = new Date(
                    mongoFilter.launchDate[op] as string | number
                  );

                  // Verify it's a valid date
                  if (!isNaN(dateValue.getTime())) {
                    mongoFilter.launchDate[op] = dateValue;
                    console.log(`Converted ${op} date to:`, dateValue);
                  } else {
                    console.log(
                      `Invalid date value for ${op}:`,
                      mongoFilter.launchDate[op]
                    );
                    // Try to interpret as a timestamp if it's a number
                    if (typeof mongoFilter.launchDate[op] === "number") {
                      const dateFromTimestamp = new Date(
                        mongoFilter.launchDate[op] as number
                      );
                      if (!isNaN(dateFromTimestamp.getTime())) {
                        mongoFilter.launchDate[op] = dateFromTimestamp;
                        console.log(
                          `Converted timestamp for ${op} to:`,
                          dateFromTimestamp
                        );
                      }
                    }
                  }
                } catch (e) {
                  console.error(`Error converting date for ${op}:`, e);
                }
              }
            }
          });

          console.log(
            "Processed date filter:",
            JSON.stringify(mongoFilter.launchDate)
          );
        }

        // Remove our custom fields
        delete mongoFilter.needsCategoryLookup;
        delete mongoFilter.categoryName;

        console.log(
          "🚀 ~ getAnalyticsData ~ final mongoFilter:",
          JSON.stringify(mongoFilter)
        );
      } catch (error) {
        console.error("Error processing AI filter:", error);
        // Fallback to basic text matching if there's an error
        mongoFilter = {
          $or: [
            { name: { $regex: query, $options: "i" } },
            { description: { $regex: query, $options: "i" } },
          ],
        };
      }
    }
    console.log(
      "🚀 ~ getAnalyticsData ~ mongoFilter:",
      JSON.stringify(mongoFilter)
    );

    // Get products based on filter
    const products = await Product.find(mongoFilter)
      .populate("categoryId", "name")
      .lean();

    // Log the query result count
    console.log(`Query "${query}" returned ${products.length} products`);

    // Map products to include category info
    const productsWithCategory = products.map((product) => ({
      ...product,
      category: product.categoryId || null,
    }));

    // Generate AI analysis if query provided
    if (query && productsWithCategory.length > 0) {
      analysis = await analyzeQueryContext(query, productsWithCategory);
    }

    // Generate chart data based on AI suggestions
    const chartData: any = {};
    if (analysis.suggestedCharts) {
      analysis.suggestedCharts.forEach((chartType) => {
        chartData[chartType] = generateChartData(
          productsWithCategory,
          chartType
        );
      });
    }

    // Generate table data based on AI suggestions
    const tableData: any = {};
    if (analysis.suggestedTables) {
      analysis.suggestedTables.forEach((tableType) => {
        tableData[tableType] = generateTableData(
          productsWithCategory,
          tableType
        );
      });
    }

    // Generate analytics stats
    const stats = generateAnalyticsStats(productsWithCategory);

    res.json({
      query: query || "All products",
      products: productsWithCategory,
      analysis,
      visualizations: {
        charts: chartData,
        tables: tableData,
      },
      stats,
    });
  } catch (error) {
    console.error("Analytics error:", error);
    res.status(500).json({ error: "Failed to generate analytics" });
  }
};
