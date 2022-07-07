import React from "react";
import {RiShoppingCart2Fill} from "react-icons/ri"

const CartWidget = () => {
    const cartStyle = { fill:"white", width:"50px", height:"30px"}
    return (
    
        <RiShoppingCart2Fill style={cartStyle} />
    
    )
}

export default CartWidget