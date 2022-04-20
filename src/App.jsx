import React from 'react'
import './normalize.css'
import './App.css'
import Topnavbar from './containers/Topnavbar'
import Footer from './components/Footer/footer'
import Form from './components/Form/Form'

function App() {
  
  return (
  
      <div id="page-container">
        <Topnavbar/>
        <hr></hr>
        <p id='blickf'>I Blickfånget</p>
        <Form />
        <Footer />
      </div>
  )
  
}

export default App
