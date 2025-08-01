<!-- @format -->

lesson 1

What is the Number type in JavaScript, and what are the different types of numbers available?

The Number type is one of the most used data types in JavaScript and other programming languages. Numbers might seem simple, but there's a lot to explore when it comes to numbers in JavaScript. So, let's take a deeper look. In JavaScript, the Number data type represents a numeric value.

Unlike many other programming languages that separate integers and floating-point numbers into different types, JavaScript uses one unified Number type to account for numbers. This means you can work with whole numbers, decimals, and even special numeric values all under the same Number data type umbrella.

Here's a basic example showing you integers, floating point numbers, and negative numbers are all of type number:

const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number
JavaScript's Number type includes various kinds of numeric values, ranging from simple integers and floating-point numbers to special cases like Infinity and NaN, or "Not a Number". Let's break down the main types you'll encounter. Integers are whole numbers without any fractional or decimal part. They can be positive, negative, or zero. Here are some examples:

const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number
Floating point numbers are numbers with decimal points. They're often referred to as just "floats" by JavaScript developers. Floats are useful when you need more precision, such as when you're dealing with measurements or currencies. Here are some examples:

const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number
JavaScript can represent numbers that are beyond the maximum limit with Infinity. You'll encounter this when you try to divide a number by zero or on rare occasions, exceed the upper boundary of the Number type. Here's an example:

const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number
Sometimes in JavaScript, some mathematical operations don't result in a valid number. For instance, if you try to perform a mathematical operation on something that isn't a number, you'll get NaN, which stands for "Not a Number":

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
Surprisingly, the type of NaN is also Number:

const notANumber = 'hello world' / 2;
console.log(typeof notANumber); // number
Apart from the standard decimal system (base 10), JavaScript also supports numbers in different bases such as binary, octal, and hexadecimal. Binary is a base-2 system that uses only digits 1 and 0. Octal is a base-8 system that uses only digits 0 to 7. Hexadecimal is a base-16 system that uses digits 0 to 9 and letters a to f, like you see in CSS hex colors.

Lesson 2

What are the different arithmetic operators in JavaScript?

JavaScript provides tools to perform basic arithmetic operations on numbers, such as addition, subtraction, multiplication, and division. JavaScript also includes operators for more complex arithmetic operations, such as remainder and exponentiation.

All these tools are called arithmetic operators. Let's look at these operators in detail, how to use them and how to combine them.

The addition operator is a plus sign (+). The addition operator allows you to find the total of two or more numbers. In addition operations, the order of the numbers doesn't matter:

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30
The subtraction operator is a minus sign (-). It allows you to find the difference between two numbers. Use the minus sign when you want to subtract a number from another number, usually a smaller one from a bigger one:

const difference = 10 - 5;
console.log(difference); // 5
If a smaller number comes first, you'll get a negative result:

const difference = 5 - 10;
console.log(difference); // -5
You can also assign the numbers to variables and do the subtraction with the variable names:

const num1 = 10;
const num2 = 5;
const result = num1 - num2;

console.log(result); // 5
In JavaScript, the multiplication operator is represented by an asterisk (\*) and is used to find the product of two or more numbers. The order of the numbers you're multiplying does not matter:

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 _ num2;
const result2 = num2 _ num1;
const result3 = num2 _ num1 _ num3;

console.log(result1); // 50
console.log(result2); // 50
console.log(result3); // 750
In JavaScript, the division operator is a slash (/), which differs from the division symbol used in traditional math (÷). You perform division operations with the division operator. The order of the numbers you're dividing matters in this case:

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 / num2;
const result2 = num2 / num1;
const result3 = num2 / num1 / num3;

console.log(result1); // 2
console.log(result2); // 0.5
console.log(result3); // 0.03333333333333333
It's important to note that if you try to divide by zero, JavaScript will return Infinity:

const result = 10 / 0;

console.log(result); // Infinity
Make sure to avoid those types of calculations so you don't end up with unexpected results in your code.

The remainder operator, represented by a percentage sign (%), returns the remainder of a division. The remainder in math is the leftover value after performing division:

