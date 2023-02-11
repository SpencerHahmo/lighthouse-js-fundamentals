const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let w = 0;
while (w < ingredients.length) {
  console.log(ingredients[w]);
  w++; //Increments w after running through the loop to avoid missing the first ingredient
}
console.log("");
//Uncomment the line above to get a space inbetween the different loops

// Write a for loop that prints out the contents of ingredients:
for (let f = 0; f < ingredients.length; f++) {
  console.log(ingredients[f]);
}
console.log("");
//Uncomment the line above to get a space inbetween the different loops

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let r = ingredients.length - 1; r >= 0; r--) {
  console.log(ingredients[r]);
}