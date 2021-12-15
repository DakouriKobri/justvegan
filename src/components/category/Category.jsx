// import { Link } from "react-router-dom";

export default function Category({ category }) {
  const { name, description, image } = category;
  const imageSrc = require(`../../images/categories/${image}`);

  return (
    <li className="category">
      <div className="category__image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="category__text">
        <h2 className="category__name">{name}</h2>
        <p className="category_description">{description}</p>
        <button className="btn">&#62; View menu</button>
      </div>
    </li>
  );
}
