import React from 'react'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
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
  const handlesearch = (e)=>{
    e.preventDefault();
    let string = document.getElementById("search").value;
    const itemsFiltred = items.filter((item)=>{let t = item.title.toLowerCase(); return t.includes(string) })
    console.log(string === "" || itemsFiltred.length === 0 )
    if ( string === "" || itemsFiltred.length === 0 ){
      setLoading(true);
      const db = getFirestore();
      const itemsCollection = collection(db, "products");
      getDocs(itemsCollection).then((snapshot) => {const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));setItems(data);console.log(data)});
      setLoading(false);}
    else { setItems(itemsFiltred);}
  }
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
      if(param.name === undefined) { 
        getDocs(itemsCollection).then((snapshot) => {const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));setItems(data)})
      }
       else{
        const q = query(itemsCollection,where("category","==",param.name));
        getDocs(q).then((snapshot)=>{
          const data = snapshot.docs.map((doc)=>({id:doc.id,...doc.data()}));
          setItems(data);}) 
       }
      setLoading(false);
  }, [param]);
  return (
    <div className='ItemListContainer__container gradient__bg'>
    <div className='mainTitle__container'>
      <Link to={"/NauticaMartinTienda/products"}><title className='main__title'>PRODUCTOS</title></Link>
    </div >
    <div>
    <title id='ItemFiler__title'>Categoria: {param.name}</title>
    <ItemSearch handlesearch={handlesearch} />
    {
      Loading && <Spinner/>
    }
    <ItemList items={items}/>
    </div>
    </div>
  )
}

export default ItemListContainer