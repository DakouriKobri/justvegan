import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { name, category, abstract, image } = product;
  const imageSrc = require(`../../images/${category}/${image}`);

  return (
    <li className="product">
      <Link to={`/${name}`}>
        <div className="product__image">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="product__text">
          <h2 className="product__name">{name}</h2>
          <p className="product_description">{abstract}</p>
        </div>
      </Link>
    </li>
  );
}
