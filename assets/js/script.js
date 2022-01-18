// Characters
var lowerKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperKeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialKeys = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Button linking to id = generate
var generateBtn = document.querySelector("#generate");

// function to prompt password length and set options as an object
function passwordGen() {
    var length = prompt("Choose password length, must be between 8 - 128 characters.");
    
    if (length >= 8 && length <= 128) {
        window.alert("Your password will be " + length + " characters!")
    } else {
        window.alert("Password must be 8 - 128 characters.");
        lengthPrompt();
    }
    // options object to house password variables
    var options = {
        length: length,
        lower: beLowercase,
        upper: beUppercase,
        number: beNumbers,
        special: beSpecialCharacters 
      }

        return options;

    
}

// Prompts for password criteria
var beLowercase = confirm("Accept lowercase keys?");
console.log(lowerKeys);

var beUppercase = confirm("Accept upper keys?");
console.log(upperKeys);

var beNumbers = confirm("Accept number keys?");
console.log(numberKeys);

var beSpecialCharacters = confirm("Accept special characters? ie: !@#$%^&*(){}[]");
console.log(specialKeys);

// If none are selected
if(!beLowercase && !beUppercase && !beNumbers && !beSpecialCharacters) {
    alert("Your password must have one type!")
    
}

// Prompts for length and enters values for criteria into options Object
var options = passwordGen();

  // function to generate a random password
  function generatePassword() {
      
      // empty array to contain all characters
      var space = [];
      
      // if options.lower is true,
      if (options.lower) {
          // add lowerKeys[i] to space array
          for (i = 0; i < lowerKeys.length; i++) {
              space.push(lowerKeys[i]);
          }
      }
      // if options.upper is true,
      if (options.upper) {
          // add upperKeys[i] to space array
          for (i = 0; i < upperKeys.length; i++) {
              space.push(upperKeys[i]);
          }
      }
      // if options.number is true,
      if (options.number) {
          // add numberKeys[i] to space array
          for (i = 0; i < numberKeys.length; i++) {
              space.push(numberKeys[i]);
          }
      }
      // if options.special is true,
      if (options.special) {
          // add specialKeys[i] to space array
          for (i = 0; i < specialKeys.length; i++) {
              space.push(specialKeys[i]);
          }
      } 

      // Empty string to contain the randomized password
      var final = "";

      // Random characters from space array are added into final variable as a string to present
      for (var i = 0; i < options.length; i++) {
          final += space[Math.floor(Math.random() * space.length)];
        }
        // generatePassword() returns a string in the final variable
        return final; 
  }



  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
