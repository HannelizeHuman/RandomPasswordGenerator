/* Password Generator will be able to provide a passwprd of between 8-128 characters, including/excluding
a variation of characters depending on what the user specifies*/



// Password variables:
// Special Characters:
spcharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "'", "\;", "\:", ".", "<", ">", "?", "/", "[", "]", "{", "}", "\\", "~"];
//Numeric Characters:
number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Alphabet Characters
alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// User input variables:
var enterLength = "";
var confirmNumber;
var confirmSpCharacter;
var confirmUppercase;
var confirmLowercase;

// Selection made outside statements, so they can be concatenated 
var selection;

//Prompt to confirm how long user would like the password:
function generatePassword() {
  var enterLength = (prompt("How many characters would you like your password to contain? Choose a number between 8 and 128."));
  if (!enterLength) {
      alert("Please enter a value");
  } else if (enterLength <= 8 || enterLength >= 128) {
      enterLength = parseInt(prompt("You must choose an amount between 8 and 128"));

  } else {
    // Continues once user entered a valid input
    confirmNumber = confirm("Do you want to include numbers?");
    confirmSpCharacter = confirm("Do you want to include special characters?");
    confirmUppercase = confirm("Do you want to include uppercase characters?");
    confirmLowercase = confirm("Do you want to include lowercase characters?");
  };

  // If 4 negative options
  if (!confirmSpCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      selection = alert("You must select at least one of the criteria!");
  }

  //Else if for 4 positive selections
  else if (confirmNumber && confirmSpCharacter && confirmUppercase && confirmLowercase) {
    selection = number.concat(spcharacter, alphaUpper, alphaLower);
  }
  // Else if for 3 positive selections
  

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
