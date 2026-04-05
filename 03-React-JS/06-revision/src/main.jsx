import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes } from 'react-router'
import { Route } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Admin from './pages/Dashboard/Admin.jsx'
import Teacher from './pages/Dashboard/Teacher.jsx'
import Student from './pages/Dashboard/Student.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Admin />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="student" element={<Student />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)



// nested route (daraz.pk/electronics/iphone15)
// dynamic route
// protected route