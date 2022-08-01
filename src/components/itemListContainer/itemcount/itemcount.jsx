import React from 'react'
import { useState,useContext } from 'react';
import "./itemcount.css"
import { cartContext } from "../../../context/CartContext";
const ItemCount = ({stock,onAdd,initial,id}) => {
  const CartItems = useContext(cartContext);
   if (CartItems.isInCart(id) > -1) initial = CartItems.CartItems[CartItems.isInCart(id)].quantity;
    const [count, setCount] = useState(initial);
    const updateCount = (op) => {
      if (op === "_" && count > initial) {
        setCount(count - 1);
      }
      if (op === "+" && count < stock) {
        setCount(count + 1);
      }
    };
    let visible = "auto";
    if(count === "" || count === initial) {visible="auto"} else {visible="pointer"}
    let show = {"cursor":visible};
  return (
    <div className="card__item-btn">
          <div className="card__item-btn-container">
            <button disabled={count>0 && count === 0} type="button" id="minusBtn" onClick={() => updateCount("_")}>_</button>
            <span id="quantity">{count}</span>
            <button disabled={count>0 && count === stock} type="button" id="addBtn" onClick={() => updateCount("+")}>+</button>
          </div>
            <div className="cart__addBtn-container">
            <button type="button" className="cart__addBtn" onClick={() => onAdd(count)} style={show} disabled={count==="" || count === initial}>Añadir al carrito</button>
          </div>
    </div>
  )
}

export default ItemCount