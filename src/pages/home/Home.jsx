import Category from "../../components/category/Category";
import categoryData from "../../data/categoryData.json";

export default function Home() {
  const categoryList = categoryData.map((category) => (
    <Category key={category.id} category={category} />
  ));

  return (
    <div>
      <h1 style={{ backgroundColor: "aqua" }}>Hero</h1>
      <ul>{categoryList}</ul>
      <h1 style={{ backgroundColor: "aqua" }}>Footer</h1>
    </div>
  );
}
