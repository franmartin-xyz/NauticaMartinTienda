import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {default as ItemDescription} from "./itemDescription"

const ItemDescriptionContainer = (props) => {
    const id = props.key;
    const item = props.item;
    const [itemDescription, setItemDescription]=useState("")
    useEffect(()=>{
        let promiseDescription = new Promise((res, rej)=>{
            res(item.description);
        });
        promiseDescription.then((response)=>{
            setItemDescription(response);
        })
    });

  return (
    <div>
        <ItemDescription description={itemDescription} key={id}/>
    </div>
  )
}

export default ItemDescriptionContainer