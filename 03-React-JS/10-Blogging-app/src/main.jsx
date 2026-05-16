import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

/* Redux */
import { Provider } from 'react-redux'
import { store } from './redux/store'

/* Supabase */
import { supabase } from './config/supabase/supabase'
import { loginUser, logoutUser } from './redux/userSlice'

/* Pages */
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Profile from './pages/Profile.jsx'

/* Components */
import Navbar from './components/Navbar.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'

// Restore session before render
const restoreSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()

  if (session) {
    const { data: userData } = await supabase
      .from('users')
      .select('*')
      .eq('id', session.user.id)
      .single()

    if (userData) {
      store.dispatch(loginUser(userData))
    }
  }

  // Listen for auth state changes
  supabase.auth.onAuthStateChange(async (event, session) => {

    if (event === 'SIGNED_IN' && session) {
      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id)
        .single()

      if (userData) {
        store.dispatch(loginUser(userData))
      }
    }

    if (event === 'SIGNED_OUT') {
      store.dispatch(logoutUser())
    }

  })
}

// Restore session then render app
restoreSession().then(() => {

  createRoot(document.getElementById('root')).render(

    <Provider store={store}>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path='/'
            element={<Home />}
          />

          <Route
            path='login'
            element={<Login />}
          />

          <Route
            path='register'
            element={<Register />}
          />

          <Route
            path='profile'
            element={<Profile />}
          />

          <Route
            path='dashboard'
            element={<ProtectedRoute children={<Dashboard />}/>}
          />

        </Routes>

      </BrowserRouter>

    </Provider>

  )

})