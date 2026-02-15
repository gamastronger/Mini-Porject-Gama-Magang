import "./Hero.css";
import { Link } from "react-router-dom";

function Hero({ titleLines = [], buttonText = "", stats = [], image = "" }) {
  return (
    <section className="hero">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            {titleLines.map((line, index) => (
              <span key={index}>
                {line} <br />
              </span>
            ))}
          </h1>

          <Link to="/products" className="button">{buttonText}</Link>

          <div className="stats">
            {stats.map((item, index) => (
              <div className="stat-item" key={index}>
                <h1>{item.value}</h1>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-image">
          <img src={image} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;