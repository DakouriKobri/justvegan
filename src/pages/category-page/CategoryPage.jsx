import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import productData from "../../data/productData.json";
import categoryData from "../../data/categoryData.json";

export default function CategoryPage() {
  const { category } = useParams();
  const categoryProducts = productData.filter(
    (product) => product.category === category
  );

  const description = categoryData.filter((data) => data.name === category)[0]
    .description;
  const image = categoryData.filter((data) => data.name === category)[0].image;
  const imageSrc = require(`../../images/categories/${image}`);

  const productList = categoryProducts.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <div className="category__hero">
      <div className="category__hero">
        <img src={imageSrc} alt={category} className="category__hero__image" />
        <h3 className="category__hero__name">{category}</h3>
      </div>
      <div className="category__content"></div>
      <p>{description}</p>
      <ul>{productList}</ul>
    </div>
  );
}
