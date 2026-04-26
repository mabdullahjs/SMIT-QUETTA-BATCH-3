import React, { useState } from 'react'
import { supabase } from '../config/supabase/supabase'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const registerUser = async (event) => {
    event.preventDefault();
    console.log(email, password);



    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      alert('Check your email for confirmation!')
      console.log(data)
    }


  }
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input type="email" placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>register</button>
      </form>
    </>
  )
}

export default Register