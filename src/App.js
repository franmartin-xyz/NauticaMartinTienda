import React from 'react'
import "./App.css"
import { Navbar} from "./components"
import {Footer, Header, Main} from "./containers"
import {BrowserRouter, Routes, Route} from "react-router-dom"
const App = () => {
  return (
    <BrowserRouter>
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <Routes>
        <Route path={"/"} element={ 
          <div className='App' >
            <div className='gradient__bg'>
              <Header /> 
              <Main />
            </div>
          </div>
        }/> 
      </Routes>
      <Footer />
    </BrowserRouter> 
  )
}

export default App
