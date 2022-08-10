import React from 'react'
import "./App.css"
import {Navbar,CartContainer,ItemListContainer} from "./components"
import {Footer, Header, ItemDetailContainer} from "./containers"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartContext } from './context/CartContext'
import LoginContext from './context/LoginContext'
import { ModalProvider } from "styled-react-modal"
const App = () => {
  return (
    <ModalProvider>
    <CartContext>
        <LoginContext>
    <BrowserRouter>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Routes>
        <Route index path={"NauticaMartinTienda/"} element={ 
          <div className='App' >
            <div className='gradient__bg'>
              <Header /> 
              <ItemListContainer />
            </div>
          </div>
        }/>
        <Route path="*" element={
          <div style={{"color":"white"}} >ERROR 404</div> 
        } />
      <Route path="NauticaMartinTienda/products/item/:id" element={<ItemDetailContainer />} /> 
      <Route path="NauticaMartinTienda/products/category/:name" element={<ItemListContainer />}/>
      <Route path='NauticaMartinTienda/products' element={<ItemListContainer />}/>
      <Route path='NauticaMartinTienda/cart' element={<CartContainer />}/>
      </Routes>
      <Footer />
    </BrowserRouter> 
        </LoginContext>
    </CartContext>
        </ModalProvider>
  )
}

export default App
