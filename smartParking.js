const whereCanIPark = (spots, vehicle) => {

  //Goes through the entire array
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {

      //Stores the value at spots[y][x] for ease of access ()
      const spot = spots[y][x];

      /*
      If the user is looking for a spot where a regular vehicle can park
      The program will return the first available location that allows a regular vehicle to park
      */
      if (vehicle === 'regular') if (spot === 'R') return [x, y];
      
      /*
      If the user is looking for a spot where a small vehicle can park
      The program will return the first available location that allows a small vehicle to park
      */
      else if (vehicle === 'small') if (spot === 'R' || spot === 'S') return [x, y];

      /*
      If the user is looking for a spot where a motorcycle can park
      The program will return the first available location that allows a motorcycle to park
      */
      else if (vehicle === 'motorcycle') if (spot === 'R' || spot === 'S' || spot === 'M') return [x, y];
    }
  }
  
  //If there are no open spots available for the vehicle type, the progran will return false
  return false;
};


console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3
    ['M', 'M', 'M', 'M'], // 0 ROWS ARE Y
    ['M', 's', 'M', 'M'], // 1
    ['M', 'M', 'M', 'M'], // 2
    ['M', 'M', 'r', 'M']  // 3
  ],
  'small'
));

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 's', 's', 's'], // 0 ROWS ARE Y
    ['s', 'm', 's', 'S', 'r', 's'], // 1
    ['s', 'm', 's', 'S', 'r', 's'], // 2
    ['S', 'r', 's', 'm', 'r', 's'], // 3
    ['S', 'r', 's', 'm', 'R', 's'], // 4
    ['S', 'r', 'S', 'M', 'm', 'S']  // 5
  ],
  'motorcycle'
));