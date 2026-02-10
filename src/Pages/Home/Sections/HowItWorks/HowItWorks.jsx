import "./HowItWorks.css";
import Hiw1 from "../../../../assets/images/hiw1.png";
import Hiw2 from "../../../../assets/images/hiw2.png";
import Hiw3 from "../../../../assets/images/hiw3.png";

function HowItWorks({ title, description, titleStepOne, descriptionStepOne, titleStepTwo, descriptionStepTwo, titleStepThree, descriptionStepThree }) {
  return (
    <>
    <section className="how-it-works-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>

    <section className="hiw-row">
      <div className="hiw-image">
        <img src={Hiw1} alt="Add your shirt design" />
      </div>
      <div className="hiw-text">
        <h3>{titleStepOne}</h3>
        <p>{descriptionStepOne}</p>
      </div>
    </section>

    <section className="hiw-row reverse">
      <div className="hiw-image">
        <img src={Hiw2} alt="Choose your shirt style" />
      </div>
      <div className="hiw-text">
        <h3>{titleStepTwo}</h3>
        <p>{descriptionStepTwo}</p>
      </div>
    </section>

    <section className="hiw-row">
      <div className="hiw-image">
        <img src={Hiw3} alt="Place your order" />
      </div>
      <div className="hiw-text">
        <h3>{titleStepThree}</h3>
        <p>{descriptionStepThree}</p>
      </div>
    </section>
    </>
  );
}

export default HowItWorks;
