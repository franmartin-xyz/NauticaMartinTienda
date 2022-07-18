import React from 'react'
import { useParams } from "react-router-dom"
import { default as database} from "../itemListContainer/dummyDataBase"
import {default as ItemList} from "../itemListContainer/itemList/itemList"
import {ItemSearch} from "../index"
import "./ItemFilter.css"
const ItemFilter = () => {
    const param = useParams();
    const items = database.filter((product)=>{return product.category === param.name})
    console.log(items)
    return (
    <div className='ItemFiler__container'>
        <title id='ItemFiler__title'>Categoria: {param.name}</title>
        <ItemSearch />
        <ItemList items={items}/>
    </div >
  )
}

export default ItemFilter