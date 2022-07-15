import React from 'react'
import { useState } from 'react';
import "./itemcount.css"
const ItemCount = (props) => {
    const stock = props.stock;
    let initial = 0;
    const [count, setCount] = useState(initial);
    const updateCount = (op) => {
      if (op === "_" && count > 0) {
        setCount(count - 1);
      }
      if (op === "+" && count < stock) {
        setCount(count + 1);
      }
    };
    let visible = "auto";
    if(count === "" || count === 0) {visible="auto"} else {visible="pointer"}
    let show = {"cursor":visible};
  return (
    <div className="card__item-btn">
          <div className="card__item-btn-container">
            <button type="button" id="minusBtn" onClick={() => updateCount("_")}>_</button>
            <span id="quantity">{count}</span>
            <button type="button" id="addBtn" onClick={() => {updateCount("+")}}>+</button>
          </div>
            <div className="cart__addBtn-container">
            <button type="button" className="cart__addBtn" onClick={() => {}} style={show} disabled={count==="" || count ===0}>Añadir al carrito</button>
          </div>
    </div>
  )
}

export default ItemCount