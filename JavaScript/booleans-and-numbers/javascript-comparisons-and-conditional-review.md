<!-- @format -->

JavaScript Comparisons and Conditionals Review
Comparisons and the null and undefined Data Types
Comparisons and undefined: A variable is undefined when it has been declared but hasn't been assigned a value. It's the default value of uninitialized variables and function parameters that weren't provided an argument. undefined converts to NaN in numeric contexts, which makes all numeric comparisons with undefined return false.
Example Code
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
Comparisons and null: The null type represents the intentional absence of a value. When using the equality operator, null and undefined are considered equal. However, when using the strict equality operator (===), which checks both value and type without performing type coercion, null and undefined are not equal:
Example Code
console.log(null == undefined); // true
console.log(null === undefined); // false
switch Statements
Definition: A switch statement evaluates an expression and matches its value against a series of case clauses. When a match is found, the code block associated with that case is executed. A break statement should be placed at the end of each case, to terminate its execution and continue with the next. The default case is an optional case and only executes if none of the other cases match. The default case is placed at the end of a switch statement.
Example Code
const dayOfWeek = 3;

switch (dayOfWeek) {
case 1:
console.log("It's Monday! Time to start the week strong.");
break;
case 2:
console.log("It's Tuesday! Keep the momentum going.");
break;
case 3:
console.log("It's Wednesday! We're halfway there.");
break;
case 4:
console.log("It's Thursday! Almost the weekend.");
break;
case 5:
console.log("It's Friday! The weekend is near.");
break;
case 6:
console.log("It's Saturday! Enjoy your weekend.");
break;
case 7:
console.log("It's Sunday! Rest and recharge.");
break;
default:
console.log("Invalid day! Please enter a number between 1 and 7.");
}
