import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Verify from './pages/verify/verify'
import Footer from './components/footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

import Order from './pages/Order/Order'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const [showLogin,setShowLogin]=useState(false)
  
  return (
    <>
    

    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
   
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route  path='/cart' element={<Cart/>}/>
        <Route path='/order' element ={<Order/>}/>
          <Route path='/verify' element ={<Verify/>}/>
          <Route path ='/myorders' element ={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App

