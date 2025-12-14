import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'


export default function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
