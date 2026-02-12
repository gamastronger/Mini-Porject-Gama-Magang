import Printing from "./Printing/Printing";
import Tshirt from "./Tshirt/Tshirt";
import tshirt1 from "../../assets/images/grid1.png";
import tshirt2 from "../../assets/images/grid2.png";
import tshirt3 from "../../assets/images/grid3.png";
import tshirt4 from "../../assets/images/grid4.png";

function Products() {
  const tshirtProducts = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: "Rp. 90.000,00",
      image: tshirt1,
    },
    {
      id: 2,
      name: "Premium T-Shirt and Design",
      price: "Rp. 130.000,00",
      image: tshirt2,
    },
    {
      id: 3,
      name: "Short Sleeve T-shirt for Kids",
      price: "Rp. 50.000,00",
      image: tshirt3,
    },
    {
      id: 4,
      name: "Youth Short Sleeve Tee",
      price: "Rp. 80.000,00",
      image: tshirt4,
    },
  ];

  return (
    <main className="products-page">
      <Printing
        title="T-shirt printing made easy."
        description="Bring your creative ideas to life with ease."
      />

      <Tshirt
        title="Our picks for you"
        description="Discover our selection of products designed for your comfort and style."
        products={tshirtProducts}
      />
    </main>
  );
}

export default Products;
