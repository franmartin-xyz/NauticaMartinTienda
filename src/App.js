import React from 'react'
import "./App.css"
import {Navbar,ItemFilterContainer} from "./components"
import {Footer, Header, Main, ItemDetailContainer} from "./containers"
import {BrowserRouter, Routes, Route} from "react-router-dom"
const App = () => {
  return (
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
      <Route path="NauticaMartinTienda/products/category/:name" element={<ItemFilterContainer/>}/>
      <Route path='NauticaMartinTienda/products' element={<Main />}/>
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
