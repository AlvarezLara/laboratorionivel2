const form = document.getElementById('account-form');
const submitBtn = document.getElementById('submitBtn');

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const inputConfirmPass = document.getElementById('confirm');

const nameRequired = document.getElementById('nameRequired');
const nameValidate = document.getElementById('nameValidate');
const emailRequired = document.getElementById('emailRequired');
const emailValidate = document.getElementById('emailValidate');
const passRequired = document.getElementById('passRequired');
const passValidate = document.getElementById('passValidate');
const confirmRequired = document.getElementById('confirmRequired');
const confirmValidate = document.getElementById('confirmValidate');

const nameIconError = document.getElementById('name-icon-error');
const nameIconSuccess = document.getElementById('name-icon-success');
const emailIconError = document.getElementById('email-icon-error');
const emailIconSuccess = document.getElementById('email-icon-success');
const passIconError = document.getElementById('pass-icon-error');
const passIconSuccess = document.getElementById('pass-icon-success');
const confirmIconError = document.getElementById('confirm-icon-error');
const confirmIconSuccess = document.getElementById('confirm-icon-success');


submitBtn.addEventListener('click', function (event) {
    event.preventDefault();

    isNameValid = validateName();
    isEmailValid = validateEmail();
    isPasswordValid = validatePassword();
    isConfirmPasswordValid = validateConfirmPassword();
    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        alert('La inscripción ha sido correcta');
    }
});

function validateName() {
    const regex = /^[a-zA-Z]+$/;
    const nameIsEmpty = inputName.value === '';;
    inputName.classList.remove("input-style-success");
    inputName.classList.remove("input-style-error");

    if (nameIsEmpty) {
        // Check required
        nameValidate.classList.add("hidden");
        nameIconSuccess.classList.add("hidden");
        inputName.classList.add("input-style-error");
        nameRequired.classList.remove("hidden");
        nameIconError.classList.remove("hidden");
        return false;
    }

    if (!nameIsEmpty && !regex.test(inputName.value)) {
        // Check others validations
        nameRequired.classList.add("hidden");
        inputName.classList.add("input-style-error");
        nameIconSuccess.classList.add("hidden");
        nameValidate.classList.remove("hidden");
        nameIconError.classList.remove("hidden");
        return false;
    }
    // Show success
    nameRequired.classList.add("hidden");
    nameValidate.classList.add("hidden");
    nameIconError.classList.add("hidden");
    inputName.classList.add("input-style-success");
    nameIconSuccess.classList.remove("hidden");
    return true;
}

function validateEmail() {
    inputEmail.classList.remove("input-style-success");
    inputEmail.classList.remove("input-style-error");

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailIsEmpty = inputEmail.value === '';

    if (emailIsEmpty) {
        // Check required
        emailValidate.classList.add("hidden");
        emailIconSuccess.classList.add("hidden");
        inputEmail.classList.add("input-style-error");
        emailRequired.classList.remove("hidden");
        emailIconError.classList.remove("hidden");
        return false;
    }

    if (!emailIsEmpty && !regexEmail.test(inputEmail.value)) {
        // Check others validations
        emailRequired.classList.add("hidden");
        inputEmail.classList.add("input-style-error");
        emailIconSuccess.classList.add("hidden");
        emailValidate.classList.remove("hidden");
        emailIconError.classList.remove("hidden");
        return false;
    }
    // Show success
    emailRequired.classList.add("hidden");
    emailValidate.classList.add("hidden");
    emailIconError.classList.add("hidden");
    inputEmail.classList.add("input-style-success");
    emailIconSuccess.classList.remove("hidden");
    return true;
}

function validatePassword() {
    inputPass.classList.remove("input-style-success");
    inputPass.classList.remove("input-style-error");
    const passIsEmpty = inputPass.value === '';

    if (passIsEmpty) {
        // Check required
        passValidate.classList.add("hidden");
        passIconSuccess.classList.add("hidden");
        inputPass.classList.add("input-style-error");
        passRequired.classList.remove("hidden");
        passIconError.classList.remove("hidden");
        return false;
    }

    if (!passIsEmpty && inputPass.value.length > 9) {
        // Check others validations
        passRequired.classList.add("hidden");
        inputPass.classList.add("input-style-error");
        passIconSuccess.classList.add("hidden");
        passValidate.classList.remove("hidden");
        passIconError.classList.remove("hidden");
        return false;
    }

    // Show success
    passRequired.classList.add("hidden");
    passValidate.classList.add("hidden");
    passIconError.classList.add("hidden");
    inputPass.classList.add("input-style-success");
    passIconSuccess.classList.remove("hidden");
    return true;
}

function validateConfirmPassword() {
    inputConfirmPass.classList.remove("input-style-success");
    inputConfirmPass.classList.remove("input-style-error");
    const confirmIsEmpty = inputConfirmPass.value === '';

    if (confirmIsEmpty) {
        // Check required
        confirmValidate.classList.add("hidden");
        confirmIconSuccess.classList.add("hidden");
        inputConfirmPass.classList.add("input-style-error");
        confirmRequired.classList.remove("hidden");
        confirmIconError.classList.remove("hidden");
        return false;
    }

    if (!confirmIsEmpty && inputConfirmPass.value !== inputPass.value) {
        // Check others validations 
        confirmRequired.classList.add("hidden");
        inputConfirmPass.classList.add("input-style-error");
        confirmIconSuccess.classList.add("hidden");
        confirmValidate.classList.remove("hidden");
        confirmIconError.classList.remove("hidden");
        return false;
    }

    // Show success
    confirmRequired.classList.add("hidden");
    confirmValidate.classList.add("hidden");
    confirmIconError.classList.add("hidden");
    inputConfirmPass.classList.add("input-style-success");
    confirmIconSuccess.classList.remove("hidden");
    return true;
}
