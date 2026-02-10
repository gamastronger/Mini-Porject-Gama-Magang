import "./Strengthening.css";
import leftImg from "../../../Assets/Images/hero-left.png";
import rightImg from "../../../Assets/Images/hero-right.png";

function Strengthening({title, description, buttonPrimary, buttonOutline}){
  return (
    <section className="strengthening-section">
      <div className="strengthening-container">
        <div className="hero-image left">
          <img src={leftImg} alt="T-shirt preview left" />
        </div>

        <div className="strengthening-content">
          <h2>
            {title}
          </h2>
          <p>{description}</p>

          <div className="hero-buttons">
            <button className="btn primary">{buttonPrimary}</button>
            <button className="btn outline">{buttonOutline}</button>
          </div>
        </div>

        <div className="hero-image right">
          <img src={rightImg} alt="T-shirt preview right" />
        </div>
      </div>
    </section>
  );
}

export default Strengthening;
