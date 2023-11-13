import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/cutmlogo.png'

function Navbar() {
  return (
    <div>
    <div >
    <nav className='bg-slate-100' >
    <ul className='flex text-[20px]  items-center mx-11 py-2 justify-end space-x-16'>
    <li className='w-20 mr-[930px]'><img src={logo} alt="cutm" /></li>
    <li className='cursor-pointer active:text-green-900 hover:text-green-500'><Link to="/">Home</Link></li>
    <li className='cursor-pointer active:text-green-900 hover:text-green-500'><Link to="/store">Store</Link></li>
    <li className='cursor-pointer active:text-green-900 hover:text-green-500'><Link to="/cart">Cart</Link></li>
    <li className='cursor-pointer active:text-green-900 hover:text-green-500'><Link to="login--user">Login</Link></li>
    </ul>
    
    </nav>
    
  </div>
    </div>
  )
}

export default Navbar
