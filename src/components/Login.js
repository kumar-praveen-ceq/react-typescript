import {useState,React} from 'react'
import { useAuth } from './auth'
import { useNavigate,useLocation } from 'react-router-dom'


const Login = () => {
    const [loginUser,setLoginUser]=useState("")
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    // console.log(location);

    const redirectPath=location.state?.path || '/'

    const handleLogin=()=>{
       auth.logIn(loginUser)
       navigate(redirectPath,{replace:true})
    }

  return (
    <>
    <label>
      UserName: <input type='text' onChange={e=>setLoginUser(e.target.value)}/>
    </label>
    <button onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login