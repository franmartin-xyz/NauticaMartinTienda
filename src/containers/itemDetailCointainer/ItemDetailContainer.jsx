import React from 'react'
import {useParams} from "react-router-dom"
import {default as database} from "../../components/itemListContainer/dummyDataBase"
import {default as ItemDetail} from "./ItemDetail"
import { useState, useEffect } from 'react'
const ItemDetailContainer = () => {
  const param = useParams();
  const [item, setItem]=useState("")
    useEffect(()=>{
        let promiseDescription = new Promise((res, rej)=>{
           setTimeout(() => {
              res(database[param.id - 1])
           }, 2000);
        });
        promiseDescription.then((response)=>{
            setItem(response);
        })
    });

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer