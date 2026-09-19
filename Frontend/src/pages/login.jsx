import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Authcontext";
import "../style/auth.css";

const Login = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

       const { login } = useContext(AuthContext);
        const navigate = useNavigate();
      
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch("http://localhost:8000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                    
                        email,
                        password,
                    }),
                });

                const data = await response.json();

                if (response.ok) {
                    login(data);
                    navigate("/");
                } else {
                    alert(data.message || "Login failed.");
                }
            } catch (error) {
                console.error("Error during login:", error);
                alert("Login failed. Please try again.");
            }
        };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
