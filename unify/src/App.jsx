import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div id="page-container">
      <div class="navbar">
            <div class="logo">
              <button id="event-btn"> Skapa event</button>
            
            </div>
            <div class="brand-title">
              
            </div>
    
            <a href="#" class="toggle-button">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </a> 
            <div class="navbar-links">
              <ul>
                <li><a href="#">Konsert</a></li>
                <li><a href="#">Quiz</a></li>
                <li><a href="#">Mat & dryck</a></li>
                <li><a href="#">Uteliv</a></li>
                <li><a href="#">Kultur & Livsstil</a></li>
                <li><a href="#">Guider</a></li>
                <li><a href="#">Sport & Fritid</a></li>
                <li><a href="#">Konst & Hantverk</a></li>
                <li><a href="#">Hälsa & Skönhet</a></li>
              </ul>
            </div>
            
        </div>
        <hr></hr>
      </div>
  )
}

export default App