const num1 = 10;
const num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1
The exponentiation operator, represented by a double asterisk (\*\*), raises one number to the power of another:

const num1 = 2;
const num2 = 3;

const exponent = num1 \*\* num2;
console.log(exponent); // 8
It's possible to mix operators in a single operation or expression:

const result = 10 + 5 \* 2 - 8 / 4;
console.log(result); // 18
When you mix different operators in a single expression, the JavaScript engine follows a system called operator precedence to determine the order of operations. Operator precedence determines the order in which operations are executed in expressions. You will learn more about operator precedence in future lecture videos.

Lesson 3
What happens when you try to do calculations with numbers and strings?

JavaScript is a language where things sometimes work in surprising, or even weird, ways. One such surprise occurs when you mix numbers and strings in calculations. The first thing you'll probably try is to add a number and a string. In JavaScript, the + operator does double duty. It handles both addition and string concatenation, which is a way to join two strings together.

When you use + with a number and a string, JavaScript decides to treat them both as strings and joins them together. If you check the type of the result with the typeof operator, you'd see it's indeed a string:

const result = 5 + '10';

console.log(result); // 510
console.log(typeof result); // string
What do you think will happen if you switch the order of 5 and '10'?

const result = '10' + 5;

console.log(result); // 105
console.log(typeof result); // string
You can see the same thing happened. JavaScript sees a string in '10' and a number in 5, so it converts the number to a string and concatenates them. This is known as type coercion. Type coercion is when a value from one data type is converted into another.

Things get more interesting when you try to perform other arithmetic operations like subtraction, multiplication, or division with a string and number. In these cases, JavaScript tries to convert the string into a number before doing the math – another type coercion! Here's what happens:

const subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

const multiplicationResult = '10' \* 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

const divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number
In the examples above, JavaScript successfully converts the string '10' or '20' to a number and then performs the calculation. As a result, '10' - 5 yields 5, '10' \* 2 gives 20, and '20' / 2 results in 10.

But what if the string doesn't look like a number? Let's see what happens in that case:

const subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

const multiplicationResult = 'abc' \* 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

const divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number
In the examples above, the string 'abc' does not represent a valid numeric value, so JavaScript cannot convert it into a meaningful number. When such conversion fails, JavaScript returns NaN, which stands for "Not a Number". NaN is a special value of the Number type that represents an invalid or unrepresentable number.

What if you perform arithmetic operations with a boolean (true or false)? Let's see what happens. JavaScript treats booleans as numbers in mathematical operations: true becomes 1, and false becomes 0.

const result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

const result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string
In the first two examples, true + 1 resulted in 2, and false + 1 resulted in 1. In the third example, 'Hello' + true, JavaScript converted true to a string and concatenates it with 'Hello', resulting in 'Hellotrue', which is a string.

For null and undefined, JavaScript treats null as 0 and undefined as NaN in mathematical operations:

const result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

const result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number
JavaScript often performs type coercion, automatically converting data types such as numbers, strings, and booleans in sometimes unexpected ways. Understanding these conversions is crucial for avoiding bugs and writing robust code in your projects.

Lesson 4
How does operator precedence work?

If you write an expression with several operators in JavaScript, how does JavaScript decide which one to evaluate first? This is where operator precedence comes in. Let's explore operator precedence in detail with code examples, and also what happens when operators have the same precedence.

Operator precedence determines the order in which operations are evaluated in an expression. Operators with higher precedence are evaluated before those with lower precedence. Think of operator precedence like in math, where division and multiplication happen before addition and subtraction.

Without following this rule, basic equations would give you the wrong answer. JavaScript works the same way. It has its own rules for which operators come first, second, and so on. For example, take a look at the expression below:

const result = 2 + 3 \* 4;

console.log(result); // 14
If JavaScript evaluated this expression from left to right, you'd expect 2 + 3 = 5, then 5 _ 4 = 20. But because multiplication has a higher precedence than addition, JavaScript evaluates the 3 _ 4 part first, resulting in 2 + 12 = 14.

