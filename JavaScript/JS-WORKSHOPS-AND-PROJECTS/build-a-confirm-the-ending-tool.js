//In this lab, you will implement a function that checks if a string ends with the given target string.
function confirmEnding(str , str2) {
if(str.includes(str2)){
return true;
}else{
    return false;
}
}// my way is to broad, This returns true even if str2 is in the middle of str
console.log(confirmEnding("Hello" , "world"));

//correct way 
function confirmEnding(str, str2) {
  return str.substring(str.length - str2.length) === str2;
}
