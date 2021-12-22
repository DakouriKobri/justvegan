import { useState } from "react";
import timeOptionData from "../../data/timeOptionData.json";
import TimeOptions from "./TimeOptions";

export default function BookingForm({ getBooking }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const selectedOption = timeOptionData.map((data) => (
    <TimeOptions key={data.label} data={data} />
  ));

  function resetForm() {
    setFullName("");
    setNumberOfPeople();
    setEmail("");
    setDate("");
    setTime("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newBooking = { fullName, email, numberOfPeople, date, time };
    getBooking(newBooking);
    resetForm();
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label className="grid">
        <span className="booking-form__label">Full Name</span>
        <input
          type="text"
          placeholder="Aretha Franklin"
          onChange={(event) => setFullName(event.target.value)}
          value={fullName}
          required
          className="booking-form__input"
        />
      </label>
      <label className="grid">
        <span className="booking-form__label">Email</span>
        <input
          type="email"
          placeholder="a.franklin@franklin.com"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
          className="booking-form__input"
        />
      </label>
      <label className="grid">
        <span className="booking-form__label">Number of People</span>
        <input
          type="number"
          placeholder="9"
          min="1"
          max="150"
          onChange={(event) => setNumberOfPeople(event.target.value)}
          value={numberOfPeople}
          required
          className="booking-form__input"
        />
      </label>
      <label className="grid">
        <span className="booking-form__label">Date</span>
        <input
          type="date"
          onChange={(event) => setDate(event.target.value)}
          value={date}
          required
          className="booking-form__input"
        />
      </label>
      <label className="grid">
        <span className="booking-form__label">Time</span>
        <select
          onChange={(event) => setTime(event.target.value)}
          required
          className="booking-form__input"
        >
          <option value="">Select Hour</option>
          {selectedOption}
        </select>
      </label>
      <button className="btn">Submit</button>
    </form>
  );
}
