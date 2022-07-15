import React from "react";
import "./item.css";
import {default as ItemCount} from "../itemcount/itemcount"
import {default as ItemDescriptionContainer } from "../ItemDescriptionContainer/ItemDescriptionContainer"
import {Link} from "react-router-dom";
const Item = (props) => {
  let stock = props.data.stock
    return (
      <>
    
      <div className="card__item">
      <Link to={"NauticaMartinTienda/detail/:id"}>
        <div className="card__item-descripion">
          <h1>{props.data.title}</h1>
          <img src={props.data.pictureUrl} alt="product img" />
          <span>Price:${props.data.price} | in stock:{props.data.stock}</span>
        </div>
      </Link>
        <ItemDescriptionContainer item={props.data} key={props.data.is} />
        <ItemCount key={props.data.id} stock={stock}  />
      </div>
    </>
  )
}

export default Item