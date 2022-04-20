import './style.css'
import AddCircle from '../Icons/addCircle'
import SearchIcon from '../Icons/searchIcon'
import ProfileIcon from '../Icons/profileIcon'

function Eventbutton () {
    return (
        <div className="logo">
              <button id="event-btn"> Skapa event</button>
              <div className='logo-box'>
                <SearchIcon className="icons"/>
                <ProfileIcon className="icons"/>
              </div>
            </div>
    )
}

export default Eventbutton