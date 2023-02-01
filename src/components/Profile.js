import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate=useNavigate()
    const auth=useAuth()
    const handleLogout=()=>{
        auth.logOut()
        navigate("/")
    }
  return (
    <>
    <div>Welcome {auth.user}</div>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile