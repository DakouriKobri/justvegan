// NPM Package
import { Link } from "react-router-dom";

// Project File
import "./category.scss";

export default function Category({ category }) {
  const { name, description, image } = category;
  const imageSrc = require(`../../images/categories/${image}`);

  return (
    <li className="category">
      <img src={imageSrc} alt={name} className="category__image" />
      <div className="category__text ">
        <div className="center">
          <h2 className="category__name">{name}</h2>
          <p className="category__description">{description}</p>

          <Link to={`/${name}`} className="btn-text">
            View menu &#8594;
          </Link>
        </div>
      </div>
    </li>
  );
}
