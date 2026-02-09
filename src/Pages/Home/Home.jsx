import "./Home.css";
import Hero from "./Sections/Hero/Hero.jsx";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import Cta from "./Sections/Cta/Cta.jsx";

function Home() {
  return (
    <main className="home">
      <Hero />
      <HowItWorks />
      <Cta />
    </main>
  );
}

export default Home;
