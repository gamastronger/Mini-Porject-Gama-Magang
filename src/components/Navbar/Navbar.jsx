import "./Navbar.css";
import Logo from "../../assets/images/logoinnotes.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="nav-left">
          <a href="#home" className="nav-logo">
            <img
              src={Logo}
              alt="InnoTees logo"
              className="nav-logo-img"
            />
          </a>
        </div>

        <nav className="nav-center">
          <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/products">T-Shirt</a></li>
            <li><a href="/testimonials">Testimonies</a></li>
          </ul>
        </nav>

        <div className="nav-right">
          <button className="btn-outline">Sign In</button>
          <button className="btn-primary">Sign Up</button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
