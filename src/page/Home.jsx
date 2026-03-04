import MealCard from "../components/MealCard";
import MealForm from "../components/MealForm";
import { useMealGenerator } from "../hooks/useMealGenerator";

const Home = () => {
  const { meals, loading, error, generateMeal } = useMealGenerator();

  console.log("Saved meals on", meals);
  return (
    <div className="container">
      <h1>🍽️ AI Meal Generator</h1>
      <MealForm onGenerate={generateMeal} />
      {loading && <p className="loading-text">🤖 Generating your meal...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <MealCard meal={meals} />
    </div>
  );
};

export default Home;
