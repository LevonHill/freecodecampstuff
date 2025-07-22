In these lecture videos, you will learn how to work with JavaScript arrays. You will learn about what makes an array, one-dimensional and two-dimensional arrays, how to access and update the elements in an array, and much more.

Lesson 1
What are key characteristics of JavaScript arrays?

An array in JavaScript is an ordered collection of values, each identified by a numeric index. The values in a JavaScript array can be of different data types, including numbers, strings, booleans, objects, and even other arrays.

To create an array in JavaScript, you can use square brackets, [], and separate the values with commas. Here's an example:

let fruits = ["apple", "banana", "orange"];
In this example, we declare a variable fruits and assign it an array containing three string values: apple, banana, and orange.

One of the key characteristics of arrays is that they are zero-indexed, meaning that the first element in an array has an index of 0, the second element has an index of 1, and so on. You can access individual elements in an array using their index. For example:

let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"
In this example, we use the index 0 to access the first element (apple) and the index 2 to access the third element (orange).

Arrays in JavaScript have a special length property that returns the number of elements in the array. You can access this property using the length keyword. For example:

let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
Another key characteristic of arrays in JavaScript is that they are dynamic, meaning that their size can change after they are created. You can add or remove elements from an array using various array methods, such as push(), pop(), shift(), unshift(), splice(), and more. These methods will be taught in upcoming lectures videos.

JavaScript arrays are versatile and useful when it comes to data storage inside your programs. Throughout this module, you'll get to see firsthand how working with arrays will help you efficiently manage and manipulate collections of data.

Lesson 2


How do you access and update elements in an array?

In the previous lecture video, you were first introduced to working with arrays and accessing different elements from arrays. Here is a reminder on how to access the second element from an array:

const fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); // "banana"
Since arrays are zero based indexed, the first element will be at index 0, the second index will be at index 1, etc. It's important to note that if you try to access an index that doesn't exist in the array, JavaScript will return undefined.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
In this example, there is no index 3 for the fruits array. So the log will show undefined. Now, let's look at how to update elements in an array. You can update an element by assigning a new value to a specific index.

let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
In this example, we've replaced banana with blueberry at index 1. This method allows you to change any element in the array, as long as you know its index. You can also add new elements to an array by assigning a value to an index that doesn't yet exist:

let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";
console.log(fruits); // Outputs: ["apple", "blueberry", "cherry", "date"]
However, exercise caution when doing this. If you assign a value to an index that is much larger than the current length of the array, you will create undefined elements for the indices in between, which can lead to unexpected behavior. As you continue to work with JavaScript, you'll find that these ways of accessing and updating array elements are fundamental to many programming tasks. Whether you're building a simple todo list or processing complex data structures, these skills will be invaluable.

Lesson 3
How do you add/remove elements from the beginning and end of an array?

Arrays in JavaScript are dynamic, which means you can easily add or remove elements from them. There are four main methods for adding and removing elements from the beginning and end of an array: push(), pop(), shift(), and unshift(). Let's explore each of these methods in detail.

The push() method is used to add one or more elements to the end of an array. The return value for the push() method is the new length of the array. Here's an example of adding a new fruit to the existing fruits array:

const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]
In this example, we start with an array called fruits which contains two elements. We then use the push() method to add the string orange to the end of the array.

You might have noticed that we are using const when declaring the fruits array. But why is it possible to add more elements to this fruits array when fruits is a constant? This is possible because declaring an array with the const keyword creates a reference to the array. While the array itself is mutable and can be modified, you cannot reassign a new value to the fruits constant, like this:

const fruits = ["apple", "banana"];
fruits = ["This", "will", "not", "work"];
console.log(fruits); // Uncaught TypeError: Assignment to constant variable. 
The next method we will look at is the pop() method. The pop() method removes the last element from an array and returns that element. It also modifies the original array. Here's how it works:

let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"
In this example, we start with an array of three fruits. The pop() method removes the last element (orange) from the array and returns it. The original fruits array is modified and contains only two elements.

The unshift() method adds one or more elements to the beginning of an array and returns its new length. It works similarly to push(), but modifies the start of the array instead of the end. Here's an example:

let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3
In this example, we use unshift() to add the number 1 to the beginning of the numbers array. The method returns the new length of the array, which is 3.

Finally, the shift() method removes the first element from an array and returns that element. It's similar to pop(), but it works at the beginning of the array instead of the end. Here's how it works:

let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"
In this example, we start with an array of three colors. The shift() method removes the first element (red) from the array and returns it. The original colors array is modified to contain only two elements.

Note that while push() and unshift() can add multiple elements at once, pop() and shift() remove only one element at a time.