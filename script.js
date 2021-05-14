// Assignment code here
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

  //Checking for character types
  var lowercaseCheck = confirm("Click okay to include lowercase letters");

  var uppercaseCheck = confirm("Click okay to include uppercase letters");

  var numericCheck = confirm("Click okay to include numbers");

  var specialCheck = confirm("Click okay to include special characters");

  // Booleans to check for character types in the password
  var lowercaseConfirm = false;
  var uppercaseConfirm = false;
  var numericConfirm = false;
  var specialConfirm = false;

  //Fill in password with characters using for loop
  for (i = 0; i < length; i++) {
    //Select character randomly
    var character = Math.round(Math.random() * (4 - 1) + 1);

    //Depending on variable's 1-4 value, add a certain character to the password array
    switch (character) {
      case 1:
        if (lowercaseCheck) {
          // Notify that character type has been added to password
          lowercaseConfirm = true;
          // Select random item from appropriate character array and add it to the password array
          password[i] = lowercase[Math.floor(Math.random() * lowercase.length)];
          break;
        } else {
          // Otherwise, repeat
          i--;
          break;
        }
      case 2:
        if (uppercaseCheck) {
          uppercaseConfirm = true;
          password[i] = uppercase[Math.floor(Math.random() * uppercase.length)];
          break;
        } else {
          i--;
          break;
        }
      case 3:
        if (numericCheck) {
          numericConfirm = true;
          password[i] = numeric[Math.floor(Math.random() * numeric.length)];
          break;
        } else {
          i--;
          break;
        }
      case 4:
        if (specialCheck) {
          specialConfirm = true;
          password[i] = special[Math.floor(Math.random() * special.length)];
          break;
        } else {
          i--;
          break;
        }
    }
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
