import React from 'react'
import { Route, Routes } from 'react-router'
import { Footer } from '../Components/Foot/Footer'
import { Home } from '../Components/Home'
import { Navbar } from '../Components/Navbar'
export const AllRoutes = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
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
