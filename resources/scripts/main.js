const inputs = document.querySelectorAll('input');//select all inputs
const btn = document.querySelector('.btn'); //select the button
const form = document.querySelector("form");

form.reset();

//this function generates the alert message
function typeOfInput(name) {
    switch(name){
        case 'firstName':
            return 'First Name cannot be empty';
            break;
        case 'lastName':
            return 'Last Name cannot be empty';
            break;
        case 'email':
            return 'Email cannot be empty';
            break;
        case 'password':
            return 'Password cannot be empty';
            break;
    }
}
//this function checks the email with regular expressions
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//This function is called when the input is out of focus.
function alertInput(){
    if(this.value.length === 0){
        
        this.parentNode.parentNode.lastElementChild.textContent = typeOfInput(this.name); // write the message in the div
        this.parentNode.parentNode.lastElementChild.classList.add('alert'); //add the alert class to the div

        this.classList.add('input-alert'); //add the input-alert class to the input
    
    }else if(this.name === 'email' && !validateEmail(this.value)){
        
        this.parentNode.parentNode.lastElementChild.textContent = 'Looks like this is not an email'; //check the email and write a message if email is wrong
        this.parentNode.parentNode.lastElementChild.classList.add('alert'); //add the alert class to the div
    
    }else{
        
        this.parentNode.parentNode.lastElementChild.textContent = ''; // remove the message in the div
        this.classList.remove('input-alert'); // remove the input-alert class
    
    }
}

//this functions checks all of the inputs
function checkInputs(){
   
    inputs.forEach(input => {
        
        if(input.value.length === 0){
            
            input.parentNode.parentNode.lastElementChild.textContent = typeOfInput(input.name);// write the message in the div
            input.parentNode.parentNode.lastElementChild.classList.add('alert');//add the alert class to the div

            input.classList.add('input-alert');//add the input-alert class to the input

        }
    
    })
}

inputs.forEach(input => input.addEventListener('blur', alertInput));
btn.addEventListener('click', checkInputs);