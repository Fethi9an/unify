import './style.css'
import AddCircle from '../Icons/addCircle'
import SearchIcon from '../Icons/searchIcon'
import ProfileIcon from '../Icons/profileIcon'
import {useNavigate} from 'react-router-dom'

function Eventbutton () {
  let navigate = useNavigate();
    return (
        <div className="logo">
              <button id="event-btn" onClick={() => navigate("/eventform")}> Skapa event</button>
              <div className='logo-box'>
                <SearchIcon className="icons"/>
                <ProfileIcon className="icons"/>
              </div>
            </div>
    )
}

export default Eventbutton