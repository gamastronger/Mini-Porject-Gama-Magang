import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>InnoTees.</h3>
          <p className="footer-email">refasetyagama@gmail.com</p>
          <p className="footer-address">
            Ketintang, Gayungan,<br />Surabaya
          </p>
          <button className="footer-button">Contact Us</button>
        </div>

        <div className="footer-column">
          <h4>About</h4>
          <p>
            InnoTees is a t-shirt design and printing platform that helps you realize
            your creative imagination. With InnoTees, every idea you have can be a
            unique and attractive t-shirt design.
          </p>
        </div>

        <div className="footer-column">
          <h4>Newest</h4>
          <p>
            Stay Connected. Receive the latest news, events, and updates directly
            to your inbox.
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2024 GamaPrint. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