Sometimes, you may want certain parts of your expression to run first, regardless of precedence rules. You can use parentheses, (), to do this. Anything inside parentheses is evaluated first, no matter what. Let's make the 2 + 3 part of the previous example evaluate first:

const result = (2 + 3) \* 4;

console.log(result); // 20
In the example above, the parentheses force JavaScript to evaluate 2 + 3 first, and then multiply the result by 4. This gives you 20 instead of 14.

The division operator has more precedence than addition or subtraction too:

const result = 2 + 6 / 3;

console.log(result); // 4
If JavaScript evaluated this expression from left to right, you might expect 2 + 6 = 8, then 8 / 3 = 2.67. But since division has a higher precedence than addition, JavaScript evaluates the division first: 6 / 3 = 2, and then adds 2 + 2, giving the result 4.

So, in both multiplication and division, those operations will always take place before addition and subtraction unless you use parentheses to change the order. So what happens if the operators have the same precedence? JavaScript uses associativity to figure out the order to evaluate them.

Associativity is what tells JavaScript whether to evaluate operators from left to right or right to left. For most operators like addition and multiplication, associativity is left to right. So, JavaScript processes these from the leftmost side of the expression to the right:

const result = 10 - 2 + 3;

console.log(result); // 11
First, 10 - 2 = 8, then 8 + 3 = 11. JavaScript moves left to right in this case. Some operators, like assignment (=), are right-to-left associative. This means the right side of the expression gets evaluated first:

let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10
In the example above, JavaScript assigns 5 to b first, then assigns b (which is now 5) to a.

The exponent operator is also right-to-left associative:

const result = 2 ** 3 ** 2;

console.log(result); // 512
First, JavaScript evaluates 3 ** 2, which equals 9, then, it evaluates 2 ** 9, which equals 512. If the exponent operator had left-to-right associativity, JavaScript would have calculated 2 ** 3 first to get 8, then 8 ** 2 to get 64.

Lesson 5
How do the increment and decrement operators work?

If you're working with numbers and need to increase or decrease a value by one, the increment and decrement operators make the job easier. Let's break it down in a simple way.

The increment and decrement operators are represented by ++ and --, respectively. They both allow you to adjust the value of a variable by 1.

Instead of writing something like x = x + 1 or x = x - 1, you can simply use x++ to add 1, or x-- to subtract 1. It's faster, cleaner, and easier to read.

There's a twist to how the increment and decrement operators work: they come in two forms, prefix and postfix, with the difference being when the value gets updated. For the increment operator, prefix is ++x and postfix is x++.

Prefix (++x) increases the value of the variable first, then returns a new value. Postfix (x++) returns the current value of the variable first, then increases it:

let x = 5;

console.log(++x); // 6
console.log(x); // 6
In the code above, ++x means "increment x first, then use it". So when you log ++x, you immediately get the incremented value, which is 6.

Now, let's take a look at an example using the postfix:

let y = 5;

console.log(y++); // 5
console.log(y); // 6
In this example, y++ means "use y first, then increment it". When you log y++, you get 5, but y becomes 6 after that line of code.

The decrement operator does the same thing as increment, except it decreases the value by 1. Again, there are two forms: prefix (--x) decreases the value of the variable first, then returns the new value. And postfix (x--) returns the current value first, then decreases it:

let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4
So, which should you use: prefix or postfix? In many cases, it doesn't matter which one you use. Both get the job done. However, if you're using the value immediately in an expression, the difference becomes important. Let's take a look at this example:

let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)
So, if you need the updated value right away, use prefix. If you want the current value first and you don’t care about the increment until later, go with postfix.

Lesson 5
How do the increment and decrement operators work?

If you're working with numbers and need to increase or decrease a value by one, the increment and decrement operators make the job easier. Let's break it down in a simple way.

The increment and decrement operators are represented by ++ and --, respectively. They both allow you to adjust the value of a variable by 1.

Instead of writing something like x = x + 1 or x = x - 1, you can simply use x++ to add 1, or x-- to subtract 1. It's faster, cleaner, and easier to read.

There's a twist to how the increment and decrement operators work: they come in two forms, prefix and postfix, with the difference being when the value gets updated. For the increment operator, prefix is ++x and postfix is x++.

