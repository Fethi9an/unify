import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div id="page-container">
      <div className="navbar">
            <div className="logo">
              <button id="event-btn"><img src="./src/img/Addcircle.png" 
              alt="EventBtn"/> Skapa event</button>
            <img src="./src/img/ProfileIcon.png" alt="Profile"></img>
            </div>
            <div className="brand-title">
            <img src="./src/img/UnifyLogo.png" alt="UnifyIcon"/>
            </div>
    
            <a href="#" className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </a> 
            <div className="navbar-links">
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

//Hamburger meny
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



export default App
