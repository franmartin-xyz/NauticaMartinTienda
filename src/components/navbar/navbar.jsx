import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import {CartWidget} from "../index"
import logo from "../../assets/logo.svg"
import "./navbar.css"
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='nm__navbar'>
      <div className='nm__navbar-links'>
        <div className='nm__navbar-links-logo'>
          <img className='nm__img-logo' src={logo} alt="logo" />
        </div>
        <div className='nm__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#about">About</a></p>
          <p><a href="#testimonials">Testimonials</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>
      </div>
      <div className="nm__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="nm__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="nm__navbar-menu_container scale-up-center">
          <div className="nm__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#possibility">About</a></p>
            <p><a href="#features">Testimonials</a></p>
            <p><a href="#blog">Contact</a></p>
          </div>
          <div className="nm__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
      <div className='nm__navbar-cart'>
        <CartWidget />
      </div>
    </div>
  )
}

export default Navbar