Prefix (++x) increases the value of the variable first, then returns a new value. Postfix (x++) returns the current value of the variable first, then increases it:

let x = 5;

console.log(++x); // 6
console.log(x); // 6
In the code above, ++x means "increment x first, then use it". So when you log ++x, you immediately get the incremented value, which is 6.

Now, let's take a look at an example using the postfix:

let y = 5;

console.log(y++); // 5
console.log(y); // 6
In this example, y++ means "use y first, then increment it". When you log y++, you get 5, but y becomes 6 after that line of code.

The decrement operator does the same thing as increment, except it decreases the value by 1. Again, there are two forms: prefix (--x) decreases the value of the variable first, then returns the new value. And postfix (x--) returns the current value first, then decreases it:

let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4
So, which should you use: prefix or postfix? In many cases, it doesn't matter which one you use. Both get the job done. However, if you're using the value immediately in an expression, the difference becomes important. Let's take a look at this example:

let a = 5;
let b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)
So, if you need the updated value right away, use prefix. If you want the current value first and you don’t care about the increment until later, go with postfix.

Lesson 6
What are compound assignment operators in JavaScript, and how do they work?

In JavaScript, all arithmetic operators have a compound assignment form. Compound assignment operators allow you to perform a mathematical operation and reassign the result back to the variable in one line of code. Instead of writing something like this:

let num = 5;
num = num + 2;

console.log(num); // 7
You can write something like this:

let num = 5;
num += 2;

console.log(num); // 7
Notice how num += 2 combines both the addition and assignment steps into one. This saves time and reduces clutter in your code. Let's dive deeper into the most common compound assignment operators in JavaScript.

As you've already seen, the += operator lets you add a value to an existing variable. It is known as the addition assignment operator. The addition assignment operator takes the current value of the variable, adds the specified number to it, and then assigns the result back to the variable:

let total = 10;
total += 5;

console.log(total); // 15
As you might guess, there's a subtraction assignment operator denoted by -=. The subtraction assignment operator subtracts the specified value from the current value of the variable and assigns the new value back to the variable:

let score = 20;
score -= 7;

console.log(score); // 13
If you didn't use the subtraction assignment, you'd have done something like this:

let score = 20;
score = score - 7;

console.log(score); // 13
The multiplication assignment operator is represented by \*=. It multiplies the current value of the variable by the specified number and reassigns it back to the variable:

let points = 5;
points \*= 3;

console.log(points); // 15
Lastly, there's a division assignment operator denoted by /=. Just like others before it, it lets you divide the current value of a variable by a number you specify, then assign the result back to the variable:

let balance = 100;
balance /= 4;

console.log(balance); // 25
Remember there's a compound assignment operator for every operator in JavaScript. So, apart from the four already mentioned, we also have:

Remainder assignment operator (%=), which divides a variable by the specified number and assigns the remainder to the variable.

Exponent assignment operator (\*\*=), which raises a variable to the power of the specified number and reassigns the result to the variable.

Bitwise AND assignment operator (&=), which performs a bitwise AND operation with the specified number and reassigns the result to the variable.

Bitwise OR assignment operator (|=), which performs a bitwise OR operation with the specified number and reassigns the result to the variable.

Lesson 7

What are booleans, and how do they work with equality and inequality operators?

In an earlier lecture video, you were first introduced to the concept of booleans, but in this video, we will dive deeper into how booleans work and how the equality and inequality operators work.

Booleans are a data type with only true and false values. They're useful because they allow you to do something based on some conditions. Booleans are essential when you want to evaluate whether something should happen or not, like deciding if someone can access a certain feature in your app. Here is an example of setting the value true to a variable called isOldEnoughToDrive:

let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true
You can use this variable inside a conditional like this:

let isOldEnoughToDrive = true;

if (isOldEnoughToDrive) {
console.log("You're old enough to drive"); // You're old enough to drive
} else {
console.log("Sorry, you are not old enough to drive");
}
A conditional helps you make decisions in your code based on a condition. This example uses what is called an if/else statement.

