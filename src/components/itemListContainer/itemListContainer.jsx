import React from 'react'
import {default as database} from "./dummyDataBase"
import { useState } from 'react';
import { useEffect } from 'react';
import {ItemSearch, Loading as Spinner} from "../index"
import { useParams } from "react-router-dom"
import ItemList from './itemList/itemList';
import {Link} from "react-router-dom"
import "./main.css"
const ItemListContainer = () => {
  const [Loading, setLoading] = useState(true);
  let param = useParams();
  const [items, setItems] = useState([]);
  useEffect(()=>{
    let promiseItems = new Promise ( (resolve, reject) => {
      setTimeout(() => {
       if(param.name === undefined) {resolve(database);}
       else{
        const itemsFiltered = database.filter((product)=>{return product.category === param.name})
        resolve(itemsFiltered);
       }
      }, 2000);
    });
    promiseItems.then((response)=>{
      setLoading(false);
      setItems(response);
    })
  },[param.name]);

  return (
    <div className='ItemListContainer__container gradient__bg'>
    <div className='mainTitle__container'>
      <Link to={"/NauticaMartinTienda/products"}><title className='main__title'>PRODUCTOS</title></Link>
    </div >
    <div>
    <title id='ItemFiler__title'>Categoria: {param.name}</title>
    <ItemSearch/>
    {
      Loading && <Spinner/>
    }
    <ItemList items={items}/>
    </div>
    </div>
  )
}

export default ItemListContainer