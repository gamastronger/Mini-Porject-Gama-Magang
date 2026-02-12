import "./Tshirt.css";

function Tshirt({ title, description, products }) {
  return (
    <section className="store-section">
      <header className="store-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </header>

      <div className="product-grid">
        {products.map(({ id, name, price, image }) => (
          <div className="product-card" key={id}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p className="price">{price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tshirt;
