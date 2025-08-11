//In this lab, you will design a sum all numbers algorithm. This algorithm takes an array of two numbers and returns the sum of those two numbers plus the sum of all the numbers between them.


function sumAll([n, m]) {
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

// Example usage:
console.log(sumAll([4, 1])); // Output: 10
console.log(sumAll([1, 4])); // Output: 10
console.log(sumAll([5, 5])); // Output: 5
