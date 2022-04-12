//Hamburger meny
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Skapa event knapp
document.querySelector('#event-btn')
    .addEventListener('click', () => {
        window.location.href = 'form.html';
    });



console.log('main.js file')

var nameInput = document.getElementById('name');

console.log(nameInput);

function validateNameInput(event){
    console.log('name input blur');
    var nameInputVaule = event.target.value;
    console.log('value:', nameInputVaule);

    var nameInputError = document.getElementById('name-error');

    if(nameInputVaule == '') return;

    if(nameInputVaule.length <2){
        //console.log('ERROR! Name should have at least two characters');
        nameInputError.innerText = 'Name should have at least two characters';
    } else {
        nameInputError.innerText = '';
    }

    if(nameInputVaule.length > 15){
        //console.log('ERROR! Name should have up to 15 characters');
        //nameInput.className = ' error';
        nameInputError.innerText = 'Name should have up to 15 characters';
    }
}
nameInput.addEventListener('focus',validateNameInput);
nameInput.addEventListener('blur',validateNameInput);

//Email
var emailInput = document.getElementById('email');

console.log(emailInput);

function validateEmailInput(event){
    console.log('name input blur');
    var emailInputVaule = event.target.value;
    console.log('value:', emailInputVaule);

    var emailInputError = document.getElementById('email-error');

    if(emailInputVaule == '') return;

    if(!emailInputVaule.includes("@")){
        emailInputError.innerText = 'Must be a vaild email';
    } else {
        emailInputError.innerText = '';
    }
}

emailInput.addEventListener('focus', validateEmailInput);
emailInput.addEventListener('blur', validateEmailInput);