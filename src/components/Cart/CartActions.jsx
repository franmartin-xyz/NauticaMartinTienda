import React,{useContext} from 'react'
import {cartContext} from '../../context/CartContext'
import "./CartActions.css"
const CartActions = (props) => {
    const {clear, totalPrice} = useContext(cartContext);
  const handleClickClearUp = ()=>{
    clear();
  }
  return (
    <div className='CartCartContainer__Actions'>
    <button className='CartContainer__btnClearUp' onClick={()=>handleClickClearUp()}>Limpiar Carrito</button>
    <div className='CartCartContainer__buy'>
      <span className='CartContainer__span'>Precio Total: ${totalPrice()}</span>
      <button className='CartContainer__btnBuy'>Comprar</button>
    </div>
    </div>
  )
}

export default CartActions