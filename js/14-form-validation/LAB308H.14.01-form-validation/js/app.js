console.log("Test");

// Registration - Username Validation
const usernameInput = document.querySelector('#username');
usernameInput.addEventListener('input', function(event){
  validateUsername();
});

function validateUsername() {
  const username = usernameInput.value.trim();

  if (username === '') {
    // displayErrorMessage('Username cannot be blank.');
    // return;
    window.alert('Username cannot be blank.');
  }

  if (username.length < 4) {
    displayErrorMessage('Username must be at least four characters long.');
    return;
  }

  const uniqueChars = new Set(username);
  if (uniqueChars.size < 2) {
    displayErrorMessage('Username must contain at least two unique characters.');
    return;
  }

  const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialCharsRegex.test(username) || /\s/.test(username)) {
    displayErrorMessage('Username cannot contain special characters or whitespace.');
    return;
  }

  clearErrorMessage();
}