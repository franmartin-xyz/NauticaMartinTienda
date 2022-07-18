import React from 'react'
import "./main.css"
import { ItemListContainer, ItemSearch} from "../../components/index"
import {Link,Route,Routes} from "react-router-dom"
const main = () => {
  return (
    <>
    <div className='mainTitle__container'>
      <Link to={"products/"}><title className='main__title'>PRODUCTOS</title></Link>
    </div >
    <ItemSearch />
    <ItemListContainer />
    </>
  )
}

export default main