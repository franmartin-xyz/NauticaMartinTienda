import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import {CartWidget} from "../index"
import logo from "../../assets/logo.svg"
import "./navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='nm__navbar'>
      <div className='nm__navbar-links'>
        <div className='nm__navbar-links-logo'>
        <Link to="NauticaMartinTienda/"><img className='nm__img-logo' src={logo} alt="logo" /></Link>
        </div>
        <div className='nm__navbar-links_container'>
          <p><Link to="NauticaMartinTienda/">Home</Link></p>
          <p><Link to="NauticaMartinTienda/about">About</Link></p>
          <p><Link to="NauticaMartinTienda/testimonials">Testimonials</Link></p>
          <p><Link to="NauticaMartinTienda/contact">Contact</Link></p>
          <p><Link to="NauticaMartinTienda/products">Productos</Link></p>
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
          <p><Link to="NauticaMartinTienda/">Home</Link></p>
          <p><Link to="NauticaMartinTienda/about">About</Link></p>
          <p><Link to="NauticaMartinTienda/testimonials">Testimonials</Link></p>
          <p><Link to="NauticaMartinTienda/contact">Contact</Link></p>
          <p><Link to="NauticaMartinTienda/products">Productos</Link></p>
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
    </nav>
  )
}

export default Navbar