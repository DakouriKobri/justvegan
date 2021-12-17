import { useState } from "react";

export default function BookingForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function resetForm() {
    setFullName("");
    setNumberOfPeople(2);
    setEmail("");
    setDate("");
    setTime("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newBooking = { fullName, email, numberOfPeople, date, time };
    console.log(newBooking);
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
          placeholder="2"
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
          <option value="11:00"> 11:00</option>
          <option value="12:00"> 12:00</option>
          <option value="14:00"> 14:00</option>
          <option value="16:00"> 16:00</option>
          <option value="18:00"> 18:00</option>
          <option value="20:00"> 20:00</option>
          <option value="22:00"> 22:00</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