If isOldEnoughToDrive is true, then the sentence You're old enough to drive will be logged to the console. Otherwise, if the isOldEnoughToDrive is false, then the sentence Sorry, you are not old enough to drive will be logged to the console. Since the isOldEnoughToDrive variable is set to true, the first sentence will be logged to the console. You will learn more about if/else statements in a future lecture video.

To compare two values, you can use either the equality or strict equality operator. The result of the comparison will be a boolean of either true or false. Here is an example of using the equality operator to compare a string and a number. The equality operator is represented by a double equals sign (==).

console.log(5 == "5"); // true
In this example, JavaScript converts the string "5" into the number 5 and then checks if they are equal. Since both values are now the same, the result is true. The equality operator uses type coercion before checking if each value is equal.

This differs from the strict equality operator, which does not perform type coercion. The strict equality operator will check if the types are the same and if the values are the same. Here is an example using the strict equality operator to compare a number and string. This operator is represented by a triple equals sign (===).

console.log(5 === '5'); // false
The following comparison will be false, because a string data type is not the same as a number data type. If you need to check if something is not equal to another value, then you can use the inequality or strict inequality operators. Here is an example of using the inequality operator (!=) to compare a number with a string.

console.log(5 != "5"); // false
In this example, the result would be false because the inequality operator first converts the string value to a number and then compares the values. Since the values would be the same it will return false. If you tried to use the strict inequality operator, then you would get a different result. The strict inequality operator is represented by an exclamation mark followed by two equal signs (!==).

console.log(5 !== "5"); // true
The result would be true because the strict inequality operator does not perform any type coercion. Since the number 5 is not equal to the string "5", then the result is true.

It is considered best practice to use strict inequality and equality operators whenever possible, as they do not perform type coercion. Most of the time in professional projects, you will see codebases that usually prefer these two operators over the inequality and equality operators.

Lesson 8

What are comparison operators and how do they work?

Comparison operators allow you to compare two values and return a true or false result. You can then use the result to make a decision or control the flow of your program. You use comparisons in if statements, loops, and many other situations where you need to make decisions based on certain conditions. Let's dive into the most common comparison operators and see how they work.

The greater than operator, represented by a right-angle bracket (>), checks if the value on the left is greater than the one on the right:

let a = 6;
let b = 9;

console.log(a > b); // false
console.log(b > a); // true
The greater than or equal operator, represented by a right-angle bracket and the equals sign (>=), checks if the value on the left is either greater than or equal to the one on the right:

let a = 6;
let b = 9;
let c = 6;

console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true
The lesser than operator, represented by a left-angle bracket (<) works similarly to >, but in reverse. It checks if the value on the left is smaller than the one on the right:

let a = 6;
let b = 9;

console.log(a < b); // true
console.log(b < a); // false
The less than or equal operator, represented by a left-angle bracket and the equals sign (<=) checks if the value on the left is smaller than or equal to the one on the right:

let a = 6;
let b = 9;
let c = 6;

console.log(a <= b); // true
console.log(b <= a); // false
console.log(a <= c); // true

Lesson 9
What are unary operators, and how do they work?

Unary operators act on a single operand to perform operations like type conversion, value manipulation, or checking certain conditions. Let's look at some common unary operators and how they work.

The unary plus operator converts its operand into a number. If the operand is already a number, it remains unchanged.

const str = '42';
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // string
console.log(typeof strToNum); // number
Unary plus is handy when you want to make sure you're working with a numeric value. As you might guess, there's a unary negation operator. It negates the value of the operand. It works similarly to the unary plus, except it flips the sign.

const str = '42';
const strToNegativeNum = -str;

console.log(strToNegativeNum); // -42
console.log(typeof str); // string
console.log(typeof strToNegativeNum); // number
The logical NOT operator, represented by an exclamation mark (!), is another unary operator. It flips the boolean value of its operand. So, if the operand is true, it becomes false, and if it's false, it becomes true.

let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true
The bitwise NOT operator is a less commonly used unary operator. Represented by a tilde, ~, it inverts the binary representation of a number. Computers store numbers in binary format (1s and 0s). The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s. You will learn more about binary and bits in a future lecture video.

