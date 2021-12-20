import "./hero.scss";

export default function Hero({ backgroundImage, subtractedHeight, heroText }) {
  return (
    <div
      className="hero"
      style={{
        height: `calc(100vh - ${subtractedHeight})`,
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {heroText}
    </div>
  );
}
