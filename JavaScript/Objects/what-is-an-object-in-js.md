<!-- @format -->

Lesson 1
What is a JavaScript object, and how can you access properties from an object?

In JavaScript, an object is a fundamental data structure that allows you to store and organize related data and functionality.

You can think of an object as a container that holds various pieces of information, much like a filing cabinet holds different folders and documents.

These pieces of information are called properties, and they consist of a name (or key) and a value.

const exampleObject = {
propertyName: value;
}
Objects are incredibly versatile and form the backbone of JavaScript. In fact, almost everything in JavaScript is an object or can be treated as one. This includes arrays, functions, and even primitive data types like strings and numbers when used in certain ways.

This object-centric nature of JavaScript is one of the reasons it's such a flexible and powerful language. Let's look at how you can create an object:

const person = {
name: "Alice",
age: 30,
city: "New York"
};
In this example, we've created an object called person with three properties: name, age, and city. Each property has a name and a value, separated by a colon.

Now, let's explore how you can access these properties. There are two main ways to access object properties in JavaScript: dot notation and bracket notation.

Dot notation is the most common and straightforward way to access object properties. Here is the basic syntax for dot notation:

objectName.propertyName
Here's how you would use dot notation with our person object:

const person = {
name: "Alice",
age: 30,
city: "New York"
};

console.log(person.name); // Alice
console.log(person.age); // 30
Dot notation is concise and easy to read, making it the preferred choice when you know the exact name of the property you want to access and that name is a valid JavaScript identifier (meaning it doesn't start with a number and doesn't contain special characters or spaces).

Bracket notation, on the other hand, allows you to access object properties using a string inside square brackets. Here's how you would use bracket notation:

const person = {
name: "Alice",
age: 30,
city: "New York"
};

console.log(person["name"]); // Alice
console.log(person["age"]); // 30
Bracket notation is more flexible than dot notation because it allows you to use property names that aren't valid JavaScript identifiers. For example, if you had a property name with spaces or that starts with a number, you'd need to use bracket notation:

const oddObject = {
"1stProperty": "Hello",
"property with spaces": "World"
};

console.log(oddObject["1stProperty"]); // Hello
console.log(oddObject["property with spaces"]); // World
Another advantage of bracket notation is that it allows you to use variables to access properties dynamically:

const person = {
name: "Alice",
age: 30,
city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland
This flexibility makes bracket notation particularly useful when you don't know the exact property name at the time you're writing the code, or when you're working with property names that come from user input or some other dynamic source.

It's worth noting that objects in JavaScript are incredibly powerful and versatile. They can contain not just simple values like strings and numbers, but also arrays, or other objects.

Understanding objects and how to work with them is crucial in JavaScript because they're used extensively throughout the language and in many JavaScript libraries and frameworks.

As you continue to learn and work with JavaScript, you'll find that mastering objects opens up a world of possibilities for creating complex and powerful applications.

Lesson 1

What is a JavaScript object, and how can you access properties from an object?

In JavaScript, an object is a fundamental data structure that allows you to store and organize related data and functionality.

You can think of an object as a container that holds various pieces of information, much like a filing cabinet holds different folders and documents.

These pieces of information are called properties, and they consist of a name (or key) and a value.

const exampleObject = {
propertyName: value;
}
Objects are incredibly versatile and form the backbone of JavaScript. In fact, almost everything in JavaScript is an object or can be treated as one. This includes arrays, functions, and even primitive data types like strings and numbers when used in certain ways.

This object-centric nature of JavaScript is one of the reasons it's such a flexible and powerful language. Let's look at how you can create an object:

const person = {
name: "Alice",
age: 30,
city: "New York"
};
In this example, we've created an object called person with three properties: name, age, and city. Each property has a name and a value, separated by a colon.

Now, let's explore how you can access these properties. There are two main ways to access object properties in JavaScript: dot notation and bracket notation.

Dot notation is the most common and straightforward way to access object properties. Here is the basic syntax for dot notation:

objectName.propertyName
Here's how you would use dot notation with our person object:

const person = {
name: "Alice",
age: 30,
city: "New York"
};

console.log(person.name); // Alice
console.log(person.age); // 30
Dot notation is concise and easy to read, making it the preferred choice when you know the exact name of the property you want to access and that name is a valid JavaScript identifier (meaning it doesn't start with a number and doesn't contain special characters or spaces).

Bracket notation, on the other hand, allows you to access object properties using a string inside square brackets. Here's how you would use bracket notation:

const person = {
name: "Alice",
age: 30,
city: "New York"
};

console.log(person["name"]); // Alice
console.log(person["age"]); // 30
Bracket notation is more flexible than dot notation because it allows you to use property names that aren't valid JavaScript identifiers. For example, if you had a property name with spaces or that starts with a number, you'd need to use bracket notation:

const oddObject = {
"1stProperty": "Hello",
"property with spaces": "World"
};

console.log(oddObject["1stProperty"]); // Hello
console.log(oddObject["property with spaces"]); // World
Another advantage of bracket notation is that it allows you to use variables to access properties dynamically:

const person = {
name: "Alice",
age: 30,
city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland
This flexibility makes bracket notation particularly useful when you don't know the exact property name at the time you're writing the code, or when you're working with property names that come from user input or some other dynamic source.

It's worth noting that objects in JavaScript are incredibly powerful and versatile. They can contain not just simple values like strings and numbers, but also arrays, or other objects.

Understanding objects and how to work with them is crucial in JavaScript because they're used extensively throughout the language and in many JavaScript libraries and frameworks.

As you continue to learn and work with JavaScript, you'll find that mastering objects opens up a world of possibilities for creating complex and powerful applications.

Lesson 2

What is object destructuring and how does it work?

Object destructuring is a powerful feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.

It's part of the ES6 (ECMAScript 2015) specification and has become an essential tool for many JavaScript developers.

Destructuring can simplify your code, especially when working with complex objects or when you need to extract multiple values at once.

At its core, object destructuring is about unpacking values from objects into distinct variables. Instead of accessing object properties one by one, you can extract multiple properties in a single statement. This can make your code cleaner and more efficient.

Let's start with an example to illustrate how object destructuring works:

const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age); // 30
In this example, we're extracting the name and age properties from the person object and assigning them to variables with the same names.

One of the powerful aspects of object destructuring is that you can assign the extracted values to variables with different names. This is particularly useful when you're working with objects that have property names that might conflict with existing variables or when you want to use a different name:

let person = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge); // 30
In this case, we're extracting the name property and assigning it to a variable called personName, and doing the same with age and personAge.

