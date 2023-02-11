const numberOfVowels = function(data) {
  //Declares variable
  let vowelNumber = 0;
  
  /*
  Goes through each character from what's being inputed and checks to see if it's a vowel or not
  If it is, vowelNumber gets incremented
  */
  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) === 'a' || data.charAt(i) === 'e' || data.charAt(i) === 'i' || data.charAt(i) === 'o' || data.charAt(i) === 'u') {
      vowelNumber++;
    }
  }

  //Returns the value of vowelNumber
  return vowelNumber;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));