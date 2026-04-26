import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route index element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
  </Routes>
  </BrowserRouter>
)
