import React,{useContext, useState} from 'react'
import {cartContext} from '../../context/CartContext'
import Cart from "./Cart"
import {Link} from "react-router-dom"
import "./CartContainer.css"
import CartActions from './CartActions'
const CartContainer = () => {
  const CartItems = useContext(cartContext);
  const [list,setList] = useState(CartItems.CartItems);
  return (
    <div className='CartContainer__container'>
    {
      list.length > 0 ?
      list.map(item => {return(<Cart key={item.id} data={item} setstate={setList} state={list} />)}):
      <Link to="/NauticaMartinTienda/products"><div className='CartContainer__title-cont'><title className='CartContainer__title'>No Hay Productos</title></div></Link>
    }
    {
     list.length > 0 && <CartActions setstate={setList}/>
    }
    </div>
  )
}

export default CartContainer