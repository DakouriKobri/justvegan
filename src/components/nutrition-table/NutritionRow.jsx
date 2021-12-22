export default function NutritionRow({ data }) {
  const { amount, label } = data;

  return (
    <tr>
      <td className="blank-cell"></td>
      <th>{label}</th>
      <td>{amount}</td>
    </tr>
  );
}
