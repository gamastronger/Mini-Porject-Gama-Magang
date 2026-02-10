import Strengthening from "./Strengthening/Strengthening";
import Testimoni from "./Testimoni/Testimoni";

export default function Testimonials() {
  const testimonialsData = [
    {
      id: 1,
      name: "Gumi",
      role: "Owner",
      message:
        "InnoTees really brought my imagination to life! The t-shirt designs are amazing and high quality.",
    },
    {
      id: 2,
      name: "Plufy",
      role: "Director",
      message:
        "With InnoTees, I can create unique and personalized t-shirt designs. Their customer service is also very helpful.",
    },
    {
      id: 3,
      name: "Itis",
      role: "Designer",
      message:
        "InnoTees allows me to express my creativity in an interesting way. The t-shirts I make are always a favorite.",
    },
  ];

  return (
    <main className="testimonials-page">
      <Testimoni
        title="What People Are Saying"
        description="We provide support for more than 5K+ Businesses."
        testimonials={testimonialsData}
      />

      <Strengthening
      title="Make your holiday with the best T-shirt design."
      description="T-shirts that keep you moving."
      buttonPrimary="Shop Now"
      buttonOutline="Contact Us"
      />
    </main>
  );
}
