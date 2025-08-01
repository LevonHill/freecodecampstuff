<!-- @format -->

Lesson 1
How do you get the index for an element in an array using the indexOf method?

In JavaScript, the indexOf() method is useful for finding the first index of a specific element within an array. If the element cannot be found, then it will return -1. Here is the basic syntax:

array.indexOf(element, fromIndex)
element represents the value you want to search for within the array, and the fromIndex parameter is the position from which the search should start. The fromIndex parameter is optional. If fromIndex is not provided, the search starts from the beginning of the array. Let's look at an example:

let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1
In this example, we have an array fruits containing various fruit names. We use the indexOf() method to find the index of the string banana within the fruits array. Since banana is present at index 1, the method returns 1, which is stored in the index variable and logged to the console.

If the element you're searching for is not found in the array, indexOf() returns -1. For example:

let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("grape");
console.log(index); // -1
Here, we search for the string grape in the fruits array using indexOf(). Since grape is not present in the array, the method returns -1, which is stored in the index variable and logged to the console.

If you want to start looking for an item after a specific index number, then you can pass a second argument like in this example:

let colors = ["red", "green", "blue", "yellow", "green"];
let index = colors.indexOf("green", 3);
console.log(index); // 4
In this example, the search does not start from the start of an array, rather it starts from the index number 3 which is yellow and gets the output of 4.

Lesson 2

How do you add/remove elements from the middle of an array?

The splice() method in JavaScript is a powerful way for modifying arrays. It allows you to add or remove elements from any position in an array, including the middle. The return value for the splice() method will be an array of the items removed from the array. If nothing was removed, then an empty array will be returned.

It is important to note that this method will mutate the original array, modifying it in place rather than creating a new array. This is something to be aware of when working with splice(). Here is the basic syntax:

array.splice(startIndex, itemsToRemove, item1, item2)
startIndex specifies the index at which to begin modifying the array, while itemsToRemove is an optional parameter indicating how many elements to remove. If itemsToRemove is omitted, splice() will remove all elements from startIndex to the end of the array. The subsequent parameters (item1, item2, and so on) are the elements to be added to the array, beginning at the start index.

Let's start with an example of removing elements from the middle of an array:

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits); // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]
In this example, splice(2, 2) starts at index 2 and removes 2 elements. The modified array will now consist of only apple, banana, and kiwi. Now, let's look at how to add elements to the middle of an array:

let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
Here, splice(1, 0, "yellow", "purple") starts at index 1, removes 0 elements, and inserts yellow and purple. The second parameter (0) means no elements are removed before insertion. You can also use splice() to simultaneously remove and add elements:

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers); // [1, 6, 7, 8, 4, 5]
In this case, splice(1, 2, 6, 7, 8) starts at index 1, removes 2 elements (2 and 3), and inserts 6, 7, and 8. If you need to keep the original array unchanged, you should create a copy before using splice():

let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy.splice(2, 1, 6);

console.log(original); // [1, 2, 3, 4, 5]
console.log(copy); // [1, 2, 6, 4, 5]
In this example, to create a copy of the original array without modifying it, we use the spread operator (...). The spread operator will create a shallow copy of the elements of the original array into a new array. You will learn more about this in future lecture videos.

When we use copy.splice(2, 1, 6), it modifies the copy array by removing the element at index 2 (which is 3) and inserting the new element 6 at that position.

One common use case for splice() is to remove a single element from an array when you know its index:

let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]
In this example, we first use the indexOf() method to find the index of the element orange in the fruits array. The indexOf() method returns the index of the first occurrence of the given element or -1 if the element is not found in the array.

We then compare indexToRemove with -1 to ensure that the element exists in the array before attempting to remove it. If indexToRemove is not equal to -1 (meaning the element is found), we use splice() to remove one element starting from the indexToRemove position.

You can also use splice() to clear an array by removing all elements:

let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []
While splice() is powerful, it's worth noting that for very large arrays, it can be less efficient than other methods, especially when modifying the beginning of the array. This is because splice() may need to shift all subsequent elements. In such cases, if you're only adding or removing elements at the end of the array, methods like push(), pop(), unshift(), and shift() might be more appropriate.

