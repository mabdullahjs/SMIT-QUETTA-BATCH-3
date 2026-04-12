import React from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../../users';
import Navbar from '../components/Navbar';

const UserDetail = () => {

  const {id} = useParams();

  const user = users.find((item) => item.id == +id)

  console.log(user)
  return (
    <div>
      <Navbar />
 <div class="name">{user.name}</div>
    <div class="role">{user.role}</div>
    <div class="info">📧 {user.email}</div>
    <div class="info">🎂 Age: {user.age}</div>
    <div class="info">📍 {user.address.city}</div>
    <span class="status active">{user.isActive}</span>

    </div>
  )
}

export default UserDetail