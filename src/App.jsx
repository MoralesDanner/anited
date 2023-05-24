import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Contactos from './components/Contactos'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
// import Spline from '@splinetool/react-spline'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    })
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/contactos' element={<Contactos/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='*' element={<Home/>}/>
        </Route>
      </Routes>

      {/* <div className='flex'>
        <div className='w-1/3'></div>
        <div className='w-1/3'>
          <div className='w-96 h-96 '>
            <Spline className='drop-shadow-xl' scene="https://prod.spline.design/OGlSLKUdAFvJIlKb/scene.splinecode" />
        </div>
        </div>
        <div className='w-1/3'></div>
      </div> */}
      <Footer/>
    </div>
  )
}
export default App
