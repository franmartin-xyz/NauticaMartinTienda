import React from 'react'
import "./itemListContainer.css"
import {default as database} from "./dummyDataBase"
import { useState } from 'react';
import { useEffect } from 'react';
import ItemList from './itemList/itemList';
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    let promiseItems = new Promise ( (resolve, reject) => {
      setTimeout(() => {
        resolve(database);
      }, 2000);
    });
    promiseItems.then((response)=>{
      setItems(database);
    })
  },[]);

  return (
    <>
    <ItemList items={items}/>
    </>
  )
}

export default ItemListContainer