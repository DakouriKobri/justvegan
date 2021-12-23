// NPM Packages
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

// Project Files
import Hero from "../../components/hero/Hero";
import Ingredients from "../../components/ingredients/Ingredients";
import NutritionFacts from "../../components/nutrition-table/NutritionFacts";
import productData from "../../data/productData.json";
import "./product-details.scss";

export default function ProductDetails() {
  const history = useHistory();
  const { category, slug } = useParams();
  const product = productData.find(
    (data) => data.category === category && data.slug === slug
  );
  const { description, image, ingredients, name } = product;
  const imageSrc = require(`../../images/${category}/${image}`);

  return (
    <section className="details">
      <div className="details__hero">
        <Hero
          backgroundImage={imageSrc}
          subtractedHeight="212px"
          ariaLabel={name}
        />
      </div>
      <div className="container">
        <div className="wrapper">
          <h1 className="details__name">{name}</h1>
          <p className="details__description">{description}</p>
          <h2 className="details__subtitle">Ingredients</h2>
          <Ingredients ingredients={ingredients} />
          <h2 className="details__subtitle">Nutrition Facts</h2>
          <NutritionFacts product={product} />
          <button className="btn btn--product" onClick={() => history.goBack()}>
            &#8592; Go back
          </button>
        </div>
      </div>
    </section>
  );
}