Object destructuring also allows you to set default values. If a property doesn't exist in the object you're destructuring, you can specify a fallback value:

let person = { name: "Alice", age: 30, city: "New York" };
let { name, age, country = "Unknown" } = person;

console.log(country); // Unknown
Here, since country doesn't exist in our person object, it gets the default value Unknown.

Now, let's talk about the shorthand notation in object destructuring. When you're creating objects, especially when the property names match variable names, you can use a shorthand syntax:

let name = "Bob";
let age = 25;

let person = { name, age };

console.log(person); // { name: "Bob", age: 25 }
The code above takes the properties with the same name as our variables and assigns them the values of those variables.

This shorthand notation is particularly useful when you're returning objects from functions or creating objects with multiple properties:

function createPerson(name, age) {
return { name, age };
}

let person = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }
Object destructuring and the shorthand object notation are powerful features that can make your code more concise and easier to read.

They're especially useful when working with complex data structures, or when you need to pass multiple parameters to functions.

As you continue to work with JavaScript, you'll find many situations where these techniques can simplify your code and make it more expressive.

Lesson 3
How can you remove properties from an object?

There are several ways to remove properties from an object, with the delete operator being the most straightforward and commonly used method.

When you use delete, it removes the selected property from the object. Here's an example of how to use the delete operator:

