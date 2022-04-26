import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
    <div></div> <Link to="/">Home</Link>
      <Link to="/adduser">Add User</Link>
      <Link to="/userlist">UserList</Link>
    </div>
  )
}

export default Navbar
