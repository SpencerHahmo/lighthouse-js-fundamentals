const sumLargestNumbers = function(data) {
  let largestNumbers = []; //Array for the largest 2 numbers
  let numberDump = []; //Array that stores all the other values for numbers if the array being entered has more than 2 values
  
  //If the array being entered has only 2 numbers, it adds them both to the largestNumber array before adding them together and returning that value
  if (data.length === 2) {
    largestNumbers.push(data[0]);
    largestNumbers.push(data[1]);
    return largestNumbers[0] + largestNumbers[1];
  } else if (data.length > 2) {
    //If the array being entered has 3 or more numbers
    //Adds the first 2 values to the largestNumbers array
    largestNumbers.push(data[0]);
    largestNumbers.push(data[1]);

    //Adds the rest of the values to the numberDump array
    for (let i = 2; i < data.length; i++) {
      numberDump.push(data[i]);
    }

    /*
    Checks to see the values stored in the first and second elements of the largestNumbers array.
    
    If the value in the first element is less than the element at the index of i in numberDump and the second element of largestNumbers
    it splices that value and replaces it with the value of the array at the element at the index of i

    or

    If the value in the second element is less than the element at the index of i in numberDump and the first element of largestNumbers
    and if so it splices that value and replaces it with the value of the array at the element at the index of i
    */
    for (let i = 0; i < numberDump.length; i++) {
      if (largestNumbers[0] < numberDump[i] && largestNumbers[0] < largestNumbers[1]) largestNumbers.splice(0, 1, numberDump[i]);
      else if (largestNumbers[1] < numberDump[i] && largestNumbers[1] < largestNumbers[0]) largestNumbers.splice(1, 1, numberDump[i]);
    }
    //Adds and returns the 2 values being stored in largestNumbers
    return largestNumbers[0] + largestNumbers[1];
  } else if (data.length < 2) return "You Have Entered an Invalid Array";
  //If the array being entered has less than 2 numbers, it tells the user they have entered an Invalid array
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([10]));
console.log(sumLargestNumbers([]));