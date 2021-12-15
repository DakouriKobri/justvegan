export default function Ingredients({ ingredients }) {
  const ingredientList = ingredients.map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ));

  return <ul className="ingredient-grid">{ingredientList}</ul>;
}
