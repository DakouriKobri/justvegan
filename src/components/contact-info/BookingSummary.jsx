export default function BookingSummary({ booking }) {
  const { fullName, email, numberOfPeople, date, time } = booking;
  return (
    <article className="booking-summary">
      <h3 className="booking-summary__title">Your booking summary</h3>
      <p className="booking-summary__item">
        <span className="booking-summary__label">Full Name: </span>
        {fullName}
      </p>
      <p className="booking-summary__item">
        <span className="booking-summary__label">Email: </span>
        {email}
      </p>
      <p className="booking-summary__item">
        <span className="booking-summary__label">Number of people:</span>
        {numberOfPeople}
      </p>
      <p className="booking-summary__item">
        <span className="booking-summary__label">Date:</span>
        {date}
      </p>
      <p className="booking-summary__item">
        <span className="booking-summary__label">Time:</span>
        {time}
      </p>
      <div>
        <p className="warning">
          <strong>WARNING!</strong>
        </p>
        <p className="warning__text">
          This site was built only as an educational and self-promoting material
          and does not provide any actual service. Please, feel free to contact
          the developer at <strong>maurille.kobri@gmail.com</strong> if you are
          interesting in his work.
        </p>
      </div>
    </article>
  );
}
