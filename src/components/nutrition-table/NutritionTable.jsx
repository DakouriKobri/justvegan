import NutritionRow from "./NutritionRow";

export default function NutritionTable({ product }) {
  const { calories, nutrition } = product;
  const nutritionRowData = nutrition.map((data) => (
    <NutritionRow key={data.id} data={data} />
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Amount Per Serving*</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>{calories}</td>
        </tr>
        {nutritionRowData}
      </tbody>
      <tfoot>
        <tr>
          <td>
            *Nutrition information is a rough estimate calculated without
            optional ingredients.
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
