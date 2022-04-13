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


//lägg till ett if statement här nånstans kanske för att få till hamburgermenyn? typ "om fönsterbredden är mindre än x så klickar vi på togglebutten för att få fram navbarmenu annars använder vi navbarmenu (kollade om man kunde använda mediaqueries i javascripten om det underlättar?? https://www.w3schools.com/howto/howto_js_media_queries.asp)