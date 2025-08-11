const title = document.getElementById("main-heading");

console.log(title);
//from here we are able to traverse the element of our favorite move container element

const list = document.getElementsByClassName("list-item");
console.log(list);//returns an array like structure;

const listItems = document.getElementsByTagName("li");
console.log(listItems);//very similiar to the getelm by classname returns array like structure




const container = document.querySelector("div");
console.log(container);
//query selector, is used to select one item, or the first items that match the selector thats given, so if you have an element with 
//same name or id , or tag, it'll pick the first one it comes across.. Can use this to grab any element in the html..


//query selector all gets all class , id's , html elements and wont only return one it'll return all whatevers passed.
const genre = document.querySelectorAll("li");
console.log(genre);


//lets see how to change the styling of an element...
