import React from 'react'
import "./itemListContainer.css"
const ItemListContainer = () => {
    function cartItems(){
        const itemsArr = []
       if(itemsArr.length>0) return itemsArr.length; else return ""
    }
    let items = cartItems();
  return (
  
        <span className='nm__navbar-items'>{items}</span>
    
  )
}

export default ItemListContainer