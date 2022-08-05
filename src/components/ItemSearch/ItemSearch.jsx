import React from 'react'
import "./ItemSearch.css"
import {useNavigate, useParams} from "react-router-dom"
const ItemSearch = (props) => {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <>
    <div className='main__search-Cont'>
       <form onSubmit={props.handlesearch}><input type={"text"} id='search' placeholder='Buscar Producto'></input></form>
        <span>Filtrar por Categorías</span>
        <select onChange={(event)=>navigate(`/NauticaMartinTienda/products/category/${event.target.value}`)} value={param.name}>
            <option value={"Instruments"}>Instrumentos</option>
            <option value={"Recreation"}>Recreación</option>
            <option value={"Accesories"}>Accesorios</option>
            <option value={"Kayaks"}>Kayaks</option>
            <option value={"Lubricants"}>Aceites y Lubricantes</option>
        </select>
    </div>    
    </>
  )
}

export default ItemSearch