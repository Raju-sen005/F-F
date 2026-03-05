import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import CheckOut from './pages/CheckOut.jsx'
import NewArrivals from './pages/NewArrivals.jsx'
import Cart from './pages/Cart.jsx'
import Customer from './pages/Customer.jsx'
import BrandsProducts from './pages/BrandsProducts.jsx'

function App() {

  return (
    <>
   <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/men" element={<Products/>}/> 
        <Route path="/women" element={<Products/>}/> 
        <Route path="/footwear" element={<Products/>}/> 
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/new-arrivals" element={<NewArrivals/>}/> 
        <Route path="/cart" element={<Cart/>}/> 
        <Route path="/customer" element={<Customer/>}/> 
        <Route path="/brands/:brandId" element={<BrandsProducts/>}/> 
      </Routes>
    </>
  )
}

export default App
