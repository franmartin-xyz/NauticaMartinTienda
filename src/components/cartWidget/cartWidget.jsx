import React from "react";
import {RiShoppingCart2Fill} from "react-icons/ri"

const CartWidget = () => {
    const cartStyle = { fill:"white", width:"50px", height:"30px"}
    return (
    <div>
        <RiShoppingCart2Fill style={cartStyle} />
    </div>
    )
}

export default CartWidget