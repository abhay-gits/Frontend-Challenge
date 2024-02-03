let email = document.getElementById('email')
let password = document.getElementById('password')
let emailValidationBox = document.getElementById('emailValidationBox')
let passwordValidationBox = document.getElementById('passwordValidationBox')

/* Function for email validation */
function emailValidation(value){
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    let isValid = validation.test(value);
    if(isValid){
        emailValidationBox.classList.remove('inValid')
        emailValidationBox.textContent = "Valid";
        emailValidationBox.classList.add('valid')
    }else{
        emailValidationBox.textContent = "Invalid"
        emailValidationBox.classList.add('inValid')
    }
}

/* function for password validation */
function passwordValidation(value){
    if(value.length >= 8){
        passwordValidationBox.classList.remove('inValid')
        passwordValidationBox.textContent = "Strong"
        passwordValidationBox.classList.add('valid')
    }else{
        passwordValidationBox.textContent = "weak"
        passwordValidationBox.classList.add('inValid')
    }
}

email.addEventListener('input',()=>{
    let emailValue = email.value;
    emailValidation(emailValue);
})

password.addEventListener('input',()=>{
    let passwordValue = password.value;
    passwordValidation(passwordValue);
})