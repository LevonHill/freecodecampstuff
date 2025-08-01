//In this workshop, you will create a recipe tracker using JavaScript objects.
//Create an object named recipe1. Inside the recipe1 object, create a name property with the value "Spaghetti Carbonara".
//how to basically build real obj....
const recipes = [];
let recipe1 = {name:"Spaghetti Carbonara", ingredients: ["spaghetti", "Parmesan cheese", "pancetta","black pepper" ], ratings: [4, 5, 4, 5] , cookingTime: 22, totalIngredients: null ,difficultyLevel: "",averageRating: null};
let recipe2 = {name: "Chicken Curry", ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"], ratings: [4, 5, 5, 5] ,cookingTime: 42, totalIngredients: null ,difficultyLevel: '' , averageRating: null};

//Before you move on, you should practice how to access properties from an object. You can use either dot (.) or bracket ([]) notation to do this. Here's an example:

    const recipe1Name = recipe1["name"] ;  
    const recipe2Name  = recipe2["name"];
  const recipe1CookingTime = recipe1.cookingTime;
   const recipe2CookingTime  = recipe2.cookingTime;

   console.log(recipe1Name, recipe2Name , recipe1CookingTime , recipe2CookingTime);//

   //or 
console.log(recipe1Name);
console.log(recipe2Name);
console.log(recipe1CookingTime);
console.log(recipe2CookingTime);