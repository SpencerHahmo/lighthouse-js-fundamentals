const conditionalSum = function(values, condition) {
  //If the array being entered has no values in it, returns 0
  if (values.length === 0) return 0;

  //Declares variables
  let i = 0;
  let total = 0;

  //While i is less then the length of the array being entered it will go through each value and add them
  while (i < values.length) {

    //If the condition being entered is "even" and the variable is fully divisible by 2
    //The value of values[i] gets added to total
    if (condition === "even" && values[i] % 2 === 0) total += values[i];
    
    //If the condition being entered is "odd" and the variable is not fully divisible by 2
    //The value of values[i] gets added to total
    else if (condition === "odd" && values[i] % 2 === 1) total += values[i];

    //Increments i so the program doesn't loop forever
    i++;
  }

  //Returns the value of total
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));