import "./Tshirt.css";
import tshirt1 from "../../../assets/images/grid1.png";
import tshirt2 from "../../../assets/images/grid2.png";
import tshirt3 from "../../../assets/images/grid3.png";
import tshirt4 from "../../../assets/images/grid4.png";

const images = [tshirt1, tshirt2, tshirt3, tshirt4];

function Tshirt({ title, description, products }) {
  return (
    <section className="store-section">
      <div className="store-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={item.id}>
            <img src={images[index]} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">
              {item.price}
              {item.oldPrice && <span>{item.oldPrice}</span>}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tshirt;
