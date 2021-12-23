// NPM Package
import { Link } from "react-router-dom";

// Project File
import "./product.scss";

export default function Product({ product }) {
  const { slug, name, category, abstract, image } = product;
  const imageSrc = require(`../../images/${category}/${image}`);

  return (
    <li className="product">
      <Link to={`/${category}/${slug}`}>
        <div className="product__card">
          <div className="product__image">
            <img src={imageSrc} alt={name} />
          </div>
          <div className="product__text">
            <h3 className="product__name">{name}</h3>
            <p className="product_description">{abstract}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
