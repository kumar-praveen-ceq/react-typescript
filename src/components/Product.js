import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

function Product() {
  return (
    <>
    <div>Product Page</div>
    <input placeholder='Search'></input>
    <nav>
    <Link to='featured'>Featured</Link>
    <Link to='new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Product