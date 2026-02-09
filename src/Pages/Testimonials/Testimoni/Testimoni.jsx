import "./Testimoni.css";
import user1 from "../../../Assets/Images/user1.png";
import user2 from "../../../Assets/Images/user2.png";
import user3 from "../../../Assets/Images/user3.png";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>What People Are Saying</h2>
        <p>We provide support for more than 5K+ Businesses.</p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={user1} alt="Gumi" />
            <div>
              <strong>Gumi</strong>
              <span>Owner</span>
            </div>
          </div>
          <p>
            “InnoTees really brought my imagination to life! The t-shirt designs
            are amazing and high quality.”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={user2} alt="Plufy" />
            <div>
              <strong>Plufy</strong>
              <span>Director</span>
            </div>
          </div>
          <p>
            “With InnoTees, I can create unique and personalized t-shirt designs.
            Their customer service is also very helpful.”
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={user3} alt="Itis" />
            <div>
              <strong>Itis</strong>
              <span>Designer</span>
            </div>
          </div>
          <p>
            “InnoTees allows me to express my creativity in an interesting way.
            The t-shirts I make are always a favorite.”
          </p>
        </div>
      </div>
    </section>
  );
}
