import "./Footer.css";

function Footer({ email, address, aboutText, newestText }) {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>InnoTees.</h3>
          <p className="footer-email">{email}</p>
          <p className="footer-address">
            {address}
          </p>
          <button className="footer-button">Contact Us</button>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <p>
            {aboutText}
          </p>
        </div>

        <div className="footer-column">
          <h4>Newest</h4>
          <p>
            {newestText}
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
