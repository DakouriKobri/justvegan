export default function OtherNutrients({ data }) {
  const { amount, label } = data;

  return (
    <tr>
      <td>{label}</td>
      <td>{amount}</td>
    </tr>
  );
}
