import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Slider from './Slider.jsx'
import Category from './Category.jsx'
import Brands from './Brands.jsx'
import Mens from './Mens.jsx'
import Womens from './Womens.jsx'
import Footwear from './Footwear.jsx'
import Footer from './Footer.jsx'

function Home() {
  return (
    <>
    <Navbar/>
    <Slider/>
    <Category/>
    <Brands/>
    <Mens/>
    <Womens/>
    <Footwear/>
    <Footer/>
    </>
  )
}

export default Home