const num = 5; // The binary for 5 is 00000101

console.log(~num); // -6
In this example, 5 became -6 because by applying the ~ operator to 5, you get - (5 + 1), which equals -6 due to two's complement representation. Two's complement is a way computers represent negative numbers in binary. You probably won't use the bitwise NOT often unless you're working with low-level programming tasks like manipulating bits directly.

The void keyword is a unary operator that evaluates an expression and returns undefined.

const result = void (2 + 2);

console.log(result); // undefined
void is also commonly used in hyperlinks to prevent navigation:

<a href="javascript:void(0);">Click Me</a>
Finally, there is the typeof operator which you learned about in previous lecture videos. This returns the type of its operand as a string.

const value = 'Hello world';

console.log(typeof value); // string

lesson 10

What are bitwise operators, and how do they work?

Bitwise operators in JavaScript are special operators that work on the binary representations of numbers. To understand bitwise operators, we first need to grasp the concept of bits and binary numbers. In computing, a bit is the most basic unit of information. It can have only two values: 0 or 1. Binary is a number system that uses only these two digits to represent all numbers.

For example, the binary representation of the decimal number 10 is 1010. In this system, each digit represents a power of 2, starting from the rightmost digit and increasing as we move left.

1 0 1 0
1 · 23 0 · 22 1 · 21 0 · 20
8 0 2 0
In the table above, the first row shows the binary number 1010, the second row shows the power of 2 represented by each binary position, and the third row shows the result of each multiplication. If you add all the values in the third row, they total 10.

Now, let's dive into bitwise operators. These operators perform operations on the binary representations of numbers. JavaScript provides several bitwise operators, including AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>).

The bitwise AND (&) operator returns a 1 in each bit position for which the corresponding bits of both operands are 1. Here's an example:

let a = 5; // Binary: 101
let b = 3; // Binary: 011
console.log(a & b); // Output: 1 (Binary: 001)
In this example, we perform a bitwise AND operation on 5 (101 in binary) and 3 (011 in binary). The result is 1 (001 in binary) because only the rightmost bit is 1 in both numbers.

The bitwise OR (|) operator returns a 1 in each bit position for which the corresponding bits of either or both operands are 1. For example:

let a = 5; // Binary: 101
let b = 3; // Binary: 011
console.log(a | b); // Output: 7 (Binary: 111)
Here, the result is 7 (111 in binary) because at least one of the bits is 1 in each position.

The bitwise XOR (^) operator returns a 1 in each bit position for which the corresponding bits of either, but not both, operands are 1. For instance:

let a = 5; // Binary: 101
let b = 3; // Binary: 011
console.log(a ^ b); // Output: 6 (Binary: 110)
The result is 6 (110 in binary) because the first and second bits from the right are different in the two numbers.

The bitwise NOT (~) operator inverts all the bits of its operand. For example:

let a = 5; // Binary: 101
console.log(~a); // Output: -6
This might seem surprising, but it's because of how negative numbers are represented in binary using two's complement.

The left shift (<<) operator shifts all bits to the left by a specified number of positions. For example:

let a = 5; // Binary: 101
console.log(a << 1); // Output: 10 (Binary: 1010)
Here, all bits are shifted one position to the left, effectively multiplying the number by 2.

The right shift (>>) operator shifts all bits to the right. For example:

let a = 5; // Binary: 101
console.log(a >> 1); // Output: 2 (Binary: 10)
Here, all bits are shifted one position to the right, effectively dividing the number by 2 and rounding down.

Bitwise operators are often used in low-level programming and cryptography. While they may not be as commonly used in everyday JavaScript programming, understanding them can be beneficial for certain specialized tasks and can deepen your understanding of how computers work at a fundamental level.

Lesson 11

What are conditional statements, and how do if/else statements work?

Conditional statements let you make decisions in your JavaScript code. They allow your program to flow in a particular way based on certain conditions. Let's take a look at how if, else if, else, and the ternary operator work to let you control the flow of your code.

An if statement takes a condition and runs a block of code if that condition is truthy. Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Here are examples of truthy values:

