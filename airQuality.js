const checkAir = function(samples, threshold) {
  
  //Declare variables
  let dirtySamples = 0;

  //Goes through the entire array and when a dirty sample shows up the dirtySamples variable gets incremented
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtySamples++;
    }
  }

  //If the value threshold is less than dirtySamples/samples.length the program returns Polluted, otherwise it returns clean
  if (threshold < dirtySamples / samples.length) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));