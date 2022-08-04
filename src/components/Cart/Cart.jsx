import React, { useContext } from 'react'
import {cartContext} from '../../context/CartContext'
import "./Cart.css"
const Cart = (props) => {
  const { removeItem} = useContext(cartContext);
  const handleBtnClick = (id)=>{
    removeItem(id);
  }
  return (
    <div className='Cart__container'>
      <img className='Cart__img' src={props.data.pictureUrl} alt="" />
      <title className='Cart__title'>{props.data.title}</title>
      <div className='Cart__container-title'>
      <div className='Cart__btnContainer'><button className='Cart__btn' onClick={()=>handleBtnClick(props.data.id)}>Eliminar</button></div>
      <span className='Cart__price'>Precio:${props.data.price} | Cantidad: {props.data.quantity}</span>
      </div>
    </div>
  )
}

export default Cart