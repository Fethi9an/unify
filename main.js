//Hamburger meny
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//Skapa event knapp
document.querySelector('#event-btn')
    .addEventListener('click', () => {
        window.location.href = 'event-form.html';
    });

//Unify Logo
document.querySelector('.brand-title')
    .addEventListener('click', () => {
        window.location.href = 'index.html';
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

//Textarea
var textareaInput = document.getElementById('textarea');

console.log(textareaInput);

function validateTextareaInput(event){
    console.log('textarea input blur');
    var textareaInputVaule = event.target.value;
    console.log('value:', textareaInputVaule);

    var textareaInputError = document.getElementById('textarea-error');

    if(textareaInputVaule == '') return;

    if(textareaInputVaule.length <6){
        textareaInputError.innerText = 'Textarea should have at least 6 characters';
    } else {
        textareaInputError.innerText = '';
    }
}

textareaInput.addEventListener('focus', validateTextareaInput);
textareaInput.addEventListener('blur', validateTextareaInput);

const form = document.getElementById('eventform')
const eventName = document.getElementById('name')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const eventNameValue = eventName.value.trim();

    if(eventNameValue === '') {
        setErrorFor(eventName, 'Username cannot be blank')
    } else {
        setSuccessFor(eventName);
    }
}

