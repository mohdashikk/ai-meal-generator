import { useState } from "react";
import { generateMealAI } from "../services/aiService";

export const useMealGenerator = () => {
  const [meals, setMeals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const generateMeal = async (from) => {
    try {
      setLoading(true);
      setError("");

      const result = await generateMealAI(from);
      setMeals(result);
    } catch (err) {
      setError(err.message || "Faild to generate meals");
    } finally {
      setLoading(false);
    }
  };

  return {
    meals,
    loading,
    error,
    generateMeal,
  };
};
