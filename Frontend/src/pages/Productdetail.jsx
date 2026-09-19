
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState,useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { AuthContext } from "../context/Authcontext";
import "../style/productdetail.css";

const Productdetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if user is logged in
const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/products/${id}`
        );

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Add to Cart
  const handleAddToCart = () => {
    // Check login first
    if (!user) {
      alert("Please login first to add products to your cart.");
      navigate("/login");
      return;
    }

    // Add product only if logged in
    if (product) {
      dispatch(
        addToCart({
          id: product._id,
          productId: product._id,
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          qty: 1,
        })
      );

      alert("Product added to cart!");
    }
  };

  if (loading) {
    return (
      <div className="product-loading">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        Product not found.
      </div>
    );
  }

  return (
    <div className="product-detail-wrapper">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        {" / "}
        <Link to="/shop">Shop</Link>
        {" / "}
        {product.category}
        {" / "}
        <span>{product.name}</span>
      </div>

      {/* MAIN SECTION */}
      <div className="product-detail">

        {/* LEFT SIDE - PRODUCT IMAGE */}
        <div className="detail-image-container">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="detail-image"
          />
        </div>

        {/* RIGHT SIDE - PRODUCT DETAILS */}
        <div className="detail-info">

          <p className="detail-category">
            {product.category}
          </p>

          <h2>{product.name}</h2>

          <p className="detail-price">
            ₹{product.price.toFixed(2)}
          </p>

          <div className="detail-description">
            <h4>Product Description</h4>
            <p>{product.description}</p>
          </div>

          <div className="detail-actions">
            <button
              onClick={handleAddToCart}
              className="btn"
              disabled={product.stock <= 0}
            >
              {product.stock > 0
                ? "Add to Shopping Cart"
                : "Out of Stock"}
            </button>
          </div>

          <p
            className="detail-stock"
            style={{
              color:
                product.stock > 0
                  ? "#059669"
                  : "#dc2626",
            }}
          >
            {product.stock > 0
              ? `● In Stock (${product.stock} units available)`
              : "● Temporarily Out of Stock"}
          </p>

        </div>
      </div>
    </div>
  );
};

export default Productdetail;
