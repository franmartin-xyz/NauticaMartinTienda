import React from "react";
import { useState } from "react";
import "./itemCount.css";
import {CartItems} from "../index"

const ItemCount = ({ stock = 5, initial = 0, onAdd }) => {
    const [count, setCount] = useState(initial);
    const updateCount = (op) => {
      if (op === "_" && count > 0) {
        setCount(count - 1);
      }
      if (op === "+" && count < stock) {
        setCount(count + 1);
      }
    };
    
    return (
    <div className="card__counter">
        <div className="card__counter-btn">
            <button type="button" id="minusBtn" onClick={() => updateCount("_")}>_</button>
            <span id="quantity">{count}</span>
            <button type="button" id="addBtn" onClick={() => updateCount("+")}>+</button>
        </div>
        <button type="button" className="cart__addBtn" onClick={() => {<CartItems arr={count} />}} disabled={count === "" || count === 0}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount