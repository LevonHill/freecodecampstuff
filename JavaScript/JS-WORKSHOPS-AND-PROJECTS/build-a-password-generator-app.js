//In this lab, you'll build a password generator app based on the user's input.
function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Set desired password length
const password = generatePassword(12); // You can change 12 to any other number

console.log("Generated password: " + password);



//✅ Breakdown:
//generatePassword(length) accepts a number for how long the password should be.

//Inside it, we loop length times, each time adding a random character from the characters string.

//Math.random() gives a decimal between 0–1, multiplied by characters.length, then rounded down with Math.floor() to get a valid index.

//We return the final password string and assign it to password.

//console.log() prints the result with the proper message.

//Let me know if you want the version that excludes certain symbols or ensures at least one uppercase/lowercase/number/symbol.
