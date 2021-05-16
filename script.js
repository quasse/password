//Variables used to check character types that will be used
var lowercaseCheck = false;
var uppercaseCheck = false;
var numericCheck = false;
var specialCheck = false;

function generatePassword() {
  //Arrays to store characters for password
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var special = ["/", "?", "%", "$", "&", "*", "!", "#"];

  // Booleans to check for character types in the password
  var lowercaseConfirm = false;
  var uppercaseConfirm = false;
  var numericConfirm = false;
  var specialConfirm = false;

  // Array to store password characters
  var password = [];

  // Ask user for length of the password
  var length = getLength();

  // Ask user for character types
  getCharType();

  //Fill in password with characters using for loop
  for (i = 0; i < length; i++) {
    //Select number between 1 and 4.
    var character = Math.round(Math.random() * 3 + 1);

    // Depending on character's 1-4 value, add a certain character to the password array
    // Also, check if the user has indicated they would like this character type included
    if (character === 1 && lowercaseCheck) {
      // Notify that character type has been added to password
      lowercaseConfirm = true;
      // Select random item from appropriate character array and add it to the password array
      password[i] = lowercase[Math.floor(Math.random() * lowercase.length)];
    } else if (character === 2 && uppercaseCheck) {
      uppercaseConfirm = true;
      password[i] = uppercase[Math.floor(Math.random() * uppercase.length)];
    } else if (character === 3 && numericCheck) {
      numericConfirm = true;
      password[i] = numeric[Math.floor(Math.random() * numeric.length)];
    } else if (character === 4 && specialCheck) {
      specialConfirm = true;
      password[i] = special[Math.floor(Math.random() * special.length)];
    } else {
      // If the random number hits a character type the user has not selected, repeat loop
      i--;
    }
  }

  // Check to make sure every character type indicated by the user has been added
  if (lowercaseCheck && !lowercaseConfirm) {
    //If one of the character types are not in the password, add a random one of that type
    //to a random spot in password array
    password[Math.round(Math.random() * password.length)] =
      lowercase[Math.floor(Math.random() * lowercase.length)];
  }

  if (uppercaseCheck && !uppercaseConfirm) {
    password[Math.round(Math.random() * password.length)] =
      uppercase[Math.floor(Math.random() * uppercase.length)];
  }

  if (numericCheck && !numericConfirm) {
    password[Math.round(Math.random() * password.length)] =
      numeric[Math.floor(Math.random() * numeric.length)];
  }

  if (specialCheck && !specialConfirm) {
    password[Math.round(Math.random() * password.length)] =
      special[Math.floor(Math.random() * special.length)];
  }

  // Return the array as a string
  return password.join("");
}

//Function that gets the length of the password and checks the type
var getLength = function () {
  var typeCheck = false;
  // This loop will keep going as long as an invalid input is entered
  while (!typeCheck) {
    var input = prompt("Please enter a number between 8 and 128");
    //If the type of the input is not valid, repeat the question
    if (input < 8 || input > 128 || isNaN(input)) {
      alert("Please enter a valid number");
    } else {
      typeCheck = true;
    }
  }
  return input;
};

//Function that asks user to indicate which characters they would like to use
var getCharType = function () {
  lowercaseCheck = confirm("Click okay to include lowercase letters");

  uppercaseCheck = confirm("Click okay to include uppercase letters");

  numericCheck = confirm("Click okay to include numbers");

  specialCheck = confirm("Click okay to include special characters");

  // Checks to make sure at least one character type has been selected
  if (!lowercaseCheck && !uppercaseCheck && !numericCheck && !specialCheck) {
    alert("Please enter at least one character type");
    getCharType();
  }
};

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
