import React from 'react'
import {useParams} from "react-router-dom"
import {default as database} from "../../components/itemListContainer/dummyDataBase"
import {default as ItemDetail} from "./ItemDetail"
import { useState, useEffect } from 'react'
import {default as Spinner} from "../../components/LoadingSpinner/LoadingSpinner"
const ItemDetailContainer = () => {
  const [Loading, setLoading]= useState(true);
  const param = useParams();
  const [item, setItem]=useState("")
    useEffect(()=>{
        let promiseDescription = new Promise((res, rej)=>{
           setTimeout(() => {
              res(database[param.id - 1])
           }, 2000);
        });
        promiseDescription.then((response)=>{
          setLoading(false);  
          setItem(response);
        })
    });

  return (
    <>
    {
      Loading && <Spinner/>
    }
    <ItemDetail item={item} />
    </>
  )
}

export default ItemDetailContainer