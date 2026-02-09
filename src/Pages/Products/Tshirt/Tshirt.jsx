import "./Tshirt.css";
import tshirt1 from "../../../assets/images/grid1.png";
import tshirt2 from "../../../assets/images/grid2.png";
import tshirt3 from "../../../assets/images/grid3.png";
import tshirt4 from "../../../assets/images/grid4.png";

function Store() {
  return (
    <section className="store-section">
      <div className="store-header">
        <h2>Our picks for you</h2>
        <p>
          Discover our selection of products designed for your comfort and
          style. Each item is carefully selected to meet your needs.
        </p>
      </div>

      <div className="product-grid">
        <div className="product-card">
          <img src={tshirt1} alt="Premium T-Shirt" />
          <h4>Premium T-Shirt</h4>
          <p className="price">Rp. 90.000,00</p>
        </div>

        <div className="product-card">
          <div className="badge-group">
          </div>
          <img src={tshirt2} alt="Premium T-Shirt and Design" />
          <h4>Premium T-Shirt and Design</h4>
          <p className="price">
            Rp. 130.000,00 <span>Rp. 150.000,00</span>
          </p>
        </div>

        <div className="product-card">
          <img src={tshirt3} alt="Youth Short Sleeve Tee" />
          <h4>Youth Short Sleeve Tee</h4>
          <p className="price">Rp. 80.000,00</p>
        </div>

        <div className="product-card">
          <div className="badge-group">
          </div>
          <img src={tshirt4} alt="Kids T-Shirt" />
          <h4>Short Sleeve-T shirt for Kids</h4>
          <p className="price">
            Rp. 50.000,00 <span>Rp. 70.000,00</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Store;
