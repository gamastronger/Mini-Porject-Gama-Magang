import "./home.css";
import HeroImage from "../../assets/images/gamaHome.svg";
function Home() {
  return (
    <section className="home">
      <div className="home-content">

        <div className="home-text">
          <h1 className="home-title">
            Make Your <br />
            Imagination <br />
            Come True
          </h1>

          <button className="buton">Get Started</button>

          <div className="stats">
            <div className="stat-item">
              <h1>1K+</h1>
              <p>Collections</p>
            </div>

            <div className="stat-item">
              <h1>4K+</h1>
              <p>items trusted to deliver</p>
            </div>
          </div>
        </div>

        <div className="home-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Home;
