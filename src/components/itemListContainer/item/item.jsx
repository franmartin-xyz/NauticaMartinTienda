import React from "react";
import "./item.css";
import {default as ItemCount} from "../itemcount/itemcount"

const Item = (props) => {
  let stock = props.data.stock
    return (
    <>
    <div className="card__item">
      <div className="card__item-descripion">
        <h1>{props.data.title}</h1>
        <img src={props.data.pictureUrl} alt="product img" />
        <p>{props.data.description}</p>
        <span>Price:${props.data.price} | in stock:{props.data.stock}</span>
      </div>
      <ItemCount key={props.data.id} stock={stock}  />
    </div>
    </>
  )
}

export default Item