//In this lab, you will practice dividing an array into smaller arrays with the technique of your choice.
function chunkArrayInGroups (arr, size) {
const result = [];
for(let i = 0; i < arr.length; i += size){
    result.push(arr.slice(i, i +size));
}
return result;
}


//console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// Output: [["a", "b"], ["c", "d"]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// Output: [[0, 1, 2], [3, 4, 5]]

console.log(chunkArrayInGroups([1, 2, 3, 4, 5], 2));
// Output: [[1, 2], [3, 4], [5]]




//🧠 Explanation:


//We loop through the array in steps of size.

//slice(i, i + size) grabs a portion of the array.

//push() adds each chunk to the result array.