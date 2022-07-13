import React from 'react'
import "./App.css"
import { Navbar} from "./components"
import {Footer, Header, Main} from "./containers"

const App = () => {
  return (
      <div className='App'> 
        <div className='gradient__bg'>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
  )
}

export default App
