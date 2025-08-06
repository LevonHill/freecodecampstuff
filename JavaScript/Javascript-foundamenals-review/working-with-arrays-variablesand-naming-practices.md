<!-- @format -->

Lesson 1

What Are Some Common Practices for Naming Variables and Functions?
Naming variables and functions is an important aspect of writing clean, readable and maintainable code. Good naming practices makes your code self-documenting reducing the need for extensive comments and making it easier for other developers including your future self to understand your code.

Let's start with general naming conventions in JavaScript. In previous lectures you learned about using camel case for variable names. For boolean variables, it's a common practice to use prefixes such as is, has, or can. This immediately tells the reader that the variable is a boolean:

let isLoading = true;
let hasPermission = false;
let canEdit = true;
For functions the name should clearly indicate what the function does. It's often helpful to start with a verb:

function getUserData(){
/_ ... _/
}

function calculateTotal(){
/_ ... _/
}

function validateInput(){
/_ ... _/
}
For functions that return a boolean often called predicates, you can use the same is, has, or can prefixes:

function isValidEmail(email) {
/_ ... _/
}

function hasRequiredFields(form) {
/_ ... _/
}
When you have functions that retrieve data it's common to start with the word get:

function getProductDetails(productId) {
/_ ... _/
}

function getUserProfile(userId) {
/_ ... _/
}
When you have functions that set data it's common to start with the word set:

function setUserPreferences(preferences) {
/_ ... _/
}

function setPageTitle(title) {
/_ ... _/
}
For event handler functions, you might prefix with handle or suffix with handler:

function handleClick(){
/_ ... _/
}

function onSubmit(){
/_ ... _/
}

function keyPressHandler(){
/_ ... _/
}
An event handler is an action that happens after an event has happened like a button click. You will learn about that in future lectures.

When naming iterator variables and loops, it's common to use single letters like i, j, or k, but for nested loops or more complex iterations more descriptive names can be helpful:

for (let i = 0; i < array.length; i++) {
/_ ... _/
}

for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
/_ ... _/
}
For array names consider using plural nouns to indicate that the variable contains multiple items:

const colors = ['red', 'green', 'blue'];
const userNames = ['Alice', 'Bob', 'Charlie'];
Remember the goal is to make your code as self explanatory as possible. A good rule of thumb is that if you need to add a comment to explain what a variable or function does, you might want to consider renaming it to something more descriptive.

Lastly, be consistent with your codebase or team. If your team has established naming conventions, stick to them. Consistency makes the code more readable and maintainable for everyone involved.

Lesson 2
How Do You Get the Length for an Array, and How Can You Create an Empty Array of Fixed Length?
In prior lectures you were first introduced to the length property, this property returns the number of elements in an array. So here is a quick reminder on how it works:

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3
It's possible to have arrays with empty slots. Empty slots are defined as slots with nothing in them. This is different than an array with the value of undefined. These types of arrays are known as sparse arrays. Here is an example:

const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
In this case even though we only have two defined elements, 1 and 4. The length is 4 because the highest index (3) plus 1 gives us a length of 4.

Now let's discuss how to create an empty array of fixed length. There are few ways to do this in JavaScript but one common method is to use the Array() constructor with a numeric argument. The Array() constructor can be used with the new keyword to create a new array. Here is an example:

const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray); // [,,,,]
In this example, we create a new array using the Array(5). This creates a sparse array with a length of 5 where all the slots are empty.

Another way to create an empty array of fixed length is to use the Array.from() method with a length argument. This method creates an array of the specified length with all elements initialized to undefined:

const fixedLengthArray = Array.from({ length: 5 });
console.log(fixedLengthArray.length); // 5

// [undefined, undefined, undefined, undefined, undefined]
console.log(fixedLengthArray);
If you want to create an array of specific length and fill it with a default value, you can use the Array.fill() method:

const filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0]
This creates an array of length three and fills all elements with the value 0.

Understanding how to get the length of an array and create arrays of fixed length is important for many programming tasks especially when you need to initialize arrays for specific algorithms or data structures.
