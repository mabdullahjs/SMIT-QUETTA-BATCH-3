import React from 'react'
import { Route, Routes } from 'react-router'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import NotFound from '../Pages/NotFound'
import Dashboard from '../Pages/Dashboard'
import Profile from '../Pages/Profile'
import Setting from '../Pages/Setting'

function ReactRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/service' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />

                {/* Parent Route */}
                <Route path='/dashboard' element={<Dashboard/>} >
                <Route path='profile' element={<Profile/>} />
                <Route path='setting' element={<Setting/>} />

                </Route>
                     


            </Routes>

        </>
    )
}

export default ReactRoutes