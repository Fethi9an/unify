import React from 'react'
import './normalize.css'
import './App.css'
import Topnavbar from './containers/Topnavbar'
import Footer from './components/Footer/footer'

function App() {
  
  return (
  
      <div id="page-container">
        <Topnavbar/>
        <hr></hr>
        <p id='blickf'>I Blickfånget</p>
        <Footer />
      </div>
  )
  
}

export default App
