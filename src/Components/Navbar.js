import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <div className='navbar_container'>
            <div className='navbar_head'><img src='https://user-images.githubusercontent.com/4060187/61057426-4e5a4600-a3c3-11e9-9114-630743e05814.png' alt='formik_logo' width='50px' /></div>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to="/errormessageexample">ErrorMessage</Link></li>
                    <li><Link to="/fieldarraycomp">Field Array Component</Link></li>
                    <li><Link to="/withMUI">Form with Material UI</Link></li>
                    <li><Link to="/withbootstrap">Form with React Bootstrap</Link></li>
                    <li><Link to="/twostepverificationform">2 factor Auth</Link></li>
                    <li><Link to="/Createpackage">Create Package</Link></li>
                    <li><Link to="/createform">Create form</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
