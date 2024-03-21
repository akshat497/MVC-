import React from 'react'
import adminStyle from "../style/adminStyle.css"
import { Link, useLocation } from 'react-router-dom'
export const AdminHeader = () => {
    const location=useLocation()
    console.log("location",location)
  return (
   <>
 <div className="app">
    <header className="header">
        <h1>Panel</h1>
    </header>

    <div className="sidebar open">
        <a href="#">Dashboard</a>
        <Link to="/homepage">Users</Link>
        <Link to="/homepage/departments">Departments</Link>
        <Link to="/homepage/profile">Profile</Link>
        <a href="#">Settings</a>
        {/* Add more links based on your requirements */}
    </div>

    <div className="menu-btn" >
        ☰
    </div>
</div>




   </>
  )
}
