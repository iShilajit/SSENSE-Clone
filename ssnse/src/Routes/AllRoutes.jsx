import React from 'react'
import { Route, Routes } from 'react-router'
import { Everything } from '../Components/Everything'
import { Footer } from '../Components/Foot/Footer'
import { Home } from '../Components/Home'
import { Login } from '../Components/Login'
import { Menswear } from '../Components/Menswear'
import { Navbar } from '../Components/Navbar'
import { Womenwear } from '../Components/Womenwear'
export const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Men' element={<Menswear/>}/>
    <Route path='/Women' element={<Womenwear/>}/>
    <Route path='/Everything' element={<Everything/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    
    

    </Routes>
<Footer/>
    </div>
  )
}
