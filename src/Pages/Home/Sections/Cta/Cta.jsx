import "./Cta.css";
import CtaImage from "../../../../assets/images/imageCta.png";

export default function FeaturedProducts() {
    return(
        <>
        <section className="cta-section">
            <div className="cta-image">
                <img src={CtaImage} alt="CTA illustration" />
            </div>

            <div className="cta-content">
                <h2>Free and easy way to bring your ideas to life</h2>
                <p>
                Fast, easy and free: Bring your creative ideas to life with easy-to-use and efficient tools without any previous design experience.
                </p>
                <button className="cta-button">Get Started</button>
            </div>
        </section>

        </>
        
    )
}