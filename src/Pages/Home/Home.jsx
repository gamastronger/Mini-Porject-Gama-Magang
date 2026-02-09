import "./Home.css";
import Hero from "./Sections/Hero/Hero.jsx";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import Cta from "./Sections/Cta/Cta.jsx";
// import CTA from "./sections/CTA/CTA";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
  return (
    <main className="home">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Cta />
      <Footer />
    </main>
  );
}

export default Home;
