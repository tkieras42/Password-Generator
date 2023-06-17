// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = [a, b, c, d, e, f, g, h, i, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var upperCase = [A, B, C, D, E, F, G, H, I, K, L, M, N, O, P, Q, R, S, T, W, X, Y, Z];
var numericValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

// function to make the random number
function generateNumber(max){
  return Math.floor(Math.random() * max);
}

// function to give peramiters to a random number. Pass through array or null into each
function genRndNumb(upper, lower, numeric, special){
  var rndCount = 0
  if(upper.isarray){
    upperCase.length += rndCount;
  }
  if(lower.isarray){
    lowerCase.length += rndCount;
  }
  if(numeric.isarray){
    numeric.length += rndCount;
  }
  if(special.isarray){
    special.length += rndCount;
  }
  var rndNumb = generateNumber(rndCount);
  return(rndNumb);
}

// function to create an array out of the selected character types
function selectedCharacters(selectUpper, selectLower, selectNumb, selectSpecial){
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
