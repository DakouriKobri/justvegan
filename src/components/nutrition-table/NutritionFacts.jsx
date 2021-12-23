// Project Files
import MajorFacts from "./MajorFacts";
import NutritionRow from "./NutritionRow";
import OtherNutrientsTable from "./OtherNutrientsTable";
import "./nutrition-facts.scss";

export default function NutritionFacts({ product }) {
  const {
    calories,
    carbohydrates,
    carbohydrateGroup,
    cholesterol,
    fat,
    fatGroup,
    otherNutrients,
    protein,
    sodium,
  } = product;

  const fats = fatGroup.map((fat) => <NutritionRow key={fat.id} data={fat} />);
  const sugars = carbohydrateGroup.map((carbohydrate) => (
    <NutritionRow key={carbohydrate.id} data={carbohydrate} />
  ));

  const extraNutritients = otherNutrients.map((nutrient) => (
    <OtherNutrientsTable key={nutrient.id} data={nutrient} />
  ));

  return (
    <section className="nutrition-facts">
      <header className="nutrition-facts__header">
        <h1 className="nutrition-facts__title">Nutrition Facts</h1>
      </header>
      <table className="nutrition-facts__table">
        <thead>
          <tr>
            <th colSpan="3" className="small-info">
              Amount Per Serving*
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <MajorFacts label="Calories" amount={calories} />
          </tr>
          <tr className="thick-row">
            <MajorFacts label="Total Fat" amount={fat} />
          </tr>
          {fats}
          <tr>
            <MajorFacts label="Cholesterol" amount={cholesterol} />
          </tr>
          <tr>
            <MajorFacts label="Sodium" amount={sodium} />
          </tr>
          <tr>
            <MajorFacts label="Total Carbohydrate" amount={carbohydrates} />
          </tr>
          {sugars}
          <tr className="thick-end">
            <MajorFacts label="Protein" amount={protein} />
          </tr>
        </tbody>
      </table>

      <table className="nutrition-facts__table--other thin-end">
        <tbody>{extraNutritients}</tbody>
      </table>
      <p className="foot-note">
        * Nutrition information is a rough estimate calculated without optional
        ingredients.
      </p>
      <p className="foot-note">** Data not available </p>
    </section>
  );
}
