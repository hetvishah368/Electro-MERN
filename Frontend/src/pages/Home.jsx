
import { useEffect, useState } from "react";
import Productcard from "../components/ProductCard";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchproducts = async () => {
      try{
        const response = await fetch("http://localhost:8000/api/products");
        const data = await response.json();
        setProducts(data.slice(0,3));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchproducts();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-banner">
        <div>
        <h1>Welcome to Electro</h1>
        <p>Your one-stop shop for all your electronic needs.</p>
        </div>
        <div>
          <img src="/h10.png" alt="Electro Banner" className="hero-image" />
        </div>
      </div>
      <h2>Featured Products</h2>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
         <Productcard key={product._id} product={product} />
          ))}
        </div>
      )}

  </div>
);
}

export default Home
