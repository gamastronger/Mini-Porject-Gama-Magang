import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/authSlice";
import "./SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const fakePasswords = {
    Bret: "111",
    Antonette: "222",
    Samantha: "333",
    Karianne: "444",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      return alert("Username dan password wajib diisi");
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      const users = await res.json();

      const foundUser = users.find(
        user => user.username === username
      );

      if (!foundUser) {
        alert("Username tidak ditemukan");
        return;
      }

      if (fakePasswords[username] !== password) {
        alert("Password salah");
        return;
      }

      dispatch(login(foundUser));
      navigate("/");

      alert("Login berhasil!");

    } catch (err) {
      console.error(err);
      alert("Terjadi error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-card">
        <h1>Sign In</h1>

        <form onSubmit={handleSubmit} className="signin-form">
          <input
            type="text"
            className="signin-input"
            placeholder="Username (contoh: Bret)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="signin-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type="submit" 
            className="signin-button" 
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
