import React, { useContext } from "react";
import {RiShoppingCart2Fill} from "react-icons/ri"
import { cartContext } from "../../context/CartContext";
import "./cartWidget.css"
const CartWidget = () => {
    const cartStyle = { fill:"white", width:"50px", height:"30px"}
    const CartItems = useContext(cartContext);
    return (
        <>
        <RiShoppingCart2Fill style={cartStyle} /> 
        <span className='nm__navbar-items'>{
CartItems.howManyItems()>0 && CartItems.howManyItems()
        }</span>
        </>
    )
}

export default CartWidget