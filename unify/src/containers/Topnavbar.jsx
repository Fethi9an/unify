import Navbarmenu from "../components/Navbarmenu"
import Togglebutton from "../components/Togglebutton"

function Topnavbar () {
    return(
        <div className="navbar">
            <div className="logo">
              <button id="event-btn"><img src="./src/img/Addcircle.png" 
              alt="EventBtn"/> Skapa event</button>
            <img src="./src/img/ProfileIcon.png" alt="Profile"></img>
            </div>
            <div className="brand-title">
            <img src="./src/img/UnifyLogo.png" alt="UnifyIcon"/>
            </div>
            <Togglebutton/>
            <Navbarmenu/>
        </div>
    )
}
export default Topnavbar


//lägg till ett if statement här nånstans? om fönsterbredden är mindre än x så använder vi togglebutton annars använder vi navbarmenu (kollade om man kunde använda mediaqueries i javascripten istället för i css om det underlättar?? https://www.w3schools.com/howto/howto_js_media_queries.asp)