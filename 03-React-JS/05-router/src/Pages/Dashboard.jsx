import React from 'react'
import { Link, Outlet } from 'react-router'

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <nav>
        <Link to={"profile"}>Profile</Link>
        <Link to={"setting"}>Setting</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default Dashboard