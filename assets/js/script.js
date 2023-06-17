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
function selectedTypeArrayLength(upper, lower, numeric, special){
  var lengthCount = 0
  if(upper === true){
    lengthCount += upperCase.length;
  }
  if(lower === true){
    lengthCount += lowerCase.length;
  }
  if(numeric === true){
    lengthCount += numericValue.length;
  }
  if(special === true){
    lengthCount += specialChar.length;
  }
  return(lengthCount);
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

// Function to generate the password. acsepts (passwordLength, )
function generatePassword(desiredLength, combinedArrayLength, selectUpper, selectLower, selectNumb, selectSpecial){
  var wordArray = [];
  var rn = 0;
  var a = 0;
  var b = 0;
  var c = 0;
  var d = 0;

  for(i = 0; i < desiredLength; i++){
    if(a < 2  && selectUpper === true){
      rn = generateNumber(upperCase.length);
      wordArray.push(upperCase.at(rn)); 
      a++;
    }      
    else if(b < 2 && selectLower === true){
      rn = generateNumber(lowerCase.length);
      wordArray.push(lowerCase.at(rn)); 
      b++;
    }      
    else if(c < 2 && selectNumb === true){
      rn = generateNumber(numericValue.length);
      wordArray.push(numericValue.at(rn));
      c++; 
   }      
    else if(d < 2 && selectSpecial === true){
      rn = generateNumber(specialChar.length);
      wordArray.push(specialChar.at(rn));
      d++; 
    }
    else {
      rn = generateNumber(combinedArrayLength);
      wordArray.push(combArray.at(rn));
    }
  }
  return wordArray.join("");  
}



// testing run addSelectedCharacterTypes and selectedTypeArrayLength functions first, once you have the pass through values. Then run generate password.
var num = selectedTypeArrayLength(true, true, true, true);
console.log(num);
var combArray = addSelectedCharacters(true, true, true, true);
console.log(combArray);
var word = generatePassword(8, num, true, true, true, true);
console.log(word);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
