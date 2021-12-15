import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import productData from "../../data/productData.json";
import categoryData from "../../data/categoryData.json";

export default function CategoryPage() {
  const { category } = useParams();
  const products = productData.filter((data) => data.category === category);

  const description = categoryData.filter((data) => data.name === category)[0]
    .description;
  const image = categoryData.filter((data) => data.name === category)[0].image;
  const imageSrc = require(`../../images/categories/${image}`);

  const productList = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return (
    <section className="products">
      <div className="products__hero">
        <img src={imageSrc} alt={category} className="products__hero__image" />
        <h1 className="products__hero__name">{category}</h1>
      </div>
      <div className="products__content"></div>
      <p>{description}</p>
      <ul>{productList}</ul>
    </section>
  );
}
