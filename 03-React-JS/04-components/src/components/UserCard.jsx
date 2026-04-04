import React from 'react'

const UserCard = ({name , email}) => {
  return (
    <div className='my-5 border-2 border-black'>
    <h3>Name: {name}</h3>
    <p>Email: {email}</p>
    </div>
  )
}

export default UserCard