non-empty strings, for example, hello

any number other than 0 and -0, for example, 4, -5, and others

arrays

objects

the boolean true

On the other hand, falsy values are values that evaluate to false in a boolean context. JavaScript has few falsy values, which makes them easy to remember. Here are a few falsy values:

boolean false

0 (zero)

"" (empty string)

null

undefined

NaN (Not a Number)

Now, that we have a basic understanding of truthy and falsy values, let's see how it works with if statements. In this first example, we are using a couple of if statements to check against truthy and falsy values:

if (null) {
console.log("This will not run.");
}

if ("freeCodeCamp") {
console.log("This will run.");
}
Since null is a falsy value, the message inside the block will never be logged to the console. But for the second if statement, the string freeCodeCamp is a truthy value, and will be considered true in this boolean context of the if statement. As a result, the message This will run. will be logged to the console.

Let's take a look at a few more examples on how if statements work with different comparison operators. Here is an example of using an if statement to check if the user is eligible to vote:

const age = 22;

if (age >= 18) {
console.log("You're eligible to vote"); // You're eligible to vote
}
In this example, since age is currently 22, this means the condition will evaluate to true because 22 is greater than or equal to 18. So the message You're eligible to vote will be logged to the console. If we change the example so age is now 15, then the condition will evaluate to false and the message will not be logged to the console:

const age = 15;

if (age >= 18) {
console.log("You're eligible to vote"); // Code not running because age is less than 18
}
When a condition is false, then you can use an else clause:

const age = 15;

if (age >= 18) {
console.log("You're eligible to vote");
} else {
console.log("You're not eligible to vote"); // You're not eligible to vote
}
In this example, 15 is not greater than or equal to 18, so the condition would be false. The code inside the else block will run in this case.

If you want to check multiple conditions, you can use an else if block. This allows your program to choose between more than two paths.

const score = 87;

if (score >= 90) {
console.log('You got an A');
} else if (score >= 80) {
console.log('You got a B'); // You got a B
} else if (score >= 70) {
console.log('You got a C');
} else {
console.log('You failed! You need to study more!');
}
Since the score is currently 87, then the message of You got a B would be logged to the console.

The ternary operator is a compact way to write simple if/else statements. It has three parts: a condition, a result if the condition is true, and a result if it is false. Here's the basic syntax:

condition ? expressionIfTrue : expressionIfFalse;
Here's an example dealing with weather temperatures in Celsius:

const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
If temperature is greater than 25, the code above logs It's a sunny day!. If temperature is ever less than 25, it logs It's a cool day!.

So, which should you use between an if statement and a ternary? Use a ternary while dealing with a single condition or single expressions, or when you want a compact syntax for simple logic. Use if/else statements when you're dealing with complex conditions and multiple statements, as things become unreadable if you nest ternaries.

lesson 12
What are binary logical operators, and how do they work?

Binary logical operators help you evaluate two expressions and return a result based on their truthiness. Let's look at the three most common binary logical operators: logical AND, logical OR, and the nullish coalescing operator.

The logical AND operator is represented by a double ampersand (&&). It checks if both operands are true and returns a result. If both operands are truthy, it returns the second value, that is, the one on the right:

const result = true && 'hello';

console.log(result); // hello
In the example above, the text hello is logged to the console because both operands are true. If either operand is falsy, it returns the falsy value:

const result = 0 && 3;

console.log(result); // 0
Since 0 is a falsy value, the number 0 is logged to the console. And if both operands are falsy, it returns the first falsy value:

const result = false && 0;

console.log(result); // false
Since false is a falsy value, then false is logged to the console. The logical AND operator is useful when you want to check multiple conditions and ensure that all are true before proceeding. Here is an example:

if (2 < 3 && 3 < 4) {
console.log('The if block runs');
} else {
console.log('The else block runs');
}
In the condition, since 2 is less than 3 AND 3 is less than 4, then the sentence The if block runs will be logged to the console.

The logical OR operator checks if at least one of the operands is truthy. If the first operand is truthy, it returns that value:

const result = 'This is truthy' || false;

