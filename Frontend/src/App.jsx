
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/about'
import ReturnPolicy from './pages/returnpolicy'
import Disclamer from './pages/disclamer'
import Login from './pages/login'
import Register from './pages/register'
import Productdetail from './pages/Productdetail'
import Cart from './pages/cart'
import CheckOut from './pages/checkout'
import Shop from './pages/shop'
import Profile from './pages/profile';
import AdminDashboard from './admin/Admindashboard'
import AddProduct from './admin/Addproduct'
import AdminProducts from './admin/Adminproduct'
import EditProduct from './admin/Edituser'
import AdminOrders from './admin/Adminorders'
import AdminUsers from './admin/Adminuser'
import './style/global.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/disclaimer" element={<Disclamer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

