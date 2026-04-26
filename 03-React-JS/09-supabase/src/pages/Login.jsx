import React, { useState } from 'react'
import { supabase } from '../config/supabase/supabase'
import { useNavigate } from 'react-router'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const loginUser = async (event) => {
    event.preventDefault();
    console.log(email, password);


    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      console.log(data.user)
      navigate('/')
    }

  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>login</button>
      </form>
    </>
  )
}

export default Login


// iS91m4r6raNA4gGh
// Authentication
// Database
// Storage