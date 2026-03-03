// export const generateMealAI = async (form) => {
//   await new Promise((resolve) => setTimeout(resolve, 1200));
//   const { ingredients, diet, cuisine } = form;

//   return {
//     title: `${cuisine} ${diet} Delight`,
//     description: `A tasty ${diet} meal made with ${ingredients || "fresh ingredients"} in ${cuisine} style.`,
//     calories: Math.floor(Math.random() * 400) + 200,
//   };
// };

// Real api

export const generateMealAI = async (form) => {
  const { ingredients, diet, cuisine } = form;

  const prompt = `
Suggest one meal.

Cuisine: ${cuisine}
Diet: ${diet}
Ingredients: ${ingredients || "any"}

IMPORTANT:
Return ONLY valid JSON.

Format:
{
  "title": "",
  "description": "",
  "calories": number
}
`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          "HTTP-Referer": "http://localhost:5173",
          "X-Title": "AI Meal Generator",
        },
        body: JSON.stringify({
          model: "openrouter/auto",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.7,
        }),
      },
    );

    const data = await response.json();
    console.log("OPENROUTER RESPONSE:", data);

    const text = data.choices[0].message.content;

    const jsonMatch = text.match(/\{[\s\S]*\}/);

    if (!jsonMatch) {
      throw new Error("No JSON found in AI response");
    }

    console.log("RAW AI TEXT:", text);
    const parsed = JSON.parse(jsonMatch[0]);

    return parsed;
  } catch (err) {
    console.err("AI Error", err);
    throw err;
  }
};
