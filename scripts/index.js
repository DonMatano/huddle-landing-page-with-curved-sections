const emailInputElement = document.getElementById('emailInput');
const invalidTextElement = document.getElementById('invalidText');
const newsletterForm = document.getElementById('newsletterForm');
const submitButton = document.getElementById('submitButton');
const hiddenEmailMessageClass = 'footer__newsletter__form__email-incorrect-message--hidden';
const invalidInputClass = 'footer__newsletter__form__email-input--invalid';
const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const resetValidation = () => {
    if (!invalidTextElement.classList.contains(hiddenEmailMessageClass)) {
        invalidTextElement.classList.add(hiddenEmailMessageClass)
    }
    if (emailInputElement.classList.contains(invalidInputClass)) {
        emailInputElement.classList.remove(invalidInputClass)
    }
}

const validateEmail = (email) => {
  return validRegex.test(email)
}

const setEmailInvalid = () => {
    if (invalidTextElement.classList.contains(hiddenEmailMessageClass)) {
        invalidTextElement.classList.remove(hiddenEmailMessageClass);
    }
    if (!emailInputElement.classList.contains(invalidInputClass)) {
        emailInputElement.classList.add(invalidInputClass)
    }
}

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = emailInputElement.value;
    if(!email || !validateEmail(email)) {
        setEmailInvalid();
        return
    }
    resetValidation();
    submitButton.innerText = 'Subscribed';
    submitButton.setAttribute('disabled', '');
    setTimeout(() => {
        submitButton.innerText = 'Subscribe'
        submitButton.removeAttribute('disabled')
    }, 1500)
})

