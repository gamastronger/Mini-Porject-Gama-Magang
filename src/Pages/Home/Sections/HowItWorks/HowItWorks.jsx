import "./HowItWorks.css";
import Hiw1 from "../../../../assets/images/hiw1.png";
import Hiw2 from "../../../../assets/images/hiw2.png";
import Hiw3 from "../../../../assets/images/hiw3.png";

function HowItWorks() {
  return (
    <>
    <section className="how-it-works-section">
      <h2>How to create custom shirts</h2>
      <p>Use all your imagination. Create custom t-shirts easily and quickly.</p>
    </section>

    <section className="hiw-row">
      <div className="hiw-image">
        <img src={Hiw1} alt="Add your shirt design" />
      </div>
      <div className="hiw-text">
        <h3>Add your shirt design</h3>
        <p>Upload dan wujudkan kreativitas Anda dengan desain kaos yang unik dan personal.</p>
      </div>
    </section>

    <section className="hiw-row reverse">
      <div className="hiw-image">
        <img src={Hiw2} alt="Choose your shirt style" />
      </div>
      <div className="hiw-text">
        <h3>Choose your shirt style</h3>
        <p>Pilih gaya kaos yang sesuai dengan kepribadian dan kebutuhan Anda.</p>
      </div>
    </section>

    <section className="hiw-row">
      <div className="hiw-image">
        <img src={Hiw3} alt="Place your order" />
      </div>
      <div className="hiw-text">
        <h3>Place your order</h3>
        <p>Selesaikan pesanan Anda dengan mudah dan cepat melalui platform kami.</p>
      </div>
    </section>
    </>
  );
}

export default HowItWorks;
