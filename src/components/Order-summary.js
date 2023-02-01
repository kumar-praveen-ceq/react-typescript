import React from 'react'
import { useNavigate } from 'react-router-dom'

function Order() {
    const navigate=useNavigate()
  return (
    <>
    <div>Order-confirmed</div>
    <button onClick={()=>navigate(-1)}>Go back</button>
    </>
  )
}

export default Order