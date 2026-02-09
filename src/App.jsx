import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

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
      </Routes>
    </>
  )
}

export default App
