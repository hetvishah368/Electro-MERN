
import { Link, useNavigate } from "react-router-dom";
import "../style/navbar.css";
import { AuthContext } from "../context/Authcontext";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const CartItems = useSelector((state) => state.cart.cartItems || []);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(clearCart());
        logout();
        navigate("/");
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src="/logo/logo.png" alt="Electro" className="navbar-logo" />
                    Electro
                </Link>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✕" : "☰"}
            </button>
            <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart ({CartItems.length})</Link></li>
                {user ? (
                    <>
                        {user.role !== "admin" && (
                            <li><Link to="/profile">Profile</Link></li>
                        )}
                        <li>Hello, {user.name}</li>
                        {user.role === "admin" && (
                            <li><Link to="/admin">Admin</Link></li>
                        )}
                        <li>
                            <button onClick={handleLogout} className="btn-logout">
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li><Link to="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

