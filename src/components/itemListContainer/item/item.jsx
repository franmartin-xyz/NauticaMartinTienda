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
      <Link to={`/NauticaMartinTienda/products/item/${props.data.id}`}>
        <div className="card__item-descripion">
          <h1>{props.data.title}</h1>
          <img src={props.data.pictureUrl} alt="product img" />
          <span>Precio:${props.data.price} | en stock:{props.data.stock}</span>
        </div>
      </Link>
        <ItemDescriptionContainer item={props.data} />
        <ItemCount  stock={stock} initial={0}  />
      </div>
    </>
  )
}

export default Item