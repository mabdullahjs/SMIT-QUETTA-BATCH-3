import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import UserDetail from './pages/UserDetail.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Todo from './pages/Todo.jsx'
import Cart from './pages/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserDetail />} />
      <Route path='/product' element={<Product />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/product/:id' element={<SingleProduct />} />
      <Route path='/todo' element={<Todo />} />
    </Routes>
  </BrowserRouter>

)


// Dynamic route
// Custom hook