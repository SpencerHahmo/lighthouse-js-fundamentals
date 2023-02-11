const urlEncode = function(text) {
  //Declares variables
  //trimmedText becomes the inputted string after removing any spaces before the first instance of text and after the last instance of text
  let trimmedText = text.trim();
  let urlString = "";

  /*
  Replaces each instance of a space with %20 then saves that to both trimmedText and urlString
  to avoid only the first instance of a space getting changed
  */
  for (let i = 0; i < trimmedText.length; i++) {
    trimmedText = trimmedText.replace(" ", "%20");
    urlString = trimmedText;
  }

  /*
  Returns the string with all spaces replaced with %20
  (exlcuding any spaces before the first instance of text, and any spaces after the last instance of text)
  */
  return urlString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));