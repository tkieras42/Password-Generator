// Element Assignments 
var generateBtn = document.querySelector("#generate");
var copyClip = document.getElementById("copy")

// Arrays with potential content of passwordsw
var lowerCase = Array.of("a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var upperCase = Array.of("A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z");
var numericValue = Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var specialChar = Array.of("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~");

// check box booleans
var selectUpper = false;
var selectLower = false;
var selectNumb = false;
var selectSpecial = false;
// desired password length
var passwordLength = 8

// used in questionBox function
// var qCheck = 0

// Function to make the random number
function generateNumber(max){
  return Math.floor(Math.random() * max);
}
// Function to give peramiters to a random number. Pass through true or false.
function findTypeArrayLength(){
  var lengthCount = 0
  if(selectUpper === true){
    lengthCount += upperCase.length;
  }
  if(selectLower=== true){
    lengthCount += lowerCase.length;
  }
  if(selectNumb === true){
    lengthCount += numericValue.length;
  }
  if(selectSpecial === true){
    lengthCount += specialChar.length;
  }
  return(lengthCount);
}
// Function to create an array out of the selected character types
function addSelectedCharacters(){
  var allTypes = Array.of();
  if(selectUpper === true){
    allTypes.push.apply(allTypes, upperCase);
  }
  if(selectLower === true){
    allTypes.push.apply(allTypes, lowerCase);
  }
  if(selectNumb === true){
    allTypes.push.apply(allTypes, numericValue);
  }
  if(selectSpecial === true){
    allTypes.push.apply(allTypes, specialChar);
  }
  return allTypes;
}
// Function to generate the password. (number, number, bool, bool, bool, bool)
function generatePassword(desiredLength, combinedArrayLength, selectUpper, selectLower, selectNumb, selectSpecial){
  var wordArray = [];
  var rn = 0;
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;

  for(i = 0; i < desiredLength; i++){
    if(i === 3 && selectLower === true){
      rn = generateNumber(lowerCase.length);
      wordArray.push(lowerCase.at(rn)); 
      b++;
    }      
    else if(i === 5  && selectUpper === true){
      rn = generateNumber(upperCase.length);
      wordArray.push(upperCase.at(rn)); 
      a++;
    }      
    else if(i === 6 && selectNumb === true){
      rn = generateNumber(numericValue.length);
      wordArray.push(numericValue.at(rn));
      c++; 
    }      
    else if(i === 7 && selectSpecial === true){
      rn = generateNumber(specialChar.length);
      wordArray.push(specialChar.at(rn));
      d++; 
    }
    else {
      rn = generateNumber(combinedArrayLength);
      wordArray.push(selectedTypes.at(rn));
    }
  }
  return wordArray.join("");  
}

// Function to write password to the #password input
function writePassword() {
  selectedTypes = addSelectedCharacters();
  var selectedTypeArrayLength = findTypeArrayLength();
 
  var password = generatePassword(passwordLength, selectedTypeArrayLength, selectUpper, selectLower, selectNumb, selectSpecial);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Function to get promts from user
function getUserData(){
  // prompt for password length
  for(x = true; x === true; x){
    for(i = true; i === true; i){
      var usernumberData = prompt("How long would you like your password to be? (8-128)", "Enter Number Here!");
      var userNumberConverted = parseInt(usernumberData, 10);
      if(typeof userNumberConverted === "number" && userNumberConverted >= 8 && userNumberConverted <= 128){
        passwordLength = userNumberConverted;
        alert("You have selected a length of " + passwordLength);
        i = false;
      }
      else{        
        alert("Error: Please enter a valid number");
      }    
    }
  // prompt to include ipper case letters
    for(i = true; i === true; i){
      var userData = prompt("Would you like UPPER CASE letters in your password?", "'YES' or 'NO'");
      var userDataConverted = userData.toLowerCase(); 
      if(userDataConverted === "yes"){
        selectUpper = true;
        alert("Upper case letters will be added to your password!");
        i = false;
      }
      else if(userDataConverted === "no"){
        selectUpper = false;
        alert("Upper case letters will NOT be added to your password!");
        i = false;
      }
      else{      
        alert("Error: Please enter 'YES' or 'NO'");
      }
    
    }
  // prompt to include Lower case letters
    for(i = true; i === true; i){
      var userData = prompt("Would you like LOWER CASE letters in your password?", "'YES' or 'NO'");
      var userDataConverted = userData.toLowerCase(); 
      if(userDataConverted === "yes"){
        selectLower = true;
        alert("Lower case letters will be added to your password!");
        i = false;
      }
      else if(userDataConverted === "no"){
        selectLower = false;
        alert("Lower case letters will NOT be added to your password!");
        i = false;
      }
      else{      
        alert("Error: Please enter 'YES' or 'NO'");
      }
    }
    // prompt to include numbers
    for(i = true; i === true; i){
      var userData = prompt("Would you like NUMBERS in your password?", "'YES' or 'NO'");
      var userDataConverted = userData.toLowerCase(); 
      if(userDataConverted === "yes"){
        selectNumb = true;
        alert("Numbers will be added to your password!");
        i = false;
      }
      else if(userDataConverted === "no"){
        selectNumb = false;
        alert("Numbers will NOT be added to your password!");
        i = false;
      }
      else{      
        alert("Error: Please enter 'YES' or 'NO'");
      }
    } 
    // prompt to include special characters
    for(i = true; i === true; i){
      var userData = prompt("Would you like SPESIAL CHARACTERS in your password?", "'YES' or 'NO'");
      var userDataConverted = userData.toLowerCase(); 
      if(userDataConverted === "yes"){
        selectSpecial = true;
        alert("Special characters will be added to your password!");
        i = false;
      }
      else if(userDataConverted === "no"){
        selectSpecial = false;
        alert("Special characters will NOT be added to your password!");
        i = false;
      }
      else{      
        alert("Error: Please enter 'YES' or 'NO'");
      }
    } 
    if(selectUpper === false && selectLower === false && selectNumb === false && selectSpecial === false){
      alert("NO CHARACTER TYPE SELECTED! PLEASE SELCET AT LEAST ONE TYPE")
    }
    else{
      x = false;
    }
  }     
  // generates and writes password to .card
  writePassword(); 
  // change card bacckground to pink
  var cardColor = document.querySelector(".card-body");
  cardColor.children[0].setAttribute("style", "background-color: pink");
  // adds copy to clipborad button
  createCopyBtn();
}

// adds copy to clip board button
function createCopyBtn(){
  var copyBtn = document.createElement("button");
  var copyButton = document.getElementById("copy")
  copyButton.appendChild(copyBtn);
  copyBtn.setAttribute("class", "btn2");
  copyBtn.textContent = "Copy to Clipboard!";
}

// copies text from text-area id = password
function copyToClip(){
  var copiedText = document.getElementById("password");
  copiedText.select();
  navigator.clipboard.writeText(copiedText.value);
  alert("Password Copied to Clipboard!")
}
// Add event listener to generate button
generateBtn.addEventListener("click", getUserData);
copyClip.addEventListener("click", copyToClip);

