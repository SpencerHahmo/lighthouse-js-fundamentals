const sayHello1 = () => {
  console.log("Hello, world");
};
sayHello1();

const sayHello2 = (name) => {
  console.log("Hello, " + name);
};
sayHello2("Caliban");
sayHello2("Miranda");
sayHello2("Ferdinand");

const sayHelloToConsole = (name) => {
  console.log("Hello, " + name);
};
sayHelloToConsole('John');

const returnSayHello = (name) => {
  return "Hello, " + name;
};
const greeting = returnSayHello('John');
console.log(greeting);