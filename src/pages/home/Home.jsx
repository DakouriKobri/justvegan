import Category from "../../components/category/Category";
import categoryData from "../../data/categoryData.json";

export default function Home() {
  const categoryList = categoryData.map((category) => (
    <Category key={category.id} category={category} />
  ));

  return (
    <div>
      <ul>{categoryList}</ul>
    </div>
  );
}
