//In this lab, you will practice truncating a string at a certain length.
function truncateString(str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num) + "...";
    }
}

function secondaryTruncate(str , num){
if(str.length <= num){
    return str ;
}else{
    return str.slice(0, num) = "...";
}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // "A-tisket..."
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)); // "Peter Piper..."
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); // full string
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); // full string
console.log(truncateString("A-", 1)); // "A..."
console.log(truncateString("Absolutely Longer", 2)); // "Ab..."


// This function shortens a string to a specified number of characters (num).
// If the original string is longer than num, it slices the string to that length
// and appends "..." to indicate truncation.
// If the string is shorter than or equal to num, it returns the original string untouched.
//
// Example:
// truncateString("Peter Piper picked a peck", 11) → "Peter Piper..."
// truncateString("Short", 10) → "Short"
