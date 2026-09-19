
import { Link } from "react-router-dom";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3 className="footer-logo">Electro</h3>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/return-policy">Returns Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} Electro. All rights reserved.
        </p>

        <p> Your trusted destination for the latest electronic products, gadgets, and accessories at great prices. </p> </div> 
        <div className="footer-section"> <h4>Customer Support</h4> <p>Need help with your order?</p> <p>Our support team is always ready to assist you.</p> <p><strong>Phone:</strong> +91 98765 43210</p> <p><strong>Email:</strong> support@electro.com</p> </div> 
        <div className="footer-section"> <h4>Information</h4> <p>Fast & reliable delivery</p> <p>Secure payment options</p> <p>Quality electronic products</p> <p>Customer-friendly service</p> </div>
         <div className="footer-section"> <h4>About Electro</h4> <p> Electro makes it easy to discover and shop for smartphones, laptops, headphones, smart devices, and other electronic essentials. </p> </div>
    
    </footer >
  );
};

export default Footer;

