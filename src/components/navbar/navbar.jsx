import React, { useContext, useEffect, useState } from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import {CartWidget} from "../index"
import logo from "../../assets/logo.svg"
import "./navbar.css"
import {Link} from "react-router-dom";
import jwt_decode from "jwt-decode"
import { userLoginContext } from '../../context/LoginContext'
const Navbar = () => {
  const {user, setUser} = useContext(userLoginContext);
  // const [user,setUser] = useState({});
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleLogin = (res)=>{
    let userLoginJwt = jwt_decode(res.credential);
    console.log(userLoginJwt);
    setUser(userLoginJwt);
    document.getElementById("singInDiv").hidden = true;
  };
  useEffect(()=>{
/* global google*/
window.google.accounts.id.initialize({
  client_id:"322253423612-n7fm6e1667nkp6pfkj41caotj0qk6254.apps.googleusercontent.com",
  callback: handleLogin,
});
window.google.accounts.id.renderButton(
  document.getElementById("singInDiv"),
  {theme:"outline",size:"medium"}
)
  },[])
  function handleSingOut(e){
    setUser({});
    document.getElementById("singInDiv").hidden = false;
  }
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
      <div id='singInDiv'></div>
      {Object.keys(user).length != 0 &&  <div className="nm__navbar-sign">
        <span className='nm__navbar-sign-welcome'>Hola! {user.given_name}</span>
        <button type="button" onClick={(e)=>handleSingOut(e)}>Sign Out</button>
      </div>}
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