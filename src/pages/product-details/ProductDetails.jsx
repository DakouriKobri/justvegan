import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import Ingredients from "../../components/ingredients/Ingredients";
import NutritionTable from "../../components/nutrition-table/NutritionTable";
import productData from "../../data/productData.json";

export default function ProductDetails() {
  const history = useHistory();
  const { category, slug } = useParams();
  const product = productData.find(
    (data) => data.category === category && data.slug === slug
  );
  const { description, image, ingredients, name } = product;
  const imageSrc = require(`../../images/${category}/${image}`);

  return (
    <article className="details">
      <div className="details__hero">
        <Hero
          backgroundImage={imageSrc}
          subtractedHeight="212px"
          ariaLabel={name}
        />
      </div>
      <div className="container">
        <h1 className="details__name">{name}</h1>
        <p className="details__description">{description}</p>
        <h2>Ingredients</h2>
        <Ingredients ingredients={ingredients} />
        <h2>Nutrition Facts</h2>
        <NutritionTable product={product} />
        <button onClick={() => history.goBack()}>&#8592; Go back</button>
      </div>
    </article>
  );
}
