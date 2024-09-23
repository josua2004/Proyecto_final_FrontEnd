import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'

function Navbar() {
  return (

  <div className='control8'>
          <nav>
            <ul>
                <li><Link to="/Home" >Home </Link></li>
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>

        
  </div>
  )
}

export default Navbar