import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Product from './Pages/Product'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
      <Footer/>
      
    </>
  )
}

export default App
