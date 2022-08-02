import React,{useContext, useState} from 'react'
import {cartContext} from '../../context/CartContext'
import Cart from "./Cart"
import {Link} from "react-router-dom"
import "./CartContainer.css"
import CartActions from './CartActions'
const CartContainer = () => {
  const {cartItems} = useContext(cartContext);
  const [list,setList] = useState(cartItems);
  return (
    <div className='CartContainer__container'>
    {
      cartItems.length > 0 ?
      cartItems.map(item => {return(<Cart key={item.id} data={item} />)}):
      <Link to="/NauticaMartinTienda/products"><div className='CartContainer__title-cont'><title className='CartContainer__title'>No Hay Productos</title></div></Link>
    }
    {
     cartItems.length > 0 && <CartActions/>
    }
    </div>
  )
}

export default CartContainer