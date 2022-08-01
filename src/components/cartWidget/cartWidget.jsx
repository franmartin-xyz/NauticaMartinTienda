import React, { useContext } from "react";
import {RiShoppingCart2Fill} from "react-icons/ri"
import { cartContext } from "../../context/CartContext";
import "./cartWidget.css"
import {Link} from "react-router-dom"
const CartWidget = () => {
    const cartStyle = { fill:"white", width:"50px", height:"30px"}
    const CartItems = useContext(cartContext);
    const Items = CartItems.howManyItems();
    return (
        <>
        {Items>0 &&<Link to="/NauticaMartinTienda/cart"><RiShoppingCart2Fill style={cartStyle} /></Link> }
        <span className='nm__navbar-items'>{
        Items>0 && Items
        }</span>
        </>
    )
}

export default CartWidget