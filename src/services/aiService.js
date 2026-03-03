export const generateMealAI = async (form) => {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  const { ingredients, diet, cuisine } = form;

  return {
    title: `${cuisine} ${diet} Delight`,
    description: `A tasty ${diet} meal made with ${ingredients || "fresh ingredients"} in ${cuisine} style.`,
    calories: Math.floor(Math.random() * 400) + 200,
  };
};
