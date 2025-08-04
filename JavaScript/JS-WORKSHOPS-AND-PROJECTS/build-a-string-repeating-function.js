//In this lab, you will implement loops to repeat a string a specified number of times.

function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";

  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}



//✅ Breakdown:
//if (num <= 0) → handles the edge case and returns an empty string.

//let result = "" → initialize the result string.

//for (let i = 0; i < num; i++) → loop num times.

//result += str → append the string each time.



console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"
console.log(repeatStringNumTimes("x", 0));   // ""
console.log(repeatStringNumTimes("yo", -2)); // ""
console.log(repeatStringNumTimes("*", 5));   // "*****"
