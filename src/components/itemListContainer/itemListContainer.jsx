import React from 'react'
import "./itemListContainer.css"
const CartItems = (props) => {
  const arr = props.arr;
  /* arr de items = {id="item1",prop2:"something",prop3:"something",amount:given by counter}*/ 
    // function itemsCounter(items){
    //    if(items.amount>0) return items.amount; else return ""
    // }
  return (
    <span className='nm__navbar-items'>{arr}</span>  
  )
}

export default CartItems