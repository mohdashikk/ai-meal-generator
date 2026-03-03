import { useState } from "react";
import { DIETS, CUISINES } from "../utils/constants";

const MealForm = ({ onGenerate }) => {
  const [form, setForm] = useState({
    ingredients: "",
    diet: "Any",
    cuisine: "Any",
  });

  console.log(form);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  return (
    <form onSubmit={onHandleSubmit} className="meal-form">
      <input
        type="text"
        name="ingredients"
        placeholder="Ingredients"
        onChange={onHandleChange}
        value={form.ingredients}
      />

      <select name="diet" onChange={onHandleChange} value={form.diet} id="">
        {DIETS.map((c) => {
          return <option key={c}>{c}</option>;
        })}
      </select>

      <select
        name="cuisine"
        value={form.cuisine}
        onChange={onHandleChange}
        id=""
      >
        {CUISINES.map((c) => {
          return <option key={c}>{c}</option>;
        })}
      </select>

      <button type="submit">Generate</button>
    </form>
  );
};

export default MealForm;
