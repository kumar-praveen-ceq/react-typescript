import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth'


function Nav() {
  const auth=useAuth()
  return (
   <nav className='primary'>
   <NavLink to='/'>Home</NavLink>
   <NavLink to='/about'>About</NavLink>
   <NavLink to='/product'>Product</NavLink>
   <NavLink to='/profile'>Profile</NavLink>
   
   {
    !auth.user && <NavLink to='/login'>Login</NavLink>
   }
   <NavLink to='/user'>User</NavLink>
   </nav>
  )
}

export default Nav