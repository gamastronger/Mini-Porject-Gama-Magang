import "./Navbar.css";
import Logo from "../../assets/images/logoinnotes.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice.js";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="nav-logo">
          <img
            src={Logo}
            alt="InnoTees logo"
            className="nav-logo-img"
          />
        </Link>

        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/products">T-Shirt</Link>
          <Link to="/testimonials">Testimonies</Link>
          <Link to="/posts">Posts</Link>
        </nav>

        {isLoggedIn ? (
          <div className="nav-user">
            <span>Halo {user?.name}</span>
            <button onClick={() => dispatch(logout())}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/signin" className="btn-signin">
            Sign In
          </Link>
        )}

      </div>
    </header>
  );
};

export default Navbar;
