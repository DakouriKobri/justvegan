export default function MajorFacts({ amount, label }) {
  return (
    <>
      <th colSpan="2">
        <b>{label}</b>
      </th>
      <td>
        <b>{amount}</b>
      </td>
    </>
  );
}
