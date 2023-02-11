const instructorWithLongestName = function(instructors) {
  //Declare variables
  let longestLength = 0;
  let longestLengthIndex = 0;

  /*
  Goes through each array and stores the value of the individual with the longest name length
  If there are two instructors with the longest name, it will only store the value of the first one and will only return the first one
  */
  for (let i = 0; i < instructors.length; i++) {
    if ((instructors[i].name).length > longestLength) {
      longestLength = (instructors[i].name).length;
      longestLengthIndex = i;
    }
  }
  
  //Returns the instructor with the longest name along with their course
  return instructors[longestLengthIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
/*
Sample done with two instructors with the same length name
console.log(instructorWithLongestName([
  {name: "David", course: "iOS"},
  {name: "Samuel", course: "iOS"},
  {name: "Donald", course: "Web"}
]));
*/