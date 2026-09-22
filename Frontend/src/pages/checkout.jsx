
import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import '../style/checkout.css';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: '',
    street: '',
    city: '',
    postalCode: '',
    country: ''
  });

  const [loading, setLoading] = useState(false);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check login
    if (!user) {
      alert('Please login first');
      navigate('/login');
      return;
    }

    // Check cart
    if (cartItems.length === 0) {
      alert('Your cart is empty');
      navigate('/shop');
      return;
    }

    try {
      setLoading(true);

      // Convert cart data to the format required by Order model
      const orderData = {
        items: cartItems.map((item) => ({
          productId: item.productId || item._id || item.id,
          quantity: item.qty,
          price: item.price
        })),

        // Your model expects "address", not "shippingAddress"
        // Your model defines address as an array
        address: [address],

        totalAmount: totalPrice
      };

      console.log('Sending order:', orderData);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`
        },

        body: JSON.stringify(orderData)
      });

      const data = await res.json();

      console.log('Server response:', data);

      if (!res.ok) {
        alert(data.message || 'Failed to place order');
        return;
      }

      // Order successfully saved
      alert('Order placed successfully!');

      // Go to profile
      navigate('/profile');

    } catch (error) {
      console.error('Order error:', error);
      alert(error.message || 'Something went wrong');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">

      <h2>Checkout</h2>

      <div className="checkout-content">

        <form onSubmit={handleSubmit} className="shipping-form">

          <h3>Shipping Address</h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={address.fullName}
            onChange={(e) =>
              setAddress({
                ...address,
                fullName: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Street"
            required
            value={address.street}
            onChange={(e) =>
              setAddress({
                ...address,
                street: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="City"
            required
            value={address.city}
            onChange={(e) =>
              setAddress({
                ...address,
                city: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Postal Code"
            required
            value={address.postalCode}
            onChange={(e) =>
              setAddress({
                ...address,
                postalCode: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Country"
            required
            value={address.country}
            onChange={(e) =>
              setAddress({
                ...address,
                country: e.target.value
              })
            }
          />

          <div className="checkout-summary">

            <h4>
              Total to Pay: ₹{totalPrice.toFixed(2)}
            </h4>

            <button
              type="submit"
              className="btn"
              disabled={loading}
            >
              {loading ? 'Placing Order...' : 'Pay Now'}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Checkout;

