import React from 'react'
import { useState } from 'react';
import "./itemDescription.css"
const ItemDescription = (props) => {
  let description = props.description;
  const [showMore, setShowMore] = useState(false);
  let btn;
  showMore ? btn = "mostrar menos" : btn = "mostrar más";
  return (
    <>
        <p className='item__descriptionP'>
          {showMore ? description : `${description.substring(0,40)}`}
          <button className='item__descriptionBtn' onClick={()=> setShowMore(!showMore)}>{btn}</button>
        </p>
    </>
  )
}

export default ItemDescription