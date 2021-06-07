  
    function generatePassword() {

    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharArray = ["#","@", "$", "%", "!", "^", "&", "*", ",", "-", "_", "=", "+", "/", ">", "<", ":", ";"]; // remember to go back and add more characters //
  
    var finalArray = []

    var passwordLength = choosePasswordLength();
    var charSelected = false;
   
   
    while (charSelected == false) {

    var lowerCase = charChoice ("lower case");
    var upperCase = charChoice ("UPPER CASE");
    var numChar = charChoice ("number");
    var specialChar = charChoice ("special");

    if ((lowerCase) || (upperCase) || (numChar) || (specialChar)) {
        charSelected = true; }
        else { window.alert("Please choose at least one character type to continue.")
    }
  
    }

    if (lowerCase)
    {
        finalArray = finalArray.concat(lowerCaseArray)
    }
    if (upperCase)
{
    finalArray = finalArray.concat(upperCaseArray)
}
    if (numChar){
finalArray = finalArray.concat(numCharArray)
}
if (specialChar) {
    finalArray = finalArray.concat(specialCharArray)
}

var passwordString = "string";

for (var i = 0; i < passwordLength; i++) {

passwordString += finalArray[Math.floor(Math.random() * (finalArray.length))];

}

return passwordString;
  }


    function choosePasswordLength() {

        var userSelect = 0;

        while ((userSelect <= 8) || (userSelect >= 128)) {
            userSelect = parseInt(window.prompt("Please select your password length (8-128 characters)."));
        
            if(isNaN(userSelect)) {
                userSelect=0;
            }
   
   
    }
   
    return userSelect;
}

function charChoice(choiceNow) {
    var userSelect = "string";
    windowQuestion = "string";
    var windowQuestion = ("Would you like ".concat(choiceNow))
    var windowQuestion = windowQuestion.concat(" characters? Please type 'yes' or no.'");
while (userSelect = "string"){

    userSelect = (window.prompt(windowQuestion));

    userSelect = userSelect.toLowerCase();

    if(userSelect === "yes") {
        return true;
    }
else if (userSelect === "no") {
    return false;
}

}
}


var generateBtn = document.querySelector("#generate");


//Write password to the #password imput
    function writePassword () {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password; }


 // Add event listener to generate button

 generateBtn.addEventListener("click", writePassword);
  





  