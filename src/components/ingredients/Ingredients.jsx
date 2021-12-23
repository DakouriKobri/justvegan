// Project File
import "./ingredients.scss";

export default function Ingredients({ ingredients }) {
  const ingredientList = ingredients.map((ingredient, index) => (
    <li key={index}>&#9679; {ingredient}</li>
  ));

  return <ul className="ingredients">{ingredientList}</ul>;
}
