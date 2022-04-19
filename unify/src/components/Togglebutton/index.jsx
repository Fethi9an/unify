import './style.css'

function Togglebutton () {
    return(
        <a href="#" className="toggle-button">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
        </a>
    )
}
// //Hamburger meny
// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

export default Togglebutton