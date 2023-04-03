import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './assets/Components/Navbar/Navbar'
import './App.css'
import Home from './assets/pages/Home/Home'
import AboutPage from "./assets/pages/About/About"
import Contactpage from './assets/pages/Contact/Contact'
import Servicespage from './assets/pages/Services/Services'
import Newspage from './assets/pages/News/News'

function App() {
  return (
    <div className='overall-container'>
      <BrowserRouter>
        <div className="overall-main-container">
         <Navbar/>
          <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/services' element={<Servicespage/>}/>
                <Route path='/news' element={<Newspage/>}/>
                <Route path='/contact' element={<Contactpage/>}/>

            </Routes>
        </div>
          
       
    </BrowserRouter>
    </div>
  )
}

export default App
