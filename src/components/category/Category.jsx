import { Link } from "react-router-dom";
import "./category.scss";

export default function Category({ category }) {
  const { name, description, image } = category;
  const imageSrc = require(`../../images/categories/${image}`);

  return (
    <li className="category">
      <div className="category__image">
        <img src={imageSrc} alt={name} />
      </div>
      <div>
        <h2 className="category__name">{name}</h2>
        <p className="category__description">{description}</p>
        <Link to={`/${name}`} className="btn-text">
          View menu &#8594;
        </Link>
      </div>
    </li>
  );
}
