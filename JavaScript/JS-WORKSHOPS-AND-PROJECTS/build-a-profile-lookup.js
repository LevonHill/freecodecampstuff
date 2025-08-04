//In this lab, you will build a profile lookup that looks up information about people in a contacts list.

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
console.log(lookUpProfile("Akira", "lastName")); // "Laine"
console.log(lookUpProfile("Harry", "likes"));    // ["Hogwarts", "Magic", "Hagrid"]
console.log(lookUpProfile("Sherlock", "number")); // "0487345643"
console.log(lookUpProfile("Bob", "number"));     // "No such contact"
console.log(lookUpProfile("Akira", "address"));  // "No such property"




//This solution iterates through the contacts array, checking:

//If firstName matches.

//Then whether the given prop exists on the contact.

//And returns the appropriate result based on those conditions.

//Let me know if you want to tweak it to work with lastName lookups or case-insensitive matching.
