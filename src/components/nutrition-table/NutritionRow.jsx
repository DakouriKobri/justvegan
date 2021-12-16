export default function NutritionRow({ data }) {
  const { amount, label, unit } = data;
  return (
    <tr>
      <td>{label}</td>
      <td>
        {amount} {unit}
      </td>
    </tr>
  );
}
