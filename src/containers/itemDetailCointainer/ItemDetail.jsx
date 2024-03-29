import React, { useState, useContext } from 'react'
import { default as ItemCount } from "../../components/itemListContainer/itemcount/itemcount"
import "./ItemDetail.css"
import {Link} from "react-router-dom"
import  { cartContext } from '../../context/CartContext'
const ItemDetail = (props) => {
    const {addItem} = useContext(cartContext);
    const[amount,setAmount] = useState(0);
    function onAdd(amount){
        setAmount(amount);
        addItem(props.item,amount);
    }
    return (
        <>
        { props.item !== "" &&(
            <div className='ItemDetail__container'>
                <title>{props.item.title}</title>
                <img src={props.item.pictureUrl} alt="imagen del producto" />
                <p>{props.item.description}</p>
                <span>Price:${props.item.price} | in stock: {props.item.stock}</span>
                {
                    props.item !== "" && amount === 0 ? <ItemCount stock={props.item.stock} onAdd={onAdd} initial={0} id={props.item.id} /> : <><Link to={"/NauticaMartinTienda/cart"}><button className='ItemDetail__cartBtn'>Ir al carrito</button></Link></>
                } 
            </div>)
        }
        </>
  )
}

export default ItemDetail