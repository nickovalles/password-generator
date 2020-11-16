// Assignment Code Here

//var passwordLength????
//CreatePassword?

// Create Variables For Password Character Choices
function createPassword(#, #){
password = "";
var special = "!@#$%^&*()_-=+`~[{}]|:;'<,>.?/";
var number = "1234567890";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercase = "qwertyuiopasdfghjklzxcvbnm";

}




// Generate Appropriate Password based on charType (check w3school for that link)



// Prompt User To Select One of the Following Options


// Use Swtich to Carry out Action


// Generate Password Based on all Factors
function generatePassword() {
  var passwordLength = charCount();
  if (passwordLength === null) {
    return null;
  }

  var password = charType(passwordLength);
  if (password === null) {
    return null;
  }
  return password;
}


// Get References to the #Generate element
var generateBtn = document.querySelector("#generate");

// Write Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //If a password was not selected... write "The User Cancelled During The Prompt"
  if (password === null) {
    passwordText.value = "The User Cancelled During The Prompt.";

    // If not... copy the password into the text box.
  } else {
    passwordText.value = password;
  }

}


// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);