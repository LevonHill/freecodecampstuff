//

// Step 1: Declare a variable `num` between 1 and 20
let num = 7;

// Step 2: Create a function that calculates the factorial of a number
function factorialCalculator(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Step 3: Call the function with `num` and assign it to `factorial`
let factorial = factorialCalculator(num);

// Step 4: Create the result message
let resultMsg = `Factorial of ${num} is ${factorial}`;

// Step 5: Output the message to the console
console.log(resultMsg);



//🧠 Breakdown of key concepts:
//let num = 7 → Stores your number.

//for (let i = 1; i <= n; i++) → Loops from 1 to n, multiplying the result each time.

//Template literals `Factorial of ${num} is ${factorial}` → Used for cleaner string formatting.