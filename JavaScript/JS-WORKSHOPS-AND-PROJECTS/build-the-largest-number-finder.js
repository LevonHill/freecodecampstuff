
//User Stories:

//You should create a function largestOfAll that takes an array of arrays as an argument.
//The function should return an array containing the largest number from each sub-array.

function largestOfAll(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let subArray = arr[i];
    let largest = subArray[0];

    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > largest) {
        largest = subArray[j];
      }
    }

    result.push(largest);
  }

  return result;
}



console.log(
  largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
); // Output: [27, 5, 39, 1001]




//  ✅ Explanation:
//arr is an array of arrays.

//Loop through each sub-array with a for loop.

//For each sub-array, set largest to the first element.

//Then loop through the sub-array, compare each number, and update largest if a bigger one is found.

//After finding the largest number in that sub-array, push it into the result array.

//Finally, return result.