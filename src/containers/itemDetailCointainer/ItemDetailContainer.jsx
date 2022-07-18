import React from 'react'
import "./ItemDetailContainer.css"
import {useParams} from "react-router-dom"
import {default as database} from "../../components/itemListContainer/dummyDataBase"
import { default as ItemCount } from "../../components/itemListContainer/itemcount/itemcount"
const ItemDetailContainer = () => {
  const param = useParams();
  const item = database[param.id - 1];
  return (
    <div className='ItemDetail__container'>
        <title>{item.title}</title>
        <img src={item.pictureUrl} alt="item image" />
        <p>{item.description}</p>
        <span>Price:${item.price} | in stock: {item.stock}</span>
        <ItemCount stock={item.stock} />
    </div>
  )
}

export default ItemDetailContainer