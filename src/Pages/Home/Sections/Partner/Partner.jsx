import dev from "../../../../assets/images/dev.png";
import grafistix from "../../../../assets/images/grafistix.png";
import rp from "../../../../assets/images/rp.png";
import s from "../../../../assets/images/s.png";


import "./partner.css";

export default function Partner() {
    return(
        <section className="partner">
            <div className="partner-content">
                <h4 className="partner-title">“We provide jerseys in various sizes and models, so that everyone can wear the brand"</h4>
                <div className="partner-logos">
                    <img src={dev} alt="Partner 1" />
                    <img src={grafistix} alt="Partner 2" />
                    <img src={rp} alt="Partner 3" />
                    <img src={s} alt="Partner 4" />
                </div>
            </div>
        </section>
    )
}