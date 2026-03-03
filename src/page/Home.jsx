import MealCard from "../components/mealCard";
import MealForm from "../components/MealForm";
import { useMealGenerator } from "../hooks/useMealGenerator";

const Home = () => {
  const { meals, loading, error, generateMeal } = useMealGenerator();

  console.log("MEAL STATE:", meals)
  return (
    <>
      <h1>welcome home</h1>

      <MealForm onGenerate={generateMeal} />

      {loading && <p>Generating...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MealCard meal={meals} />
    </>
  );
};

export default Home;