console.log(result); // This is truthy
If the first operand is falsy but the second is truthy, the second value will be logged to the console:

const result = 0 || 'This is truthy';

console.log(result); // This is truthy
It is common to use the logical OR operator in if/else statements like this:

let userInput;

if (userInput || 'Guest') {
console.log('A user is present');
} else {
console.log('No user detected');
}
Since we didn't assign a value to the userInput variable, it is currently undefined. The condition in the if statement checks if either the userInput variable or the string Guest are truthy. Since the string Guest is true in a boolean context like this, the string A user is present will be logged to the console.

The nullish coalescing operator is more sophisticated than logical OR and logical AND. Represented by a double question mark (??), it helps in scenarios where you want to return a value only if the first one is null or undefined. Here is an example of working with the nullish coalescing operator:

const result = null ?? 'default';

console.log(result); // default
Since null is a falsy value, the string default would be logged to the console. The nullish coalescing operator is incredibly useful in situations where null or undefined are the only values that should trigger a fallback or default value. Here is an example of dealing with a user's preference settings:

const userSettings = {
theme: null,
volume: 0,
notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light
In the example above, we have an object called userSettings that contains theme, volume and notifications properties. We are accessing the theme using dot notation like userSettings.theme. You will learn more about how to work with objects in a future lecture video. Since the user's theme is currently set to null, then the string light will be logged to the console.

Lesson 13

What is the Math object in JavaScript, and what are some common methods?

When diving into JavaScript, you'll quickly discover that performing mathematical operations is a common task. While basic arithmetic operators can handle simple calculations, JavaScript offers a built-in Math object to tackle more complex math challenges.

This handy tool provides a variety of methods that make it easier to perform advanced calculations and manipulate numbers. Let's explore these methods and see how they can simplify your coding experience.

The Math.random() method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the possible output can be 0, but it will never actually reach 1. Here is an example working with the Math.random() method:

const randomNum = Math.random();

console.log(randomNum);
// any number between 0 and 1 – 0 inclusive and 1 exclusive
Math.min() and Math.max() both take a set of numbers and return the minimum and maximum value, respectively. Here is an example of working both of those methods:

const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9
The first console.log() will log the number 1, since 1 is the smallest in that list of numbers. And the second console.log() will log the number 9, since 9 is the largest numbers in that list.

If you wanted to round numbers up or down to the nearest whole integer, you could use the Math.ceil() and Math.floor() methods. Here is an example of working with Math.ceil():

console.log(Math.ceil(4.3)); // 5
Math.ceil() will round 4.3 up to the nearest whole integer, which is 5 in this case. Now, let's take a look at rounding a number down:

console.log(Math.floor(4.7)); // 4
Math.floor() will round 4.7 down to the nearest whole integer, which is 4 in this case. Math.round() is the hybrid of Math.ceil() and Math.floor(). It rounds a number to its nearest integer, taking the decimal point into account:

console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5
So, if the decimal point is less than 5, the number is rounded down. And if the decimal point is 5 or greater, the number is rounded up. A practical application of Math.floor() and Math.random() is to generate a random number between two whole numbers. Here's the syntax for that:

Math.floor(Math.random() \* (max - min)) + min;
Generating a random number between 20 and 1 would look like this:

const randomNumBtw1And20 = Math.floor(Math.random() \* 20) + 1;
console.log(randomNumBtw1And20);
Another helpful Math method would be the Math.trunc() method. Math.trunc() removes the decimal part of a number, returning only the integer portion, without rounding:

console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9
If you need to get the square root or cube root of a number, you can use the Math.sqrt() and Math.cbrt() methods, respectively:

console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3
The first log statement, will log 9 because the square root of 81 is 9, while the second log statement will log 3 because the cube root of 27 is 3. If you need to get the absolute value of a number, you can use the Math.abs() method:

console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5
Math.abs() returns the absolute value of a number, turning negatives into positives. The last method we will look at will be the Math.pow() method:

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64
Math.pow() takes two numbers and raise the first to the power of the second. There are many more methods that belong to the Math object, that you can explore on your own. However, these are just a few of the more commonly used ones found in JavaScript codebases.
