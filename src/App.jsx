import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceHolder from './pages/PlaceHolder/PlaceHolder'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin,setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}

    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceHolder/>}/>
      </Routes>
      <AppDownload />
      
    </div>
    <Footer />
    </>
  )
}

export default App
