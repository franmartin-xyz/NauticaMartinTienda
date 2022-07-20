import React, { useState } from 'react'
import Item from '../item/item'
import "./itemList.css"
const ItemList = (props) => {
    return (
      <div className='itemsContainer'>
      {
        props.items.map(item => { return( <Item key={item.id} data={item}/>)})
      }
      </div>
  )
}

export default ItemList