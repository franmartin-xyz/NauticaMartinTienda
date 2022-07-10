import React from "react";
import {RiShoppingCart2Fill} from "react-icons/ri"

const CartWidget = () => {
    const cartStyle = { fill:"white", width:"50px", height:"30px"}
    return (
        <>
        <RiShoppingCart2Fill style={cartStyle} /> 
        <span className='nm__navbar-items'></span>
        </>
    )
}

export default CartWidget