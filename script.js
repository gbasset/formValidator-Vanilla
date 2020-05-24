const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
// Show error message 
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}
// Show error message 
function showSuccess(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
// Check email is valid
function checEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(input.value.trim())) {
    showSuccess(input)
  } else {
    showError(input, ' l\'email n\'est pas valide')
  }
}
// Check Passwords match 
function getPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Les mots de passes doivent êtres identiques')
  }
}
function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1)
}
// Check required field 
function checkRequired(inputArray) {
  inputArray.forEach((input) => {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} est requis`)
    } else {
      showSuccess(input)
    }
  })
}
// Check Input Length 
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Le ${getFieldName(input)} doit être d'au moins ${min} caractères`)
  } else if (input.value.length > max) {
    showError(input, ` Le ${getFieldName(input)} ne doit pas dépasser ${max} caractères`)
  } else {
    showSuccess(input)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  checkRequired([username, email, password, password2])
  checkLength(username, 3, 15)
  checkLength(password, 6, 25)
  checEmail(email)
  getPasswordsMatch(password, password2)
})