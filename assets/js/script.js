// Available keys
var availableKeys = "";
var lowerKeys = "abcdefghijklmnopqrstuvwxyz";
var upperKeys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberKeys = "0123456789";
var specialKeys = "!@#$%^&*(){}[]"
// Set variables

var length = true;
var lowercase = true;
var uppercase = true;
var numbers = true;
var specialCharacters = true;

// Function to prompt user for length

  var lengthPrompt = function() {
      length = window.prompt("Choose password length, must be between 8 - 128 characters.");
      if (length >= 8 && length <= 128) {
        true;
      } else {
        window.alert("Password must be 8 - 128 characters.");
        lengthPrompt();
      }
  }
      
// Prompts for all password criteria


  var passwordCriteria = function() {

    // Password length 8 < 128
    lengthPrompt(); 

    // lowercase, uppercase, numbers, special characters

    lowercase = window.confirm("Accept lowercase keys?");
      console.log(lowercase);

    uppercase = window.confirm("Accept upper keys?");
      console.log(uppercase);

    number = window.confirm("Accept number keys?");
      console.log(numbers);

    specialCharacters = window.confirm("Accept special characters? ie: !@#$%^&*(){}[]");
      console.log(specialCharacters);

  };

  console.log(passwordCriteria());
  // 2. Validate the input
  var generatePassword = function() {
  // 3. Generate password based on criteria


  // 4. Display generated password
  return "Generated password goes here"
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
