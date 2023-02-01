import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate()
    // console.log(navigate);
  return (
    <>
    <div>Home Page</div>
    <button onClick={()=>{
        
   navigate('order',{replace:true})     

    }}>Place Order</button>
    </>
  )
}

export default Home