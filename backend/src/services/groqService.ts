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
1. For category searches like "health", "technology" etc, use: {"needsCategoryLookup": true, "categoryName": "CategoryName"}
2. For text searches, use: {"$or": [{"name": {"$regex": "search", "$options": "i"}}, {"description": {"$regex": "search", "$options": "i"}}]}
3. For date queries, use createdAt field
4. For popularity, use votesCount field

Examples:
health -> {"needsCategoryLookup": true, "categoryName": "Health"}
popular -> {"votesCount": {"$gte": 100}}
recent -> {"createdAt": {"$gte": "2024-04-01T00:00:00.000Z"}}`;

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

    // Extract JSON from response if it contains extra text
    const jsonMatch = aiResponse.match(/\{.*\}/s);
    if (jsonMatch) {
      aiResponse = jsonMatch[0];
    }

    console.log("🚀 ~ AI Response:", aiResponse);

    const parsedQuery = JSON.parse(aiResponse);
    return parsedQuery;
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
