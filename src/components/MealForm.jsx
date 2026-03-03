import { useState } from "react";
import { DIETS, CUISINES } from "../utils/constants.js";

const MealForm = ({ onGenerate }) => {
  const [form, setForm] = useState({
    ingredients: "",
    diet: "Any",
    cuisine: "Any",
  });

  const onHandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(form);
  };

  console.log(form);
  return (
    <form action="" className="meal-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="ingredients"
        placeholder="Enter ingredients..."
        onChange={onHandleChange}
      />

      <select name="diet" value={form.cuisine} onChange={onHandleChange} id="">
        {CUISINES.map((c) => (
          <option key={c}>{c} </option>
        ))}
      </select>

      <select name="diet" value={form.diet} onChange={onHandleChange} id="">
        {DIETS.map((c) => (
          <option key={c}>{c} </option>
        ))}
      </select>

      <button type="submit">Generate Meal</button>
    </form>
  );
};

export default MealForm;
