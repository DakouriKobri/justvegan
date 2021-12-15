import { useParams } from "react-router-dom";
import productData from "../../data/productData.json";

export default function ProductDetails() {
  const { category, slug } = useParams();
  const product = productData.find(
    (data) => data.category === category && data.slug === slug
  );
  const { calories, description, image, ingredients, name, nutrition } =
    product;
  const imageSrc = require(`../../images/${category}/${image}`);

  return (
    <article className="details">
      <div className="details__hero">
        <img src={imageSrc} alt={name} className="details__image" />
      </div>
      <h1 className="details__name">{name}</h1>
      <p className="details__description">{description}</p>
      <h2>Ingredients</h2>
      <h2>Nutrition Facts</h2>
      <button>Go back</button>
    </article>
  );
}
