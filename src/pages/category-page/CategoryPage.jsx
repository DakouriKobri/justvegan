import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import productData from "../../data/productData.json";
import categoryData from "../../data/categoryData.json";
import Hero from "../../components/hero/Hero";
import "./category-page.scss";

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

  const categoryName = <h1 className="text">{category}</h1>;

  return (
    <section className="products">
      <div className="products__hero">
        <Hero
          backgroundImage={imageSrc}
          subtractedHeight="130px"
          heroText={categoryName}
        />
      </div>
      <div className="container">
        <div className="products__content">
          <p>{description}</p>
          <ul>{productList}</ul>
        </div>
      </div>
    </section>
  );
}
