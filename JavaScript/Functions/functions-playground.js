console.log("===== 1. FUNCTION DECLARATION =====");
function greet() {
  console.log("Hello from a function declaration!");
}
greet(); // ✅ Works even if called before definition because it's hoisted


console.log("\n===== 2. FUNCTION EXPRESSION =====");
const sayHi = function() {
  console.log("Hi from a function expression!");
};
sayHi(); // ✅ Must be defined before it's called


console.log("\n===== 3. ARROW FUNCTION =====");
const add = (a, b) => a + b;
console.log("2 + 3 =", add(2, 3)); // ✅ Short syntax, no 'this'


console.log("\n===== 4. ANONYMOUS FUNCTION =====");
setTimeout(function() {
  console.log("I'm an anonymous function inside setTimeout!");
}, 1000); // ✅ No name, used as callback


console.log("\n===== 5. NAMED FUNCTION EXPRESSION =====");
const shout = function shoutName() {
  console.log("This is a named function expression.");
};
shout();
// console.log(shoutName); ❌ ReferenceError: shoutName is not defined outside


console.log("\n===== 6. HIGHER-ORDER FUNCTION =====");
function doTwice(fn) {
  fn();
  fn();
}
doTwice(() => console.log("Called inside higher-order function!"));


console.log("\n===== 7. CALLBACK FUNCTION =====");
function fetchData(callback) {
  console.log("Simulating fetch...");
  callback("Data loaded!");
}
fetchData((msg) => console.log("Callback says:", msg));


console.log("\n===== 8. CURRYING =====");
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const triple = multiply(3);
console.log("3 x 4 =", triple(4)); // 12


console.log("\n===== 9. IIFE (Immediately Invoked Function Expression) =====");
(function() {
  console.log("This IIFE ran immediately!");
})();


console.log("\n===== 10. CONSTRUCTOR FUNCTION =====");
function Person(name) {
  this.name = name;
  this.sayName = function() {
    console.log("My name is", this.name);
  };
}
const user = new Person("Levon");
user.sayName(); // My name is Levon


console.log("\n===== 11. GENERATOR FUNCTION =====");
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator();
console.log("ID:", gen.next().value); // 1
console.log("ID:", gen.next().value); // 2


console.log("\n===== 12. ASYNC FUNCTION =====");
async function asyncExample() {
  console.log("Start async function...");
  const result = await new Promise((resolve) => setTimeout(() => resolve("Async done!"), 1000));
  console.log(result);
}
asyncExample();
