// Assignment code here
function generatePassword() {
  var length = prompt(
    "How long would you like your password (between 8 and 128 characters)?"
  );
  return length;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
