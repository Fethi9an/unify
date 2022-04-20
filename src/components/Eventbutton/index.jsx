import './style.css'
import addCircle from '/src/img/Addcircle.svg'
import searchLogo from '/src/img/SearchIcon.svg'
import profileLogo from '/src/img/ProfileIcon.svg'

function Eventbutton () {
    return (
        <div className="logo">
              <button id="event-btn"><img src={addCircle} 
              alt="EventBtn"/> Skapa event</button>
              <div className='logo-box'>
                <img src={searchLogo} alt="svg SearchIcon"/> 
                <img src={profileLogo} alt="svg ProfileIcon"/> 
              </div>
            </div>
    )
}

export default Eventbutton