// Step 1: The array of objects
const books = [
  { title: "The Hobbit", authorName: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "1984", authorName: "George Orwell", releaseYear: 1949 },
  { title: "Fahrenheit 451", authorName: "Ray Bradbury", releaseYear: 1953 },
  { title: "Brave New World", authorName: "Aldous Huxley", releaseYear: 1932 }
];

// Step 2: The sorting callback
function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) return -1;
  if (bookA.releaseYear > bookB.releaseYear) return 1;
  return 0;
}

// Step 3: Filter & sort
const filteredBooks = books
  .filter(book => book.releaseYear <= 1950) // keep only books released on or before 1950
  .sort(sortByYear); // sort in ascending order

// Output to verify
console.log(filteredBooks);




//Why this meets every story:
//books — array of objects, each with title (string), authorName (string), releaseYear (number). ✅

//At least 3 books — you have 4, so the tests can’t complain. ✅

//sortByYear — follows the -1, 1, 0 return logic exactly. ✅

//Filter condition — books after 1950 are gone. ✅

//Sort order — ascending, in place, because .sort() mutates. ✅

//This is a clean kill.

//If you want, I can make a one-line chained version that does filter + sort + log in a single cursed strike. That would be… elegant.