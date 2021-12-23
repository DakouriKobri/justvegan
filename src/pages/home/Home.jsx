import Category from "../../components/category/Category";
import Hero from "../../components/hero/Hero";
import categoryData from "../../data/categoryData.json";
import imageSrc from "../../images/categories/home-hero.jpg";
import "./home.scss";

export default function Home() {
  const categoryList = categoryData.map((category) => (
    <Category key={category.id} category={category} />
  ));

  const text = (
    <div className="text">
      <h1 className="text__logo">JustVegan</h1>
      <hr />
      <h2 className="slogan">Eat Healthy</h2>
    </div>
  );
  const alt =
    "Uncooked vegan meal ingredients spread on a table with cutleries";

  return (
    <>
      <Hero
        backgroundImage={imageSrc}
        subtractedHeight="60px"
        heroText={text}
        ariaLabel={alt}
      />
      {/* <div className="container"> */}
      <div>
        <ul className="home__list">{categoryList}</ul>
      </div>
    </>
  );
}
