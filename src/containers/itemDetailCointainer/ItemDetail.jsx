import React from 'react'
import { default as ItemCount } from "../../components/itemListContainer/itemcount/itemcount"
import "./ItemDetail.css"
const ItemDetail = (props) => {
    return (
        <div className='ItemDetail__container'>
            <title>{props.item.title}</title>
            {
                props.item !== "" && <img src={props.item.pictureUrl} alt="item image" />
            }
            <p>{props.item.description}</p>
            {
                props.item !== "" && <span>Price:${props.item.price} | in stock: {props.item.stock}</span>
            }
           {
                props.item !== "" && <ItemCount stock={props.item.stock} />
           } 
        </div>
  )
}

export default ItemDetail