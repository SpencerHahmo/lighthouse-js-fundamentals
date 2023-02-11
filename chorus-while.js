const chorus1 = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  console.log(chorus1);
  repeat++;
}
console.log("Until the sun comes up!");


const chorus2 = "Let's dance!";
repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus2);
  repeat++;
}
console.log("Until the sun comes up!");