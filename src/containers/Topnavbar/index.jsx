import './style.css'
import Navbar from "../../components/Navbar/Navbar"
import SearchIcon from "../../components/Icons/searchIcon"
import ProfileIcon from "../../components/Icons/profileIcon"
import SvgUnifyLogo from '../../components/Icons/unifyLogo'

function Topnavbar () {
    return(
        <div className='topnavbar'>
            <div className='logo'>
            <SvgUnifyLogo/>
            <div className="Icons">
                    <SearchIcon/>
                    <ProfileIcon/>
                </div>
            </div>
            <div className="navbar">
                <Navbar />
            </div>
            <div>
                <hr />
            </div>
        </div>
    )
}
export default Topnavbar