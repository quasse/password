// Assignment code here

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

  // Array to store password characters
  var password = [];

  var length = prompt(
    "How long would you like your password (between 8 and 128 characters)?"
  );

  // Function to get character types for password
  getUserInput();

  //Ask user for character types

  // Booleans to check for character types in the password
  var lowercaseConfirm = false;
  var uppercaseConfirm = false;
  var numericConfirm = false;
  var specialConfirm = false;

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
      i--;
    }

    //Depending on character's 1-4 value, add a certain character to the password array
    // switch (character) {
    //   case 1:
    //     // check if the user has indicated they would like this character type included
    //     if (lowercaseCheck) {
    //       // Notify that character type has been added to password
    //       lowercaseConfirm = true;
    //       // Select random item from appropriate character array and add it to the password array
    //       password[i] = lowercase[Math.floor(Math.random() * lowercase.length)];
    //       break;
    //     } else {
    //       // Otherwise, repeat
    //       i--;
    //       break;
    //     }
    //   case 2:
    //     if (uppercaseCheck) {
    //       uppercaseConfirm = true;
    //       password[i] = uppercase[Math.floor(Math.random() * uppercase.length)];
    //       break;
    //     } else {
    //       i--;
    //       break;
    //     }
    //   case 3:
    //     if (numericCheck) {
    //       numericConfirm = true;
    //       password[i] = numeric[Math.floor(Math.random() * numeric.length)];
    //       break;
    //     } else {
    //       i--;
    //       break;
    //     }
    //   case 4:
    //     if (specialCheck) {
    //       specialConfirm = true;
    //       password[i] = special[Math.floor(Math.random() * special.length)];
    //       break;
    //     } else {
    //       i--;
    //       break;
    //     }
    // }
  }

  // Check to make sure all confirmed characters have been added to password
  if (lowercaseCheck) {
    //if lowercaseConfirm is still false, it means the character type has not been added
    if (!lowercaseConfirm) {
      //So add one random character of that typeto the password array in a random place
      password[Math.floor(Math.random() * password.length)] = Math.floor(
        Math.random() * lowercase.length
      );
    }
  }
  if (uppercaseCheck) {
    if (!uppercaseConfirm) {
      //To do
    }
  }

  // Return the array as a string
  return password.join("");
}

//Function that asks user to indicate which characters they would like to use
var getUserInput = function () {
  lowercaseCheck = confirm("Click okay to include lowercase letters");

  uppercaseCheck = confirm("Click okay to include uppercase letters");

  numericCheck = confirm("Click okay to include numbers");

  specialCheck = confirm("Click okay to include special characters");

  // Checks to make sure at least one character type has been selected
  if (!lowercaseCheck && !uppercaseCheck && !numericCheck && !specialCheck) {
    alert("Please enter at least one character type");
    getUserInput();
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
