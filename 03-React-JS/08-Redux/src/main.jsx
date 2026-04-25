import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './config/redux-toolkit/store/store.js'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Checkout from './pages/Checkout'
import About from './pages/About'
import ResponsiveAppBar from './'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ResponsiveAppBar/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)
