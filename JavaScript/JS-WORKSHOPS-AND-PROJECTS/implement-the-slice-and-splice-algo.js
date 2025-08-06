// In this lab, you will practice merging an array with another.

//in this lab, you will need to create an algorithm to merge two arrays.

//Fulfill the user stories below and get all the tests to pass to complete the lab.

//User Stories:

//Create a frankenSplice function that accepts two arrays and an index.
//Copy each element of the first array into the second array, in order, beginning at the given index, and return the resulting array.
//The input arrays should remain the same after the function runs.

//You're working on a common coding challenge known as "FrankenSplice" — a great practice for learning how to work with arrays without mutating the original ones.



function frankenSplice(arr1, arr2, n) {
  // Make a shallow copy of arr2 to avoid mutation
  let result = arr2.slice();

  // Use splice to insert arr1 into the copy of arr2 at index n
  result.splice(n, 0, ...arr1);

  return result;
}


//🧠 Explanation:
//arr2.slice() → copies arr2 so the original isn't changed.

//result.splice(n, 0, ...arr1) → inserts every element of arr1 starting at position n in the copied array.

//...arr1 is the spread operator — it spreads each value in arr1 as individual arguments to splice.


