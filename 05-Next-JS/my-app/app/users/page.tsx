import React from 'react'

const Users = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json()
    console.log(users);
    
  return (
    <>
    <div>Users</div>
     <div>User {new Date().toLocaleTimeString()}</div>
    {users.map((item: {name: string; id: number}) => {
        return <p key={item.id}>{item.name}</p>
    })}
    </>
  )
}

export default Users