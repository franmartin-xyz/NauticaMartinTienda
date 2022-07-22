import React from 'react'
import "./main.css"
import { ItemListContainer} from "../../components/index"
import {Link} from "react-router-dom"
const main = () => {
  return (
    <>
    <div className='mainTitle__container'>
      <Link to={"/NauticaMartinTienda/products"}><title className='main__title'>PRODUCTOS</title></Link>
    </div >
    <ItemListContainer />
    </>
  )
}

export default main