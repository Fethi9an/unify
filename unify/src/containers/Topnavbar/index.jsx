import Navbarmenu from "../../components/Navbarmenu"
import Togglebutton from "../../components/Togglebutton"
import Eventbutton from "../../components/Eventbutton"
import Unifybrand from "../../components/Unifybrand"
import './style.css'

function Topnavbar () {
    return(
        <div className="navbar">
            <Unifybrand/>
            <Eventbutton/>
            <Togglebutton/>
            <Navbarmenu/>
        </div>
    )
}
export default Topnavbar