// Assignment Code Here
function charCount () {
  var isTheLengthValid = false;


// Put a while or for loop here. While? While runs repeatedly.
while(isTheLengthValid === false) {
  // Now we should ask the user how many char they want the generator to generate for them. 8-128, refer to Acceptance Reqs in Bootcamp spot
  var passwordLength = window.prompt("Please Choose a Password Length Between 8 - 128 Characters.");

  // If the password inputed is falsy, EXIT.
  if(passwordLength === null){
    return null;
  }

  // GAME TIME. If Password Length Is GOOD (within valid range) then keep going .. maybe parseInt?
  passwordLength = parseInt(passwordLength)
  if (passwordLength >= 8 && passwordLength <= 128 ) {
    window.alert("The Length of your desired password is accepted as "+ passwordLength +" characters.");
    isTheLengthValid = true;
    // BREAK TIME
    break;
  }

  // GAME TIME. If Password Length Is NOT GOOD (not within valid range) then let the user know and window.prompt again
  if (passwordLength <= 8 || passwordLength >= 128) {
    window.alert("Sorry! Invalid. Please Select a Length Between 8 - 128 characters. Thank you!");
    isTheLengthValid = false;
    // BREAK TIME
    break;
  }
}

  // DO NOT FORGET TO ADD RETURNS!!!!!!
  return passwordLength;

}

// SMALL REMINDER TO REMEMBER LOCAL VS GLOBAL
// Dont panic if things grey out... 
// Create Variables For Password Character Choices
function createPassword(passwordLength, textTypeChoices){
password = "";
var special = "!@#$%^&*()_-=+`~[{}]|:;'<,>.?/";
var number = "1234567890";
var uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowercase = "qwertyuiopasdfghjklzxcvbnm";

// Some type of loop here to go through the vars. For??
for (var i = 0; i < passwordLength; i++) {
  // Use Math Floor()
  var itemCase = textTypeChoices[Math.floor(Math.random() * textTypeChoices.length)];

  switch (itemCase) {
    case A: // UPPER
      password += uppercase[Math.floor(Math.random() *uppercase.length)];
      // it doesn't work if you don't put a break here
      break;
    case B: // LOWER
      password += lowercase[Math.floor(Math.random() *lowercase.length)];
      // it doesn't work if you don't put a break here
      break;
    case C: // SPECIAL CHAR
      password += special[Math.floor(Math.random() *special.length)];
      // it doesn't work if you don't put a break here
      break;
    case D: // NUMBER
      password += number[Math.floor(Math.random() *number.length)];
      // it doesn't work if you don't put a break here
      break;
    default:
      break;
  }
}

// DON'T forget to return or else you won't get anything back

return password;

}



// Generate Appropriate Password based on charType (check w3school for that link)

function charType (passwordLength) {
  // STRING VAR, just text
  var typeA = "1: uppercase";
  var typeB = "2: lowercase";
  var typeC = "3: numbers";
  var typeD = "4: special characters";
  var typeE = "5: lowercase + uppercase";
  var typeF = "6: lowercase + numbers";
  var typeG = "7: lowercase + special character";
  var typeH = "8: uppercase + numbers";
  var typeI = "9: uppercase + special character";
  var typeJ = "10: numbers + special character";
  var typeK = "11: lowercase + uppercase + numbers";
  var typeL = "12: lowercase + uppercase + special character";
  var typeM= "13: lowercase + numbers + special character";
  var typeN = "14: uppercase + numbers + special character";
  var typeO = "15: lowercase + uppercase + numbers + special character";

// Boolean, T or F?

var ischarType = false;

// Prompt User To Select One of the Following Options
// Loops

while(ischarType === false) {
  //window thing now
  var typeEntry = window.prompt(
    //selection? copy and paste from charType for vars
    // w3 school \n char
    "Please select a number from the follow selection: \n" +
    typeA + "\n" +
    typeB + "\n" +
    typeC + "\n" +
    typeD + "\n" +
    typeE + "\n" +
    typeF + "\n" +
    typeG + "\n" +
    typeH + "\n" +
    typeI + "\n" +
    typeJ + "\n" +
    typeK + "\n" +
    typeL + "\n" +
    typeM + "\n" +
    typeN + "\n" +
    typeO + "\n" 
  
  );

// IF the user did not input a reponse, then EXIT (find null thing)(if or else if?)
if(typeEntry === null) {
  //debugged: you forgot the return
  return null;
}

// Switch Preparation
// Type Entry Selection (if)
typeEntrySelection = parseInt(typeEntry);

if(typeEntrySelection >= 1 && typeEntrySelection <= 15) {
  ischarType = true;
  // Type Entry Selection (if) falsy
} 

else {
  window.alert("Whoops! Invalid entry of " + typeEntrySelection +" .Please now choose a reponse between 1 - 15.");
  // not break
  continue;
}

// Using Switch - carrying out action cases
switch(typeEntrySelection) {
  case 1: //uppercase
  alert("You have selected " + typeA);
  var textTypeChoices = [A]
  password = createPassword(passwordLength, typeEntrySelection);
  //break
  break;

  case 2: //uppercase
  alert("You have selected " + typeB);
  var textTypeChoices = [B]
  password = createPassword(passwordLength, typeEntrySelection);
  //break
  break;

  case 3: //uppercase
  alert("You have selected " + typeC);
  var textTypeChoices = [C]
  password = createPassword(passwordLength, typeEntrySelection);
  //break
  break;

  case 4: //uppercase
    alert("You have selected " + typeD);
    var textTypeChoices = [D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 5: //uppercase
    alert("You have selected " + typeE);
    var textTypeChoices = [A, B]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 6: //uppercase
    alert("You have selected " + typeF);
    var textTypeChoices = [A, C]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 7: //uppercase
    alert("You have selected " + typeG);
    var textTypeChoices = [A, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 8: //uppercase
    alert("You have selected " + typeH);
    var textTypeChoices = [B, C]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 9: //uppercase
    alert("You have selected " + typeI);
    var textTypeChoices = [B, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 10: //uppercase
    alert("You have selected " + typeJ);
    var textTypeChoices = [C, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 11: //uppercase
    alert("You have selected " + typeK);
    var textTypeChoices = [A, B, C]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 12: //uppercase
    alert("You have selected " + typeL);
    var textTypeChoices = [A, B, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 13: //uppercase
    alert("You have selected " + typeM);
    var textTypeChoices = [A, C, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 14: //uppercase
    alert("You have selected " + typeN);
    var textTypeChoices = [B, C, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

    case 15: //uppercase
    alert("You have selected " + typeO);
    var textTypeChoices = [A, B, C, D]
    password = createPassword(passwordLength, typeEntrySelection);
  //break
    break;

  //add the default window one
  default:
    window.alert("Sorry! Invalid entry of " + typeEntrySelection +" .Please choose an entry between A - O");
    //continue
    continue;

}
}

//returns
return password;

}
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
  } 
  
  else {
    passwordText.value = password;
  }

}


// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword)