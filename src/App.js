import React from 'react'
import "./App.css"
import {Navbar,Cart} from "./components"
import {Footer, Header, Main, ItemDetailContainer} from "./containers"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContext } from './context/CartContext'
const App = () => {
  return (
    <CartContext>
    <BrowserRouter>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Routes>
        <Route index path={"NauticaMartinTienda/"} element={ 
          <div className='App' >
            <div className='gradient__bg'>
              <Header /> 
              <Main />
            </div>
          </div>
        }/>
        <Route path="*" element={
       <div style={{"color":"white"}} >ERROR 404</div> 
      } />
      <Route path="NauticaMartinTienda/products/item/:id" element={<ItemDetailContainer />} /> 
      <Route path="NauticaMartinTienda/products/category/:name" element={<Main/>}/>
      <Route path='NauticaMartinTienda/products' element={<Main />}/>
      <Route path='NauticaMartinTienda/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </BrowserRouter> 
    </CartContext>
  )
}

export default App
