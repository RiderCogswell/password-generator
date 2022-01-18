// 
var lowerkeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperkeys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberkeys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Specialkeys = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

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

    var options = {
        length: length,
        lower: beLowercase,
        upper: beUppercase,
        number: beNumbers,
        special: beSpecialCharacters 
      }

        return options;
}

var beLowercase = confirm("Accept lowercase keys?");
console.log(lowerkeys);

var beUppercase = confirm("Accept upper keys?");
console.log(upperkeys);

var beNumbers = confirm("Accept number keys?");
console.log(numberkeys);

var beSpecialCharacters = confirm("Accept special characters? ie: !@#$%^&*(){}[]");
console.log(Specialkeys);

if(!beLowercase && !beUppercase && !beNumbers && !beSpecialCharacters) {
    alert("Your password must have one type!")
    
}

var options = passwordGen();

    function generatePassword() {
        
        var space = [];

        if (options.lower) {
            for (i = 0; i < lowerkeys.length; ++i) {
                space.push(lowerkeys[i]);
            }
        }
        if (options.upper) {
            for (i = 0; i < upperkeys.length; ++i) {
                space.push(upperkeys[i]);
            }
        }
        if (options.number) {
            for (i = 0; i < numberkeys.length; ++i) {
                space.push(numberkeys[i]);
            }
        }
        if (options.special) {
            for (i = 0; i < Specialkeys.length; ++i) {
                space.push(Specialkeys[i]);
            }
        }  
        var final = "";

        for(var i = 0; i < options.length; i++) {
            final += space[Math.floor(Math.random() * space.length)];
          }
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
