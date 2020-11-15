// Assignment Code Here


// Get References to the #Generate element
var generateBtn = document.querySelector("#generate");

// Write Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);