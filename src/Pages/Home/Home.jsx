import Hero from "./Sections/Hero/Hero.jsx";
import HowItWorks from "./Sections/HowItWorks/HowItWorks";
import Cta from "./Sections/Cta/Cta.jsx";
import HeroImage from "../../assets/images/gamaHome.svg";
import Partner from "./Sections/Partner/Partner.jsx";
import LogoPartner1 from "../../assets/images/dev.png";
import LogoPartner2 from "../../assets/images/grafistix.png";
import LogoPartner3 from "../../assets/images/rp.png";
import LogoPartner4 from "../../assets/images/s.png";


function Home() {
  return (
    <main>
      <Hero
        titleLines={["Make Your", "Imagination", "Come True"]}
        buttonText="Get Started"
        image={HeroImage}
        stats={[
          { value: "1K+", label: "Collections" },
          { value: "4K+", label: "items trusted to deliver" },
        ]}
      />

      <Partner 
      title="“We provide jerseys in various sizes and models, so that everyone can wear the brand"
      LogoPartner1={LogoPartner1}
      LogoPartner2={LogoPartner2}
      LogoPartner3={LogoPartner3}
      LogoPartner4={LogoPartner4}

      />

      <HowItWorks
      title="How to create custom shirts"
      description="Use all your imagination. Create custom t-shirts easily and quickly."
      titleStepOne="Add your shirt design"
      descriptionStepOne="Upload dan wujudkan kreativitas Anda dengan desain kaos yang unik dan personal."
      titleStepTwo="Choose your shirt style"
      descriptionStepTwo="Pilih gaya kaos yang sesuai dengan kepribadian dan kebutuhan Anda."
      titleStepThree="Place your order"
      descriptionStepThree="Selesaikan pesanan Anda dengan mudah dan cepat melalui platform kami."
      />
      <Cta 
      title="Free and easy way to bring your ideas to life"
      description="Fast, easy and free: Bring your creative ideas to life with easy-to-use and efficient tools without any previous design experience."
      buttonText="Get Started"
      />
    </main>
  );
}

export default Home;
