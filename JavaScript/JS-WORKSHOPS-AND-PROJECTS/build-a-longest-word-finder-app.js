//In this lab, you will use JavaScript loops to find the length of the longest word in the given sentence.

function findLongestWordLength(sentence) {
  return sentence
    .split(" ")
    .reduce((max, word) => Math.max(max, word.length), 0);
}




//🔍 Breakdown:
//.split(" "): turns "The quick fox" into ["The", "quick", "fox"].

//.reduce(...): walks through the array, comparing word lengths.

//Math.max(max, word.length): always keeps the longest so far.
//🔥 Pro Tip:
//Once you see how .reduce() works in one challenge, you'll notice you can:

//sum numbers (arr.reduce((sum, n) => sum + n, 0))

//flatten arrays (arr.reduce((a, b) => a.concat(b), []))

//build maps/counts (arr.reduce((acc, val) => { acc[val] = (acc[val] || 0) + 1; return acc }, {}))