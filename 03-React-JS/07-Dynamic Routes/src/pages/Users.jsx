import React from 'react'
import Navbar from '../components/Navbar'
import { users } from '../../users'
import { useNavigate } from 'react-router-dom'

const Users = () => {

  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      {
        users.map((item, index) => {
          return <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>

            <button onClick={() => navigate(`/users/${item.id}`)} >Details</button>
          </div>
        })
      }

    </div>
  )
}

export default Users