import React from 'react'

import { TiShoppingCart } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux' ;
import logo from '../assets/logo.png'
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  return (
    <div>
      <div className='flex  justify-between items-center h-20 max-w-6xl '>
        <NavLink to="/">
          <div className='ml-5'>
            <img src={logo} alt="" className='h-20 w-20' />
          </div>
        </NavLink>

        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
          <NavLink to="/">
            <p>
            Home
            </p>
          </NavLink>
          <NavLink to="/cart">
          <div className='relative '>
            <TiShoppingCart className='text-2xl'/>
            {
              cart.length > 0 && 
              <span className='absolute -top-1 -right-2  bg-green-600 text-x5 w-5 h-5 flex justify-center items-center animate-bouncer rounded-full text-white '>{cart.length}</span>
            }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
