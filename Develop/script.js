// Assignment Code Here
//function charCount () {
  //var isTheLengthValid = false;


//Put a while or for loop here. While? While runs repeatedly.
while(isTheLengthValid === false) {
  //Now we should ask the user how many char they want the generator to generate for them
  var passwordLength = window.prompt("Please Choose a Password Length Between 8 - 128 Characters.");

  // If the password inputed is falsy, EXIT.
  if(passwordLength === null){
    return null;
  }

  // GAME TIME. If Password Length Is GOOD (within valid range) then keep going

  // GAME TIME. If Password Length Is NOT GOOD (not within valid range) then let the user know and window.prompt again

  // DO NOT FORGET TO ADD RETURNS!!!!!!

}


//var passwordLength????
//CreatePassword?

// Create Variables For Password Character Choices
//function createPassword(#, #){
//password = "";
//var special = "!@#$%^&*()_-=+`~[{}]|:;'<,>.?/";
//var number = "1234567890";
//var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
//var lowercase = "qwertyuiopasdfghjklzxcvbnm";





// Generate Appropriate Password based on charType (check w3school for that link)



// Prompt User To Select One of the Following Options


// Use Swtich to Carry out Action


// Generate Password Based on all Factors
function generatePassword() {
  var passwordLength = charCount();
  if (passwordLength === null) {
    return null;
  }

  //another IF statement - check null later?(dev note)
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