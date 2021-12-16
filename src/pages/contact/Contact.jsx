import OpeningTimes from "../../components/contact-info/OpeningTimes";
import ladyChef from "../../images/categories/lady-chef.jpg";
import openingHours from "../../data/openingHours.json";

export default function Contact() {
  const openingTimes = openingHours.map((time) => (
    <OpeningTimes key={time.id} {...time} />
  ));

  return (
    <section className="contact">
      <div className="contact__hero">
        <img
          src={ladyChef}
          alt="Smiling lady-chef cooking in kitchen"
          className="contact__hero__image"
        />
      </div>
      <h2>Opening Times</h2>
      <ul>{openingTimes}</ul>
    </section>
  );
}
