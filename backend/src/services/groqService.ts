import Groq from "groq-sdk";

export const generateMongoQuery = async (userInput: string) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const prompt = `You are a MongoDB query generator. Convert the user's natural language query into a MongoDB filter object.

Product Schema:
- name: String
- description: String  
- categoryId: ObjectId (reference to Category)
- tags: Array of Strings
- launchDate: Date
- votesCount: Number
- createdAt: Date

User Query: "${userInput}"

IMPORTANT: Return ONLY valid JSON, no explanations, no markdown, no extra text.

Rules:
1. For category searches like "health", "technology", "ai tools", etc, use: {"needsCategoryLookup": true, "categoryName": "CategoryName"}
2. For text searches with multiple words, create individual regex patterns for each word
3. For single words, use: {"$or": [{"name": {"$regex": "word", "$options": "i"}}, {"description": {"$regex": "word", "$options": "i"}}, {"tags": {"$regex": "word", "$options": "i"}}]}
4. For multi-word searches, use: {"$or": [{"name": {"$regex": "word1|word2", "$options": "i"}}, {"description": {"$regex": "word1|word2", "$options": "i"}}, {"tags": {"$regex": "word1|word2", "$options": "i"}}]}
5. For popularity queries (popular, top, best, most voted, trending), use: {"votesCount": {"$gte": 100}}
6. For date queries, ALWAYS use standard ISO date strings for MongoDB, NEVER use ISODate() or any MongoDB-specific functions. Today's date is "${new Date().toISOString()}"

DATE QUERY EXAMPLES - Make sure to calculate the correct date relative to today:
recent -> {"launchDate": {"$gte": "2025-05-05T00:00:00.000Z"}} (1 month ago)
last week -> {"launchDate": {"$gte": "2025-05-28T00:00:00.000Z"}} (7 days ago)
last 3 months -> {"launchDate": {"$gte": "2025-03-04T00:00:00.000Z"}} (3 months ago)
past 6 months -> {"launchDate": {"$gte": "2024-12-04T00:00:00.000Z"}} (6 months ago)
last 2 weeks -> {"launchDate": {"$gte": "2025-05-21T00:00:00.000Z"}} (14 days ago)
this year -> {"launchDate": {"$gte": "2025-01-01T00:00:00.000Z"}} (since Jan 1st)
last year -> {"launchDate": {"$gte": "2024-01-01T00:00:00.000Z", "$lt": "2025-01-01T00:00:00.000Z"}} (all of 2024)
last quarter -> {"launchDate": {"$gte": "2025-04-01T00:00:00.000Z"}} (since April 1st, assuming we're in Q2)

OTHER EXAMPLES:
health -> {"needsCategoryLookup": true, "categoryName": "Health"}
coding -> {"$or": [{"name": {"$regex": "coding", "$options": "i"}}, {"description": {"$regex": "coding", "$options": "i"}}, {"tags": {"$regex": "coding", "$options": "i"}}]}
ai tools -> {"$or": [{"name": {"$regex": "ai|tools", "$options": "i"}}, {"description": {"$regex": "ai|tools", "$options": "i"}}, {"tags": {"$regex": "ai|tools", "$options": "i"}}]}
popular -> {"votesCount": {"$gte": 100}}`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
      temperature: 0.1,
      max_tokens: 150,
    });

    let aiResponse = completion.choices[0]?.message?.content || "{}";

    // Clean the response - remove markdown, explanations, etc.
    aiResponse = aiResponse.trim();

    // Handle ISODate expressions and other MongoDB-specific syntax
    aiResponse = aiResponse.replace(/ISODate\(["'](.+?)["']\)/g, '"$1"');
    aiResponse = aiResponse.replace(/ISODate\(\)/g, "new Date()");
    aiResponse = aiResponse.replace(/new Date\(\)\.getTime\(\)/g, "Date.now()");

    // Handle more complex date expressions like division operations
    aiResponse = aiResponse.replace(
      /Date\.now\(\)\s*\/\s*(\d+)\s*([-+/*])\s*(\d+)/g,
      function (match, divisor, op, val) {
        try {
          // eslint-disable-next-line no-eval
          const timestamp = eval(`Date.now() / ${divisor} ${op} ${val}`);
          return `"${new Date(timestamp * divisor).toISOString()}"`;
        } catch (e) {
          console.log("Error calculating complex date expression:", e);
          return `"${new Date().toISOString()}"`;
        }
      }
    );

    // Replace any mathematical expressions with computed dates
    // This is a safety fallback, but the AI should already be providing proper ISO strings
    aiResponse = aiResponse.replace(
      /Date\.now\(\)\s*([-+/*])\s*(\d+)/g,
      function (match, op, val) {
        try {
          // eslint-disable-next-line no-eval
          const timestamp = eval(`Date.now() ${op} ${val}`);
          return `"${new Date(timestamp).toISOString()}"`;
        } catch (e) {
          console.log("Error calculating date expression:", e);
          return `"${new Date().toISOString()}"`;
        }
      }
    );

    // Extract JSON from response if it contains extra text
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      aiResponse = jsonMatch[0];
    }

    console.log("🚀 ~ AI Response:", aiResponse);

    try {
      const parsedQuery = JSON.parse(aiResponse);

      // Ensure that date filters are properly formatted as Date objects
      // to avoid issues with string comparison in MongoDB
      if (parsedQuery.launchDate) {
        console.log(
          "Original launch date filter:",
          JSON.stringify(parsedQuery.launchDate)
        );

        // Convert all date strings to Date objects for MongoDB compatibility
        Object.keys(parsedQuery.launchDate).forEach((operator) => {
          if (typeof parsedQuery.launchDate[operator] === "string") {
            try {
              // Create a new Date object from the string
              const dateValue = new Date(parsedQuery.launchDate[operator]);

              // Check if the date is valid
              if (!isNaN(dateValue.getTime())) {
                parsedQuery.launchDate[operator] = dateValue;
              }
            } catch (e) {
              console.error("Error converting date string:", e);
            }
          }
        });

        console.log(
          "Processed launch date filter:",
          JSON.stringify(parsedQuery.launchDate)
        );
      }

      return parsedQuery;
    } catch (error) {
      console.error("Failed to parse AI response:", error);
      console.log("Invalid AI response content:", aiResponse);

      // Last resort - extract dates from the response and build a query
      if (
        userInput.match(/last\s+(\d+)\s+months?/i) ||
        userInput.match(/past\s+(\d+)\s+months?/i)
      ) {
        const months = parseInt(
          userInput.match(/(\d+)\s+months?/i)?.[1] || "3",
          10
        );
        const date = new Date();
        date.setMonth(date.getMonth() - months);
        console.log(`Fallback to date filter: last ${months} months ->`, date);
        return { launchDate: { $gte: date } };
      }

      if (
        userInput.match(/last\s+(\d+)\s+weeks?/i) ||
        userInput.match(/past\s+(\d+)\s+weeks?/i)
      ) {
        const weeks = parseInt(
          userInput.match(/(\d+)\s+weeks?/i)?.[1] || "1",
          10
        );
        const date = new Date();
        date.setDate(date.getDate() - weeks * 7);
        console.log(`Fallback to date filter: last ${weeks} weeks ->`, date);
        return { launchDate: { $gte: date } };
      }

      if (
        userInput.match(/last\s+(\d+)\s+days?/i) ||
        userInput.match(/past\s+(\d+)\s+days?/i)
      ) {
        const days = parseInt(
          userInput.match(/(\d+)\s+days?/i)?.[1] || "30",
          10
        );
        const date = new Date();
        date.setDate(date.getDate() - days);
        console.log(`Fallback to date filter: last ${days} days ->`, date);
        return { launchDate: { $gte: date } };
      }

      if (userInput.match(/recent|latest/i)) {
        const date = new Date();
        date.setMonth(date.getMonth() - 1);
        console.log("Fallback to date filter: recent/latest ->", date);
        return { launchDate: { $gte: date } };
      }

      if (userInput.match(/this year|current year/i)) {
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1);
        console.log("Fallback to date filter: this year ->", startOfYear);
        return { launchDate: { $gte: startOfYear } };
      }

      if (userInput.match(/last year|previous year/i)) {
        const lastYear = new Date().getFullYear() - 1;
        const startOfLastYear = new Date(lastYear, 0, 1);
        const endOfLastYear = new Date(lastYear, 11, 31, 23, 59, 59);
        console.log(
          "Fallback to date filter: last year ->",
          startOfLastYear,
          "to",
          endOfLastYear
        );
        return { launchDate: { $gte: startOfLastYear, $lte: endOfLastYear } };
      }

      // Default fallback to text search
      console.log("Fallback to text search for:", userInput);
      return {
        $or: [
          { name: { $regex: userInput, $options: "i" } },
          { description: { $regex: userInput, $options: "i" } },
          { tags: userInput },
        ],
      };
    }
  } catch (error) {
    console.error("Groq AI Error:", error);
    console.log("🚀 ~ Falling back to simple search for:", userInput);

    // Fallback to simple text search
    return {
      $or: [
        { name: { $regex: userInput, $options: "i" } },
        { description: { $regex: userInput, $options: "i" } },
      ],
    };
  }
};

export const analyzeQueryContext = async (
  userInput: string,
  resultsData: any[]
) => {
  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const prompt = `Analyze this search query and data to suggest appropriate visualizations and insights.

Query: "${userInput}"
Data Count: ${resultsData.length}

Based on the query type, suggest relevant charts and tables:

RETURN ONLY VALID JSON in this exact format:
{
  "queryType": "category|popularity|recent|comparison|general",
  "suggestedCharts": ["timeline", "popularity", "category"],
  "suggestedTables": ["leaderboard", "recent", "detailed"],
  "keyInsights": ["insight1", "insight2"],
  "recommendedLayout": "dashboard"
}

Rules:
- For category queries (health, tech, etc): suggest "category" and "popularity" charts
- For popularity queries: suggest "popularity" and "leaderboard" table
- For recent/time queries: suggest "timeline" chart and "recent" table
- Always include "detailed" table
- Keep insights short and relevant`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama3-8b-8192",
      temperature: 0.2,
      max_tokens: 200,
    });

    let response = completion.choices[0]?.message?.content || "{}";

    // Clean and extract JSON
    response = response.trim();
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      response = jsonMatch[0];
    }

    console.log("🚀 ~ Query Analysis:", response);

    const parsedAnalysis = JSON.parse(response);
    return parsedAnalysis;
  } catch (error) {
    console.error("Query analysis error:", error);
    // Return default analysis
    return {
      queryType: "general",
      suggestedCharts: ["popularity", "category"],
      suggestedTables: ["leaderboard", "detailed"],
      keyInsights: ["Showing relevant products", "Data sorted by popularity"],
      recommendedLayout: "dashboard",
    };
  }
};
