import React from 'react'
import {useParams} from "react-router-dom"
import { getFirestore,getDocs,collection, query, where } from "firebase/firestore";
import {default as ItemDetail} from "./ItemDetail"
import { useState, useEffect } from 'react'
import {default as Spinner} from "../../components/LoadingSpinner/LoadingSpinner"
import "./ItemDetailContainer.css"
const ItemDetailContainer = () => {
  const [Loading, setLoading]= useState(true);
  const param = useParams();
  const [item, setItems]=useState("")
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemId = collection(db,"products");
    const q = query(itemId,where("id","==",Number(param.id)));
    getDocs(q).then((snapshot) => {
      const data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
      setItems(data[0]);})
      setLoading(false);
  }, [param]);

  return (
    <div className='ItemDetailContainer__container gradient__bg'>
    {
      Loading && <Spinner/>
    }
    <ItemDetail item={item} />
    </div>
  )
}

export default ItemDetailContainer