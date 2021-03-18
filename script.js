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

// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  ps = generatePassword ();
  document.getElementById("password").placeholder = ps;
});

//Prompt to confirm how long user would like the password:
function generatePassword() {
  enterLength = (prompt("How many characters would you like your password to contain? Choose a number between 8 and 128."));
  if (!enterLength) {
      alert("Please enter a value");
  } else if (enterLength < 8 || enterLength > 128) {
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
  else if (confirmNumber && confirmSpCharacter && confirmUppercase) {
    selection = number.concat(spcharacter, alphaUpper);
  }
  else if (confirmNumber && confirmSpCharacter && confirmLowercase) {
    selection = number.concat(spcharacter, alphaLower);
  }
  else if (confirmNumber && confirmUppercase && confirmLowercase) {
    selection = number.concat(alphaUpper, alphaLower);
  }
  else if (confirmSpCharacter && confirmUppercase && confirmLowercase) {
    selection = spcharacter.concat(alphaUpper, alphaLower);
  }

//Else if for 2 postive selections
  else if (confirmNumber && confirmSpCharacter) {
    selection = number.concat(spcharacter);
  }
  else if (confirmNumber && confirmLowercase) {
    selection = number.concat(alphaLower);
  }
  else if (confirmNumber && confirmUppercase) {
    selection = number.concat(alphaUpper);
  }
  else if (confirmSpCharacter && confirmUppercase) {
    selection = spcharacter.concat(alphaUpper);
  }
  else if (confirmSpCharacter && confirmLowercase) {
    selection = spcharacter.concat(alphaLower);
  }
  else if (confirmLowercase && confirmUppercase) {
    selection = alphaLower.concat(alphaUpper);
  }

//Else if for 1 positive selection
  else if (confirmNumber) {
    selection = number;
  }
  else if (confirmSpCharacter) {
    selection = spcharacter;
  }
  else if (confirmLowercase) {
    selection = alphaLower;
  }
  else if (confirmUppercase) {
    selection = alphaUpper;
  };

//Password variable is an array placeholder for user, generated amount of lenth
  var password = [];

//Random variable selection:
  for (var i = 0; i < enterLength; i++) {
    
    var choices = selection[Math.floor(Math.random()*selection.length)];
    password.push(choices);
  }

//Converts array into string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

//Puts password into text box
  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Copy password

function copy() {
  var copyText = document.querySelector("#password");
  copyText.select();
  document.execCommand("copy")
}

document.querySelector("#password").addEventListener("click", copy);


function copyPassword () {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("Password copied");
}







// Different copy to clipboard variations that i tried out, and had no luck with.


// var copy = document.querySelector("#copy");
// copy.addEventListener("click", function () {
//   copyPassword();
// });

// function copyPassword () {
//   document.getElementById("password").select();
//   document.execCommand("copy");
//   alert("Password copied");
// }

// function copy_text(element) {
//   //Before we copy, we are going to select the text.
//   var text = document.getElementById(password);
//   var selection = window.getSelection();
//   var range = document.createRange();
//   range.selectNodeContents(text);
//   selection.removeAllRanges();
//   selection.addRange(range);
//   //add to clipboard.
//   document.execCommand('copy');
// }

// const copyToClipboard = str => {
//   const el = document.createElement('textarea');
//   el.value = str;
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
// };