In conclusion, the splice() method is a versatile way for modifying arrays in JavaScript. It allows for precise control over adding and removing elements from any position in an array. Understanding how to use splice() effectively can greatly enhance your ability to manipulate arrays in your JavaScript code.

Lesson 3

How can you check if an array contains a certain value?

In JavaScript, the includes() method is a simple and efficient way to check if an array contains a specific value. This method returns a boolean value: true if the array contains the specified element, and false otherwise.

The includes() method is particularly useful when you need to quickly verify the presence of an element in an array without needing to know its exact position. Let's start with an example of how to use the includes() method:

let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false
In this example, we have an array of fruits. We use the includes() method to check if banana is in the array. It returns true because banana is indeed present. We then check for grape, which returns false because it's not in the array.

The includes() method is case-sensitive when dealing with strings. This means that Banana with a capital B and banana with all lowercase letters are considered different values. Here's an example that illustrates this:

let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
In this case, banana (all in lowercase) is found in the array, but Banana (with the first letter capitalized) is not, so the second includes() call returns false.

The includes() method can also accept an optional second parameter that specifies the position in the array to start the search. This is useful if you want to check for an element's presence in a specific part of the array. Here's how you can use this feature:

let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(30, 4)); // true
For the first console.log, we are looking for the number 30 starting at index 3. In this case, there is a number 30 that appears after index 3, so the includes() method returns true.

The same is true for the second console.log. We are looking for the number 30 starting at index 4. Since the number 30 does appear after that index, then it will return true.

It's worth noting that includes() uses the strict equality comparison (===), which means it can distinguish between different types. For example:

let mixedArray = [1, "2", 3, "4", 5];
console.log(mixedArray.includes(2)); // false
console.log(mixedArray.includes("2")); // true
In this case, the number 2 and the string "2" are considered different data types. So, the first console.log will return false, while the second console.log will return true.

The includes() method is a powerful tool for checking the presence of elements in arrays. It's simple to use, efficient, and can save you from writing more complex loops or conditions to search through arrays. Whether you're working with strings, numbers, or mixed data types, includes() provides a straightforward way to verify if a value exists in your array.

Lesson 4
What is a shallow copy of an array, and what are some ways to create these copies?

A shallow copy of an array is a new array that contains references to the same elements as the original array. Creating shallow copies of arrays is a common operation, especially when you want to manipulate an array without modifying the original.

There are several methods for creating shallow copies of arrays, and we'll explore some of the most common ones: concat(), slice(), and the spread operator.

Let's start with the concat() method. This method creates a new array by merging two or more arrays. When used with a single array, it effectively creates a shallow copy. Here's an example:

let originalArray = [1, 2, 3];
let copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
In this example, we are using the concat() method to concatenate an empty array to the originalArray. This will create a new array that is a shallow copy of originalArray.

The copyArray contains the same elements as originalArray, but it is a different array object, which is why the strict equality check (===) returns false.

Another method to create a shallow copy is the slice() method. When called without arguments, slice() returns a shallow copy of the entire array. Here's how it works:

let originalArray = [1, 2, 3];
let copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
In this case, originalArray.slice() creates a new array that is a shallow copy of originalArray. Again, the copyArray contains the same elements but is a different array object.

The spread operator (...), introduced in ES6, provides another concise way to create shallow copies of arrays. Here's an example:

let originalArray = [1, 2, 3];
let copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
The spread operator (...) spreads the elements of originalArray into a new array, effectively creating a shallow copy. It's important to note that all these methods create new array objects, which means you can modify the copy without affecting the original array. For example:

let originalArray = [1, 2, 3];
let copyArray = [...originalArray];

copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray); // [1, 2, 3, 4]
In this example, adding an element to copyArray doesn't affect originalArray.

In summary, shallow copies of arrays can be easily created using methods like concat(), slice(), or the spread operator. These methods are useful for creating new arrays that can be manipulated independently of the original array.
