import './style.css'
import addCircle from '/src/img/Addcircle.svg'

function Eventbutton () {
    return (
        <div className="logo">
              <button id="event-btn"><img src={addCircle} 
              alt="EventBtn"/> Skapa event</button>
            <img src="./src/img/ProfileIcon.png" alt="Profile"></img>
            </div>
    )
}

export default Eventbutton