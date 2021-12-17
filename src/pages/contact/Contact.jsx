import OpeningTimes from "../../components/contact-info/OpeningTimes";
import ladyChef from "../../images/categories/lady-chef.jpg";
import openingHours from "../../data/openingHours.json";
import BookingForm from "../../components/contact-info/BookingForm";

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
      <h2>Book a Table</h2>
      <BookingForm />
      <h2>Address</h2>
      <p>
        <span>City</span>
        <span>Stockholm</span>
      </p>
      <p>
        <span>Country</span>
        <span>Sweden</span>
      </p>
      <h2 style={{ backgroundColor: "orangered" }}>Map</h2>
    </section>
  );
}
