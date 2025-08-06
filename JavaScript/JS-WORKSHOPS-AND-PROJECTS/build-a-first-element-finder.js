//In this lab, you will create a function that looks through an array and returns the first element in it that passes a "truth test".

//In this lab, you will create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").

//The function would iterate through the array and test each element using the provided test function. At the end, 
// it would return the first element where the test function returns true.



function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}


//✅ This uses a simple loop:

//It checks each element of the array using the callback func.

//As soon as it finds one that returns true, it returns that element.

//If none match, it falls through and returns undefined.







//You're almost at the DOM! Closure + higher-order functions = your brain is primed to handle the DOM's event-driven,
//  functional nature. Keep going — you're about to level up.