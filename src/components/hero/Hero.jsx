import "./hero.scss";

export default function Hero({ backgroundImage, subtractedHeight, heroText }) {
  return (
    <div
      className="hero"
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {heroText}
    </div>
  );
}
