//In the previous lectures, you learned how to work with higher order functions like map, filter and reduce. 


//Step 1
//In the previous lectures, you learned how to work with higher order functions like map, filter and reduce.
//In this workshop, you will build a library manager app that will give you an opportunity to practice working with different higher order functions.
//To get started, create a variable called library and assign it an empty array.

let library = [
//Step 2
//Inside the library array, create an object with the following properties and values:

    {
    title:"Your Next Five Moves: Master the Art of Business Strategy", 
     author: "Patrick Bet-David and Greg Dinkin" , 
     about: "A book on how to plan ahead", 
     pages: 320},

     {
        title: "Atomic Habits" , 
        author: "James Clear",
        about: "A practical book about discarding bad habits and building good ones",
        pages: 320
     },

     {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },

  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },

  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },

  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },

  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },

  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },

];


//Step 4
//The rest of the objects representing the books have been filled in for you. Now would be a good time to start working on displaying the book information in the console. 
// Over the next few steps, you will learn how to work with the map() method to achieve this goal.
// Begin by logging the message "Books in the Library:\n" to the console. 
// The newline character is added here because there should be a space between this message and the list of books.
console.log("Books in the library:\n");


//Step 5
//Next, create a function called getBookInformation with one parameter. This parameter will represent the array of books when the function is called. You can name this parameter whatever you like.


//step 6 In prior lectures, you learned about the map() method which creates a new array by applying a given function to each element of the original array.
function getBookInformation (arr) {
   return arr
   .map(item => `${item.title} by ${item.author}`)//step8
   .join("\n");//step 9
}

console.log(getBookInformation(library));//step 7

//step 7 console log result




//Step 8
//The array of book titles is nice, but it would be nice to display the title and author for each book Update your use of the map() method to instead return an array of strings in this format: TITLE by AUTHOR.

//You will need to use either template literals or string concatenation with the + operator to achieve this result.


//Step 9
//While the array of results is working, the final desired result should be a string listing all of the books with a title and author.
//This is where the join() method comes in. In earlier lectures, you learned that the join() method is used to return a new string of all of the array elements concatenated into a single string, with a specified separator between each element.

//Step 10
//For the next part of the workshop, you will focus on displaying a list of book summaries to the console.
console.log("\nList of book summaries:\n");

//Step 11
//To get a list of book summaries, you can use the about property of each book.

//Create a getBookSummaries function with a single parameter, accepting an array with book objects. You can name the parameter whatever you like.

//The getBookSummaries function should return an array of strings representing the summary for each book.

function getBookSummaries (arr) {
return arr
.map(item => item.about )
.join("\n");
}
console.log(getBookSummaries(library));



//For this next part of the workshop, you are going to learn how to display a list of books by author.
//Begin by logging the message "\nList of books by Arvid Kahl:\n" to the console.
console.log("\nList of books by Arvid Kahl:\n");



//Step 14 Create a getBooksByAuthor function with two parameters - an array with book objects and a string with the author.
//The function must return an array that contains the books by a particular author.
//In earlier lectures, you learned how to work with the filter() method which is used to return a new array of filtered results.
//Here is an example:

//Example Code
//const developers = [
  //{ name: "Alice", city: "New York", age: 30 },
  //{ name: "Bob", city: "San Francisco", age: 25 },
 // { name: "Charlie", city: "New York", age: 35 },
 // { name: "Diana", city: "Chicago", age: 28 }
//];

//const newYorkCityDevelopers = developers.filter(dev => dev.city === "New York");

//console.log(newYorkCityDevelopers);
/*
[
  { name: "Alice", city: "New York", age: 30 },
  { name: "Charlie", city: "New York", age: 35 }
]
*/

function getBooksByAuthor (books, author){
return books.filter(book => book.author === author);
}
 console.log(getBooksByAuthor(library, "Arvid Kahl"));
 console.log("\nList of books by James Clear:\n");
 console.log(getBooksByAuthor(library, "James Clear"))
 console.log("\nTotal number of pages for all library books:\n");

function getTotalePages (arr) {
    return arr.reduce((acc,curr) => acc + curr, 0);
}
console.log(getTotalePages(library));

 //For the last step of the workshop, you will review how to work with the reduce() method. This method is used to process an array and condense it into a single value.

//Here is an example:

//Example Code
///const numbers = [1, 2, 3, 4, 5];
//const sum = numbers.reduce((acc, curr) => acc + curr, 0);

//console.log(sum); // 15
//In the following example, the reducer function takes acc (which starts at 0, as specified by the second argument to reduce) and adds each number to it. This will return a sum of 15.

//Create a getTotalPages function with a single parameter, accepting an array with book objects. The function should return the total number of pages in the books from the array passed to the function.

//Lastly, add a console.log(getTotalPages(library)) below your getTotalPages function to see the result.

//With that, your library manager workshop is complete!