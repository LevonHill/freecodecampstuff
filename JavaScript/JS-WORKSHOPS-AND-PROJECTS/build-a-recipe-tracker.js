//In this workshop, you will create a recipe tracker using JavaScript objects.
//Create an object named recipe1. Inside the recipe1 object, create a name property with the value "Spaghetti Carbonara".
//how to basically build real obj....
const recipes = [];
const recipe1 = {name:"Spaghetti Carbonara", ingredients: ["spaghetti", "Parmesan cheese", "pancetta","black pepper" ], ratings: [4, 5, 4, 5] , cookingTime: 22, totalIngredients: null ,difficultyLevel: "",averageRating: null};
const recipe2 = {name: "Chicken Curry", ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"], ratings: [4, 5, 5, 5] ,cookingTime: 42, totalIngredients: null ,difficultyLevel: '' , averageRating: null};
const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

const updatedRecipes =  recipes.push(recipe1, recipe2 , recipe3);//pushed data from objects into array

console.table(recipes);
console.log(recipes);
//Before you move on, you should practice how to access properties from an object. You can use either dot (.) or bracket ([]) notation to do this. Here's an example:

   // const recipe1Name = recipe1["name"] ;  
   // const recipe2Name  = recipe2["name"];
 // const recipe1CookingTime = recipe1.cookingTime;
  // const recipe2CookingTime  = recipe2.cookingTime;

   //console.log(recipe1Name, recipe2Name , recipe1CookingTime , recipe2CookingTime);//

   //or 
//console.log(recipe1Name);
//console.log(recipe2Name);
//console.log(recipe1CookingTime);
//console.log(recipe2CookingTime);


//In the next few steps you will work on calculating the average rating, the total ingredients, and the difficulty level for each recipe in the recipes array.
function getAverageRating(ratings) {
  const avg = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  return parseFloat(avg.toFixed(2));
}

function getTotalIngredients (ingredients) {
return ingredients.length;
}

function getDifficultyLevel (cookingTime) {
if(cookingTime <= 30 ){
return "easy"
}
else if(cookingTime <= 60){
return "medium"
} 
else{
  return "hard"
}
}
const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.averageRating = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);
recipe2.averageRating = getAverageRating(recipe3.ratings);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)


console.log(recipes);
//my outputs
console.log(recipe1);
console.log(recipe1AverageRating);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);





//console.log(getDifficultyLevel(30));

//onsole.log(getTotalIngredients(recipe1.ingredients));
//console.log(getTotalIngredients(recipe2.ingredients));

//console.log(getAverageRating(recipe1.ratings));
//console.log(getAverageRating(recipe2.ratings));

//🔸 ratings.reduce((sum, rating) => sum + rating, 0)
//This part sums up all the numbers in the ratings array. reduce() is a higher-order function. It loops through the array. It takes two arguments: a callback function (sum, rating) => sum + rating
//and an initial value, which is 0 in this case.Imagine:If ratings = [5, 5, 4, 5], here's how it works: Iteration	sum	rating	sum + rating
//So the result is 19. 🔸 / ratings.length This divides the total by the number of ratings to get the average. In this case: 19 / 4 = 4.75 const avg = 19 / 4; // avg = 4.75
//return parseFloat(avg.toFixed(2));
//Which: .toFixed(2) ➤ turns it into "4.75" (a string, 2 decimals) parseFloat(...) ➤ converts it back into a number
//the function expects an array (e.g. [4, 5, 3, 5, 4]) It sums all elements, then divides by the length to get the average No need for Math.random()—this is math, not chaos

