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
      <label>
        <span>Full Name:</span>
        <input
          type="text"
          placeholder="Aretha Fraklin"
          onChange={(event) => setFullName(event.target.value)}
          value={fullName}
          required
        />
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          placeholder="a.franklin@franklin.com"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
        />
      </label>
      <label>
        <span>Number of People:</span>
        <input
          type="number"
          placeholder="9"
          min="1"
          max="150"
          onChange={(event) => setNumberOfPeople(event.target.value)}
          value={numberOfPeople}
          required
        />
      </label>
      <label>
        <span>Date:</span>
        <input
          type="date"
          onChange={(event) => setDate(event.target.value)}
          value={date}
          required
        />
      </label>
      <label>
        <span>Time: </span>
        <select onChange={(event) => setTime(event.target.value)} required>
          <option value="">Select Hour</option>
          {selectedOption}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
