import throttle from "lodash.throttle"
import '../css/03-feedback.css'



const form = document.querySelector('.feedback-form')
const text = document.querySelector('[name = "message"]')
const email = document.querySelector('[name = "email"]')

form.addEventListener('submit', onSubmit)
form.addEventListener('input', throttle(onInputText), 500)

const LOCALSTORAGE_KEY = 'feedback-form-state';


function onInputText() {
    const object = { email: email.value, message: text.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log({email: email.value, message: text.value})
    localStorage.removeItem(LOCALSTORAGE_KEY)
    evt.currentTarget.reset()
}
  
  const OutputData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))
    if (OutputData) {
        email.value = OutputData.email;
        text.value = OutputData.message;
  }

