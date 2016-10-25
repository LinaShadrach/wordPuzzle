var vowels = ["a", "e", "i", "o", "u"];
var vowelsToDash = function(userInput){
  var dashes = [];
  for (var i = 0; i < userInput.length; i++){
    if (vowelCheck(userInput.charAt(i), vowels)) {
      dashes.push("-");
    }
    else {
      dashes.push(userInput.charAt(i));
    }
  }
  return resultString(dashes);
};


var vowelCheck = function(letter, vowelArray){
  var check = false;
  vowelArray.forEach(function(vowel) {
    if(vowel === letter) {
      check = true;
    }
  });
  return check;
};

var resultString = function(arr) {
  var result = "";
  arr.forEach(function(char) {
    result+=char;
  });
  return result;
}

console.log(vowelsToDash("hello there"));
