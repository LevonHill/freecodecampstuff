console.log("Grocery shopping list");

//For this shopping list, you will use an array to represent the items you need to buy. In the previous lecture videos, you learned how to create arrays like this:
//For this shopping list, you will use an array to represent the items you need to buy. in the previous lecture videos, you learned how to create arrays like this:

//Example Code
const fruits = ['apple', 'banana', 'orange'];
//In this step, create a variable called shoppingList and assign it an empty array.

const shoppingList = [];
console.log("It will be nice to have some fruit to eat.");
shoppingList.push("Apples");
function getShoppingListMsg(arr){
    return `Current Shopping List: ${arr}`;
}
shoppingList.push("Grapes");
shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
shoppingList.unshift("Vegetable Oil");
shoppingList.pop();
shoppingList.unshift("Chocolate Cake");
shoppingList.shift();
shoppingList[0] = "Canola Oil";
console.log(getShoppingListMsg(shoppingList));
console.log("It looks like we need to get some cooking oil.");
console.log("This looks like too much junk food.");
console.log("On second thought, maybe we should be more health conscious.");