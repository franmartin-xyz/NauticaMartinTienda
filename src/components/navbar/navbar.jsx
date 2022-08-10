import React, { useContext, useEffect, useState } from 'react'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri"
import {CartWidget} from "../index"
import logo from "../../assets/logo.svg"
import "./navbar.css"
import {Link} from "react-router-dom";
import {signInWithPopup} from "firebase/auth"
import {RiGoogleFill} from "react-icons/ri"
import { userLoginContext } from '../../context/LoginContext'
import { provider,auth} from "../../index"
import jwt_decode from "jwt-decode"
const Navbar = () => {
  const {user, setUser} = useContext(userLoginContext);
  // const [user,setUser] = useState({});
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const handleLogin = ()=>{
    function singInWithGoogle (){
      signInWithPopup(auth,provider)
      .then((res)=> {
        console.log (jwt_decode(res.user.accessToken));
        const userMail = jwt_decode(res.user.accessToken).email;
        let userName = jwt_decode(res.user.accessToken).name;
        userName = userName.split(" ");
        console.log(userMail);
        setUser({email:userMail,given_name:userName[0],surname:userName[1]});
      })
      .catch(err => {console.log (err)})
      }
    singInWithGoogle();
  }; 

  function handleSingOut(e){
    setUser({});
  }
  const googleWidget = {fill:"black",width:"30px", height:"30px"}
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
      {Object.keys(user).length == 0 &&
        <div id='singInDiv' onClick={()=>{handleLogin()}}><RiGoogleFill style={googleWidget}/></div>
      }
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