const person = {
name: "Alice",
age: 30,
job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
In this example, we start with a person object that has three properties: name, age, and job. Then, we use the delete operator to remove the job property. After the deletion, the person object no longer has the job property.

Another way to remove properties is by using destructuring assignment with rest parameters. This approach doesn't actually delete the property, but it creates a new object without the specified properties:

const person = {
name: "Bob",
age: 25,
job: "Designer",
city: "New York"
};

const { job, city, ...remainingProperties } = person;

// { name: "Bob", age: 25 }
console.log(remainingProperties);
In this example, we use destructuring to extract job and city from the person object, and collect the remaining properties into a new object called remainingProperties. This creates a new object without the job and city properties.

Understanding how to remove properties from objects is an important skill in JavaScript programming. It allows you to manipulate objects dynamically, and clean up unnecessary data.

Lesson 4
How to check if an object has a property?

In JavaScript, there are several ways to check if an object has a specific property. Understanding these methods is important for working effectively with objects, especially when you're dealing with data from external sources or when you need to ensure certain properties exist before using them.

We'll explore three common approaches: the hasOwnProperty() method, the in operator, and checking against undefined.

Let's start with the hasOwnProperty() method. This method returns a boolean indicating whether the object has the specified property as its own property. Here's an example:

const person = {
name: "Alice",
age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false
In this example, we have an object called person with two properties: name and age. To check if name is a property in the person object, we use the hasOwnProperty() method. Since name is a property, it will return true. But when we use the hasOwnProperty() to check if job is a property, it will return false because it does not exist in the object.

Another way to check for the existence of a property in an object is to use the in operator. Like hasOwnProperty(), the in operator will return true if the property exists on the object. Here's how you can use it:

const person = {
name: "Bob",
age: 25
};
console.log("name" in person); // true
In this example, "name" in person returns true because name is a property of person.

The third method involves checking if a property is undefined. This approach can be useful, but it has some limitations. Here's an example:

const car = {
brand: "Toyota",
model: "Corolla",
year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false
In this code, we check if car.brand and car.color are not undefined. This works because accessing a non-existent property on an object returns undefined. However, this method can give false negatives if a property explicitly has the value undefined.

In practice, the choice between these methods often depends on the specific requirements of your code. Understanding the differences between them will help you make the right choice in different scenarios.

Lesson 5
How do you work with accessing properties from nested objects and arrays in objects?

When working with JavaScript, you'll often encounter complex data structures that involve nested objects and arrays within objects. These structures can represent rich, hierarchical data, but they also require a clear understanding of how to access and manipulate the data within them. Let's explore how to navigate these nested structures effectively.

Accessing properties from nested objects involves using the dot notation or bracket notation, much like accessing properties from simple objects. However, you'll need to chain these accessors to drill down into the nested structure.

For example, let's consider a nested object representing a person with contact information:

const person = {
name: "Alice",
age: 30,
contact: {
email: "alice@example.com",
phone: {
home: "123-456-7890",
work: "098-765-4321"
}
}
};
To access Alice's work phone number, you would chain the property accessors like this:

console.log(person.contact.phone.work); // "098-765-4321"
You can also use bracket notation, which is particularly useful when property names include spaces or special characters, or when you're using variables to access properties:

console.log(person['contact']['phone']['work']); // "098-765-4321"
Now, let’s take a look at how we can access data where one of the object properties has the value of an array. Here is a modified person object that includes an array of addresses:

const person = {
name: "Alice",
age: 30,
addresses: [
{ type: "home", street: "123 Main St", city: "Anytown" },
{ type: "work", street: "456 Market St", city: "Workville" }
]
};
Here is an example of how to access Alice's work address city:

console.log(person.addresses[1].city); // "Workville"
In this example, person.addresses refers to the array of addresses. To access the second address in that array, we use bracket notation and index 1. Then, we use dot notation to access the city from that address object.

Understanding how to access properties in nested objects and arrays is essential when working with complex data structures. In future workshops and labs, you will have the opportunity to practice working with these types of data structures.

Lesson 6
What is the difference between primitive and non-primitive data types?

In JavaScript, understanding the difference between primitive and non-primitive data types is important for writing efficient and bug-free code.

These two categories of data types behave differently in terms of how they are stored in memory and how they are manipulated in your programs.

Primitive data types are the simplest form of data in JavaScript. They include numbers, strings, booleans, null, undefined, and symbols. These types are called "primitive" because they represent single values and are not objects.

When you work with primitive data types, you're dealing directly with their values. For example, when you create a variable with a primitive value, that value is stored directly in the variable.

Primitive values are immutable, which means once they are created, their value cannot be changed. However, you can reassign a new value to the variable. Here's an example of working with primitive data types:

let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num2); // 5
In this example, we are assigning a primitive value (5) from num1 to num2. This creates an independent copy of the value. As a result, any changes made to the original variable (num1) do not affect the copy (num2).

Non-primitive data types, on the other hand, are more complex. In JavaScript, these are objects, which include regular objects, arrays, and functions. Unlike primitives, non-primitive types can hold multiple values as properties or elements.

When you create a variable with a non-primitive value, what's stored in the variable is actually a reference to the location in memory where the object is stored, not the object itself. This leads to some important differences in behavior. Here's an example with non-primitive types:

const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
In this example we have an object called originalPerson with two properties of name and age. We then assign the originalPerson object to a variable called copiedPerson.

Then we update the age value for the originalPerson object. When we log the age property of copiedPerson object it shows the updated value.

But why is that happening? This occurs because both originalPerson and copiedPerson are referencing the same object in memory.

In JavaScript, when you assign an object to another variable, you're copying the reference to the object, not the object itself. This is known as shallow copying by reference. As a result, any changes made to the object through one reference are reflected in all references to that object.

As you continue to work with JavaScript, you'll encounter many situations where understanding the difference between primitive and non-primitive types is important. It's a fundamental concept that underlies many aspects of the language and is key to writing efficient and correct code.

lesson 7

What is the difference between functions and methods?

In JavaScript, functions and object methods are both ways to encapsulate reusable code, but they have some key differences in how they are defined, used, and the context in which they operate. Understanding these differences is crucial for writing effective and organized JavaScript code.

As you learned in earlier modules, functions are reusable blocks of code that perform a specific task:

function greet(name) {
return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
Object methods, on the other hand, are functions that are associated with an object. They are defined as properties of an object and can access and manipulate the object's data. Here's an example of an object with a method:

const person = {
name: "Bob",
age: 30,
sayHello: function() {
return "Hello, my name is " + this.name;
}
};

console.log(person.sayHello()); // "Hello, my name is Bob"
In this example, sayHello is a method of the person object. The this keyword allows the sayHello method to access the properties of the object named person. You will learn more about the this keyword in future lectures.

A difference between functions and methods is how they are invoked. Functions are called by their name, while methods are called using dot notation on the object they belong to. For example, we call the greet function as greet("Alice"), but we call the sayHello method as person.sayHello().

Another important difference is the context in which they operate. Regular functions have their own scope, but they don't have a built-in reference to any particular object. Methods, however, are bound to their object and can access its properties and other methods using the this keyword.

A key point to note is that, methods help in organizing code into logical objects, while functions are used for more general, reusable code.

Understanding the difference between functions and object methods is important as you progress in your JavaScript journey. While they may seem similar at first, recognizing when to use each will help you write more organized, efficient, and better code.

Lesson 8
What is the Object() constructor and when should you use it?

In JavaScript, a constructor is a special type of function used to create and initialize objects. It is invoked with the new keyword and can initialize properties and methods on the newly created object.

In this video, we will take a look at how to work with the Object() constructor. The Object() constructor creates a new empty object. Here is an example:

new Object()
When you call new Object(), it returns a new object that can be used to store values.

The Object() constructor can be used with or without the new keyword. When called as a function without new, it behaves differently depending on the type of value passed to it. Here's an example of using the Object() constructor without the new keyword:

const num = 42;
const numObj = Object(num); // Creates an object wrapper for the number

console.log(numObj); // 42
console.log(typeof numObj); // "object"
The first console.log will show 42, but it is important to note that this is not a regular number. As you can see in the second console.log, numObj is an object. This is happening because we used the Object() constructor to turn that input of a number into an object.

What happens if we try to pass null or undefined to the Object() constructor?

const newObj = new Object(undefined);
console.log(newObj); // {}
Well, the result will be an empty object. Another use case for the Object() constructor is when you're working with a value of unknown type and you need to ensure it's an object. Let’s take a look at the following example:

function toObject(value) {
if (value === null || value === undefined) {
return {};
}

if (typeof value === "object") {
return value;
}

return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));
In this example, we have a function called toObject. The second condition will check if the value is a type of object and will return the value if the condition is true. This condition will check for objects as well as arrays since arrays are special types of objects.

If neither of the conditions is true, the function returns Object(value), which converts the input into an object. This works for values like numbers, strings, and booleans

Most of the time you will not be using the Object() constructor to create new objects because you will be using object literal syntax instead (e.g., const objectLiteral = { name: "Beau" }). But it is still good to understand the basics of working with the Object constructor.

lesson 9

What is the optional chaining operator and how does it work?

The optional chaining operator (?.) is a useful tool in JavaScript that lets you safely access object properties or call methods without worrying whether they exist. It's like a safety net for working with objects that might have missing parts.

const person = {
name: "Alice",
age: 30
};

console.log(person.name); // "Alice"
console.log(person.job); // undefined
In this example, person.name exists, so it logs Alice. But person.job doesn't exist, so it gives us undefined.

Now, let's say we want to access a property of an object that might not exist:

const person = {
name: "Alice",
age: 30
};

console.log(person.address.street); // This will throw an error!
This example will throw an Uncaught TypeError. Since person.address is undefined, we are not able to access the street property. This is where the optional chaining operator comes in handy. Here is an example of using the optional chaining operator:

const user = {
name: "John",
profile: {
email: "john@example.com",
address: {
street: "123 Main St",
city: "Somewhere"
}
}
};

console.log(user.profile?.address?.street); // "123 Main St"
console.log(user.profile?.phone?.number); // undefined
By using the optional chaining operator, we are telling JavaScript to only continue with the operation if the object (or the value before the ?.) exists and is not null or undefined.

If the value before the ?. is null or undefined, JavaScript returns undefined rather than attempting to proceed with the operation and throwing an error.

Remember, the optional chaining operator is most useful when you're not sure if a property or method exists. It helps prevent errors and makes your code more robust.

Lesson 10

What is JSON and how do you access values using bracket and dot notation?

JSON stands for JavaScript Object Notation. It is a lightweight, text-based data format that is commonly used to exchange data between a server and a web application.

One of the reasons why JSON is so popular in web development is because it is both machine-parseable and human-readable.

Since JSON is language-independent, you can easily send JSON data from a Java application to a Python application, or from a JavaScript application to a C# application.

JSON supports many data types including objects, arrays, strings, booleans, null, and numbers.

Here's an example of a JSON object:

{
"name": "Alice",
"age": 30,
"isStudent": false,
"list of courses": ["Mathematics", "Physics", "Computer Science"]
}
As you can see, JSON uses key-value pairs to store information and each pair is separated by a comma. Each key must be wrapped in double quotes, otherwise you will get an error.

To access data from a JSON object, you can either use dot or bracket notation. In this example, we are using dot notation to access the age from the JSON object:

import data from "./example.json" with { type: "json" };

console.log(data.age);
This particular example is using what is known as an import statement, which imports the JSON object into this file so we have access to it. You will learn more about the import statement in a future lecture.

You can also use bracket notation to access information from JSON objects. Here is an example of accessing the list of courses array:

import data from "./example.json" with { type: "json" };

console.log(data["list of courses"]);
Using bracket notation is particularly useful here because the key contains multiple words separated by spaces. If we tried to use dot notation, it would result in an error.

In summary, JSON is a versatile format that can store many data types, including arrays and nested objects. By using dot notation or bracket notation, you can easily access the values stored within a JSON object.

Lesson 11

How do JSON.parse() and JSON.stringify() work?

There are two powerful methods in JavaScript for handling JSON data: JSON.parse() and JSON.stringify(). These methods are commonly used to convert between JSON strings and JavaScript objects.

JSON.stringify() is used to convert a JavaScript object into a JSON string. This is useful when you want to store or transmit data in a format that can be easily shared or transferred between systems.

Here's how you can use the JSON.stringify() method:

const user = {
name: "John",
age: 30,
isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
In the example, the JavaScript object user is converted into a JSON string that looks like this:

'{"name":"John","age":30,"isAdmin":true}'
The JSON.stringify() method also accepts an optional parameter called a replacer, which can be a function or an array. Here is an example of using an array for the optional replacer parameter:

const developerObj = {
firstName: "Jessica",
isAwesome: true,
isMusician: true,
country: "USA",
};

// result: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));
In this example, we have a developerObj with four properties. When we use the JSON.stringify() method, we can pass in an array for the second parameter and specify which properties we want stringified. The result will be a stringified object containing only the firstName and country properties.

Another optional parameter for the JSON.stringify() method would be the spacer parameter. This allows you to control the spacing for the stringified result:

const developerObj = {
firstName: "Jessica",
isAwesome: true,
isMusician: true,
country: "USA",
};

console.log(JSON.stringify(developerObj, null, 2));

/_ result
{
"firstName": "Jessica",
"isAwesome": true,
"isMusician": true,
"country": "USA"
}
_/
Most of the time you will not be using either of these optional parameters for the JSON.stringify() method but it is still helpful to be aware of them.

Another method you will be using a lot in your programming is the JSON.parse() method. JSON.parse() converts a JSON string back into a JavaScript object. This is useful when you retrieve JSON data from a web server or from localStorage and you need to manipulate the data in your application. You will learn more about localStorage in a future lecture.

Here's an example on how to work with the JSON.parse() method:

const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
The JSON string is parsed back into a JavaScript object that looks like this:

{
name: "John",
age: 30,
isAdmin: true
}
This allows you to work with the data in your program as a normal JavaScript object, making it easier to manipulate and use.

In future modules, we will continue to learn more about how to work with JSON and the JSON.parse() and JSON.stringify() methods.
