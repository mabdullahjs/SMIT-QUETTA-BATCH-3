import { useEffect } from 'react'
import { supabase } from '../config/supabase/supabase'
import { useNavigate } from 'react-router'

const Home = () => {

    const navigate = useNavigate()

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (error) {
        console.log(error.message)
        navigate('/login')
        return
      }

      console.log('User:', data.user)
    }

    getCurrentUser()
  }, [])


  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }
  return (
    <>
      <button onClick={handleLogout}>logout</button>
      <div>Home</div>
    </>
  )
}

export default Home