import "./Cta.css";
import CtaImage from "../../../../assets/images/imageCta.png";

export default function FeaturedProducts({ title, description, buttonText }) {
    return(
        <>
        <section className="cta-section">
            <div className="cta-image">
                <img src={CtaImage} alt="CTA illustration" />
            </div>

            <div className="cta-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <button className="cta-button">{buttonText}</button>
            </div>
        </section>

        </>
        
    )
}