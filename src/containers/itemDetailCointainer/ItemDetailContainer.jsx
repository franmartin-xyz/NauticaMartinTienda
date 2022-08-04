import React from 'react'
import {useParams} from "react-router-dom"
import { getFirestore, collection, getDocs } from "firebase/firestore";
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
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if(param.name === undefined) { setItems(data[0].items[(param.id)-1]); console.log(param.name);}
       else{
        const itemsFiltered = data[0].items.filter((product)=>{return product.category === param.name});
        setItems(itemsFiltered);
       }
      setLoading(false);
    });
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