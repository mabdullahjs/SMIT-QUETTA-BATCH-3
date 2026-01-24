// import { useState } from "react"
// import Btn from "./components/Btn"

// function App(){
//   const [mount , setMount] = useState(true)
//   return (
//     <>
//     <h1>Hello world</h1>
//     <button onClick={()=>setMount(!mount)}>Button component {mount ? 'unmount' : 'mount'}</button>
//     {/* {mount ? <Btn/> : null} */}
//     {mount && <Btn/>}
//     </>
//   )
// }

// export default App


// // use effect



import React, { useEffect, useState } from 'react'

const App = () => {
  const [users , setUsers] = useState(null);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setUsers(res)
      })
      .catch((err) => {
        console.log(err);
        setError(true)

      }).finally(()=>{
        setLoading(false)
      })
  }, [])
  return (
    <>
      <h1>Hello world</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured.</h1>}
      {users && users.map(item => {
        return <h3 key={item.id}>{item.name}</h3>
      })}
{/* 
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Error occured.</h1> : null}
      {users ? users.map(item => {
        return <h3 key={item.id}>{item.name}</h3>
      }) : null} */}

    </>
  )
}

export default App


// falsy values in js

// '' , 0 , null , undefined , false
