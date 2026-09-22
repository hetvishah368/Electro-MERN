
import { Link } from "react-router-dom";
import "../style/productcard.css";

const Productcard = ({product}) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₹{product.price.toFixed(2)}</p>
               
            </div>
            <div className="product-actions">
                <button className="add-to-cart-button"> <Link to={`/product/${product._id}`} className="product-link">View Details</Link></button>
            </div>
        </div>
    )
}

export default Productcard