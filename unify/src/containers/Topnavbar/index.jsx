import Eventbutton from "../../components/Eventbutton"
import Unifybrand from "../../components/Unifybrand"
import './style.css'
import Navbar from "../../components/Navbar/Navbar"

function Topnavbar () {
    return(
        <div className="navbar">
            <Unifybrand/>
            <Eventbutton/>
            <Navbar />
        </div>
    )
}
export default Topnavbar