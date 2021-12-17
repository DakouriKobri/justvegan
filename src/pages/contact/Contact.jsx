import { useState } from "react";
import OpeningTimes from "../../components/contact-info/OpeningTimes";
import ladyChef from "../../images/categories/lady-chef.jpg";
import openingHours from "../../data/openingHours.json";
import BookingForm from "../../components/contact-info/BookingForm";
import Modal from "../../components/modal/Modal";
import BookingSummary from "../../components/contact-info/BookingSummary";
import Map from "../../components/contact-info/Map";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [booking, setBooking] = useState({});
  const openingTimes = openingHours.map((time) => (
    <OpeningTimes key={time.id} {...time} />
  ));
  console.log(showModal);
  function getBooking(newBooking) {
    setBooking(newBooking);
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

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
      <BookingForm getBooking={getBooking} />
      {showModal && (
        <Modal handleClose={handleClose}>
          <BookingSummary booking={booking} />
        </Modal>
      )}
      <h2>Address</h2>
      <p> Magnus Ladulåsgatan 8C, 118 66 Stockholm</p>
      <Map />
    </section>
  );
}
