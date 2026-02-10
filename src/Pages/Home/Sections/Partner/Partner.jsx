import "./partner.css";

export default function Partner({ title, LogoPartner1, LogoPartner2, LogoPartner3, LogoPartner4 }) {
    return(
        <section className="partner">
            <div className="partner-content">
                <h4 className="partner-title">{title}</h4>
                <div className="partner-logos">
                    <img src={LogoPartner1} alt="Partner 1" />
                    <img src={LogoPartner2} alt="Partner 2" />
                    <img src={LogoPartner3} alt="Partner 3" />
                    <img src={LogoPartner4} alt="Partner 4" />
                </div>
            </div>
        </section>
    )
}