import Printing from "./Printing/Printing";
import Tshirt from "./Tshirt/Tshirt";

function Products() {
  const tshirtProducts = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: "Rp. 90.000,00",
    },
    {
      id: 2,
      name: "Premium T-Shirt and Design",
      price: "Rp. 130.000,00",
      oldPrice: "Rp. 150.000,00",
    },
    {
      id: 3,
      name: "Short Sleeve T-shirt for Kids",
      price: "Rp. 50.000,00",
      oldPrice: "Rp. 70.000,00",
    },
    {
      id: 4,
      name: "Youth Short Sleeve Tee",
      price: "Rp. 80.000,00",
    },
  ];

  return (
    <main className="products-page">
      <Printing
        title="T-shirt printing made easy."
        description="Bring your creative ideas to life with ease. Design, personalize, and print custom t-shirts in minutes!"
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
