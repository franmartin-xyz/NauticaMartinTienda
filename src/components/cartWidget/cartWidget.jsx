import React, { useContext, useEffect, useState } from "react";
import {RiShoppingCart2Fill} from "react-icons/ri"
import { cartContext } from "../../context/CartContext";
import "./cartWidget.css"
import {Link} from "react-router-dom"
const CartWidget = () => {
    const cartStyle = { fill:"white", width:"50px", height:"30px"}
    const {cartItems} = useContext(cartContext);    
    return (
        <>
        {cartItems.length>0 &&<Link to="/NauticaMartinTienda/cart"><RiShoppingCart2Fill style={cartStyle} /></Link> }
        <span className='nm__navbar-items'>{
        cartItems.length>0 && cartItems.length
        }</span>
        </>
    )
}

export default CartWidget