import { useState } from "react";
import { generateMealAI } from "../services/aiService";

export const useMealGenerator = () => {
  const [meals, setMeals] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateMeal = async (FormData) => {
    try {
      setLoading(true);
      setError("");
      const result = await generateMealAI(FormData);
      setMeals(result);
      
    } catch (err) {
      setError(err.message || "Failed to generate meales");
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
