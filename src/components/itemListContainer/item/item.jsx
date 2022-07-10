import React from "react";
import { useState } from "react";
import "./item.css";

const Item = (props) => {
    const stock = props.data.stock;
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
    
    return (
    <>
    <div className="card__item">
      <div className="card__item-descripion">
      <h1>{props.data.title}</h1>
      <img src={props.data.pictureUrl} alt="product img" />
      <p>{props.data.description}</p>
      <span>Price:${props.data.price} | in stock:{props.data.stock}</span>
      </div>
      <div className="card__item-btn">
          <div className="card__item-btn-container">
            <button type="button" id="minusBtn" onClick={() => updateCount("_")}>_</button>
            <span id="quantity">{count}</span>
            <button type="button" id="addBtn" onClick={() => updateCount("+")}>+</button>
          </div>
          <div className="cart__addBtn-container">
          <button type="button" className="cart__addBtn" onClick={() => {}} disabled={count === "" || count === 0}>Añadir al carrito</button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Item