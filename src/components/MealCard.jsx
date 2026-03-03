const MealCard = ({ meal }) => {
  if (!meal) return null;
  return (
    <div className="meal-card">
      <h2>{meal?.title}</h2>
      <p>{meal?.description}</p>
      <span>🔥 {meal?.calories} kcal</span>
    </div>
  );
};

export default MealCard;
