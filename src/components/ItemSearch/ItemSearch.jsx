import React from 'react'
import "./ItemSearch.css"
import {useNavigate, useParams} from "react-router-dom"
const ItemSearch = () => {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <>
    <div className='main__search-Cont'>
        <input placeholder='Buscar Producto'></input>
        <span>Filtrar por Género</span>
        <select onChange={(event)=>navigate(`/NauticaMartinTienda/products/category/${event.target.value}`)} value={param.name}>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
        </select>
    </div>    
    </>
  )
}

export default ItemSearch