import React from 'react'
import { getFirestore, collection, getDocs } from "firebase/firestore";
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
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      if(param.name === undefined) { setItems(data[0].items);}
       else{
        const itemsFiltered = data[0].items.filter((product)=>{return product.category === param.name});
        setItems(itemsFiltered);
       }
      setLoading(false);
    });
  }, [param]);
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