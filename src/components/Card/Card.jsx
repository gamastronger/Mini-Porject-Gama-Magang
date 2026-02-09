import "./Card.css";

function ProductCard({ image, title, price, oldPrice, isSale, isNew }) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        {isSale && <span className="badge sale">Sale</span>}
        {isNew && <span className="badge new">New</span>}
        <img src={image} alt={title} />
      </div>

      <div className="product-info">
        <p className="product-title">{title}</p>

        <div className="price">
          <span className="current">Rp {price}</span>
          {oldPrice && <span className="old">Rp {oldPrice}</span>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
