export default function BookingSummary({ booking }) {
  const { fullName, email, numberOfPeople, date, time } = booking;
  return (
    <article>
      <h3>Your booking summary</h3>
      <p>
        <span>
          <strong>Full Name:</strong>
          {fullName}
        </span>
      </p>
      <p>
        <span>
          <strong>Email:</strong>
        </span>
        {email}
      </p>
      <p>
        <span>
          <strong>Number of people:</strong>
        </span>
        {numberOfPeople}
      </p>
      <p>
        <span>
          <strong>Date:</strong>
        </span>
        {date}
      </p>
      <p>
        <span>
          <strong>Time:</strong>
        </span>
        {time}
      </p>
      <div className="warning">
        <p className="warning">
          <strong>WARNING!</strong>
        </p>
        <p>
          Please, note that this website doesn't provide any kind of service. It
          was built only as an educational and self-promoting material. Feel
          free to contact us at <strong>maurille.kobri@gmail.com</strong> if
          your are interesting in a collaboration in website building.
        </p>
      </div>
    </article>
  );
}
