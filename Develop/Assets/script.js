// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Placeholder text displayed in display box
document.getElementById(placeholder).value = password;

// Generating the Password
function generatePassword() {

  var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

  //Prompting for character type
  var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");

  //Defining character types
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if (charTypeLower === "lowercase") {
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if (charTypeLower === "uppercase") {
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (charTypeLower === "numeric") {
    charSet = "0123456789";
  } else if (charTypeLower === "special") {
    charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  //Return value of generated password at random
  var retVal = "";
  for (var i = 0; i < length; i++) {
    //Chooses the character at random from the index of the array
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;

}

//Displaying the Generated Password within the Display Box
document.getElementById("password").value = password;
