import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <>
    <div>Dashboard</div>
     <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        margin: '5px 0px'
    }}>
        <Link to={'/dashboard'}>Admin</Link>
        <Link to={'/dashboard/teacher'}>teacher</Link>
        <Link to={'/dashboard/student'}>student</Link>
    </div>
    <Outlet/>
    </>
  )
}

export default Dashboard