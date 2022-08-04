import React,{useContext} from 'react'
import {cartContext} from '../../context/CartContext'
import "./CartActions.css"
const CartActions = (props) => {
    const {clear, totalPrice,sendDoc} = useContext(cartContext);
  const handleClickClearUp = ()=>{
    clear();
  }
  const handlePurchase = (e)=>{ 
    e.preventDefault();
  }
  return (
    <div className='CartCartContainer__Actions'>
    <button className='CartContainer__btnClearUp' onClick={()=>handleClickClearUp()}>Limpiar Carrito</button>
    <div className='CartCartContainer__buy'>
      <span className='CartContainer__span'>Precio Total: ${totalPrice()}</span>
      <button className='CartContainer__btnBuy' onClick={(e)=>handlePurchase(e)}>Comprar</button>
    </div>
    </div>
  )
}

export default CartActions