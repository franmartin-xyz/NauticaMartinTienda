import React from 'react'
import { useState } from 'react';
import "./itemDescription.css"
const ItemDescription = (props) => {
  let description = props.description;
  const [showMore, setShowMore] = useState(false);

  return (
    <>
        <p>
          {showMore ? description : `${description.substring(0,40)}`}
          <button className='item__descriptionBtn' onClick={()=> setShowMore(!showMore)}>leer más</button>
        </p>
        <button className='item__descriptionBtn'>ver producto</button>
    </>
  )
}

export default ItemDescription