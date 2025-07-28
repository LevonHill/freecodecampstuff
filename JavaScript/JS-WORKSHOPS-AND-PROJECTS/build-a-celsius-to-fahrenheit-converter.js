//In this lab, you will write a function that converts the temperature from Celsius to Fahrenheit. The formula to convert from Celsius to Fahrenheit is:
//fahrenheit = celsius * (9/5) + 32


//function being called
function convertCtoF (param1) {
return param1 * (9/5) + 32;
}

console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));
console.log(convertCtoF(20));
console.log(convertCtoF(30));
//function expression
const converter = num => {
    return num * (9/5) + 32
}
console.log(converter(20));
console.log(converter(0));
console.log(converter(-30));
console.log(converter(-10));
console.log(converter(0));
console.log(converter(20));