//Assignment Code

    var generateBtn = document.querySelector("#generate");

   

    var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharArray = ["#","@", "$", "%", "!", "^", "&", "*", ",", "-", "_", "=", "+", "/", ">", "<", ":", ";"]; // remember to go back and add more characters //
  
    
   


    function generatePassword() {
    


    var finalArray = []


    var passwordLength = choosePasswodLength("How many characters (from 8 to 128) would you like the password to be?");
    var charSelected = false;
   
   
    while (charSelected = false) {



    var lowerCase = charChoice ("lower case");
    var upperCase = charChoice ("UPPER CASE");

    var numChar = charChoice ("number");
    var specialChar = charChoice ("special");

    if (lowerCase || upperCase || numChar || specialChar) {
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
if(specialChar) {
    finalArray = finalArray.concat(specialCharArray)
}

var passwordString = "";

for (var i = 0; i < passwordLength; i++) {

passwordString = finalArray[Math.floor(Math.random() * (finalArray.length))];

}

return passwordString;
  }


    function choosePasswodLength() {

        var userselect = 0;

        while ((userselect <8) || (userselect < 128)) {
            userselect =parseInt (window.prompt("Plase select your passord length (8 -28 characters)."));
        
            if(isNaN(userselect)) {
                userselect=0
            }
   
   
    }
   
    return userselect;
}

//Write password to the #password imput
    function writePassword () {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
        passwordText.value = password; }


 // Add event listener to generate button

 generateBtn.addEventListener("click", writePassword);
  





  