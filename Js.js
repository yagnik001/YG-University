//Registration form
//=============================================
const uname = document.getElementById('uname');
const form = document.getElementById('form');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
// validation for the email
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//other textbox validations
const validateInputs = () => {
    const usernameValue = uname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(uname, 'Username is required');
    } else {
        setSuccess(uname);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

// contact us
//=====================

function validateInput(field) {
    const errorMessage = document.querySelector(`#${field.id}-error`);
    if (field.value.trim() === '') {
        field.classList.add('invalid');
        errorMessage.textContent = 'This field is required.';
    } else {
        field.classList.remove('invalid');
        errorMessage.textContent = '';
    }
}
document.querySelectorAll('input').forEach(field => {
    field.addEventListener('input', () => {
        validateInput(field);
    });
});
