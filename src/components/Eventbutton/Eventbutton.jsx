import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Eventbutton.css'

function Eventbutton() {
    let navigate = useNavigate();
  return (
    <div className='logo'>
      <button className="event-btn" onClick={() => navigate("/eventform")}> Skapa event</button>
    </div>
  )
}

export default Eventbutton
