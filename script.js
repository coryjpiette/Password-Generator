
function generatePassword () {


    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numCharactersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharactersArray = ["#","@", "$", "%", "!", "^", "&", "*", ",", "-", "_", "=", "+", "/"];
  
    
    
    var finalArray = []

    var passwordLength = choosePasswodLength("How many characters (from 8 to 128) would you like the password to be?");
    var lowerCase = choice ("Do you want to include lower case letters?")
    var upperCase = choice ("Do you want to include upper case letters?")
    var numCharacters = choice ("Do you want to include numbers?")
    var specialCharacters = choice ("Do you want to include special characters?")
  
  


  }
  



