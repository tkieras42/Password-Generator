// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = Array.of("a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var upperCase = Array.of("A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z");
var numericValue = Array.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
var specialChar = Array.of("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~");
var selectedTypes = Array.of();

// function to make the random number
function generateNumber(max){
  return Math.floor(Math.random() * max);
}

// function to give peramiters to a random number. Pass through true or false.
function genRndNumb(upper, lower, numeric, special){
  var rndCount = 0
  if(upper === true){
    upperCase.length += rndCount;
  }
  if(lower === true){
    lowerCase.length += rndCount;
  }
  if(numeric === true){
    numeric.length += rndCount;
  }
  if(special === true){
    special.length += rndCount;
  }
  var rndNumb = generateNumber(rndCount);
  return(rndNumb);
}

// function to create an array out of the selected character types
function addSelectedCharacters(selectUpper, selectLower, selectNumb, selectSpecial){
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

// testing
var num = genRndNumb(true, true, true, true);
console.log(num)


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
