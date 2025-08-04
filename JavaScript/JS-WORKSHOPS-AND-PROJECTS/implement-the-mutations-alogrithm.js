
function mutation(arr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const first = arr[0].toLowerCase();
  const second = arr[1].toLowerCase();

  // Check if every character in second exists in first
  return [...second].every(char => first.includes(char));
}


//✅ Explanation:
//arr[0].toLowerCase() – normalize the first word.

//arr[1].toLowerCase() – normalize the second word.

//[...second] – spreads the second word into an array of characters.

//.every() – returns true only if all characters in the second word exist in the first word.

//first.includes(char) – checks if a character exists in the first string.