import React from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import ProductDetails from '../ProductDetails';
import "./index.css"

const NavbarPage = () => {
  return (
    <div className='navbar-Container'>
        <nav className='nav-container'>
            <button type='button' className='menu-btn'><HiMenuAlt2 /></button>
            <div className='lg-icon-container'>
                <button type='button' className='menu-bar-btn'>WHICH MANUKA IS FOR ME?</button>
                <button type='button' className='shop'>Shop</button>
                <button type='button' className='shop'>Explore</button>
            </div>
            <img src="https://res.cloudinary.com/dlaypemls/image/upload/v1756545291/Link_SVG_o7zypf.png" alt="logo" className='logoImg' />
            <div className='award-container'>
                <button type='button' className='award-btn'>About</button>
                <button type='button' className='award-btn'>Rewards</button>
                <button type='button' className='award-btn'>Contact</button>
            </div>
            <div className='icons-container'>
                <button type='button' className='icons'><GoPerson /></button>
                <button type='button'  className='icons'><IoSearchOutline /></button>
                <div className='cart-icon-container'>
                    <button type='button'  className='icons'><BiShoppingBag /></button>
                    <span>0</span>
                </div>
            </div>
        </nav>
        <ProductDetails />
    </div>
  )
}

export default NavbarPage