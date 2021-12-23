// Project File
import "./hero.scss";

export default function Hero({
  ariaLabel,
  backgroundImage,
  heroText,
  subtractedHeight,
}) {
  return (
    <div
      className="hero"
      style={{
        height: `calc(100vh - ${subtractedHeight})`,
        backgroundImage: `url(${backgroundImage})`,
        ariaLabel: `${ariaLabel}`,
      }}
    >
      {heroText}
    </div>
  );
}
