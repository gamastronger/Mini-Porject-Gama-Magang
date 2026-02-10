import "./Testimoni.css";
import user1 from "../../../Assets/Images/user1.png";
import user2 from "../../../Assets/Images/user2.png";
import user3 from "../../../Assets/Images/user3.png";

export default function Testimoni({title, description, testimonials}) {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={user1} alt={testimonials[0].name} />
            <div>
              <strong>{testimonials[0].name}</strong>
              <span>{testimonials[0].role}</span>
            </div>
          </div>
          <p>
            {testimonials[0].message}
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={user2} alt={testimonials[1].name} />
            <div>
              <strong>{testimonials[1].name}</strong>
              <span>{testimonials[1].role}</span>
            </div>
          </div>
          <p>
            {testimonials[1].message}
          </p>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-user">
            <img src={user3} alt={testimonials[2].name} />
            <div>
              <strong>{testimonials[2].name}</strong>
              <span>{testimonials[2].role}</span>
            </div>
          </div>
          <p>
            {testimonials[2].message}
          </p>
        </div>
      </div>
    </section>
  );
}
