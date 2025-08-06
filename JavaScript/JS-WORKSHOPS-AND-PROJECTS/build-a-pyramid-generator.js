//In this lab you'll build a pyramid generator.

//You'll take a number as input and generate a pyramid with that many levels using a loop.

function pyramid(char, rows, inverted) {
  let result = "\n";

  for (let i = 0; i < rows; i++) {
    const level = inverted ? rows - 1 - i : i;
    const numChars = 1 + 2 * level;
    const numSpaces = rows - 1 - level;
    result += " ".repeat(numSpaces) + char.repeat(numChars) + "\n";
  }

  return result;
}


//🔍 Breakdown:
//char.repeat(numChars): builds the pyramid row using the correct number of pattern characters.

//" ".repeat(numSpaces): centers the characters by prepending spaces.

//We dynamically adjust which row to build based on whether the pyramid is inverted or not.