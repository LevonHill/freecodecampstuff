//const title = document.getElementById("main-heading");

//console.log(title);
//from here we are able to traverse the element of our favorite move container element

//const list = document.getElementsByClassName("list-item");
//console.log(list);//returns an array like structure;

//const listItems = document.getElementsByTagName("li");
//console.log(listItems);//very similiar to the getelm by classname returns array like structure




//const container = document.querySelector("div");
//console.log(container);
//query selector, is used to select one item, or the first items that match the selector thats given, so if you have an element with 
//same name or id , or tag, it'll pick the first one it comes across.. Can use this to grab any element in the html..


//query selector all gets all class , id's , html elements and wont only return one it'll return all whatevers passed.
//const genre = document.querySelectorAll("li");
//console.log(genre);


//lets see how to change the styling of an element...

//const title = document.querySelector("#main-heading");
//title.style.color = 'red';
//console.log(title);

//const listItems = document.querySelectorAll('.list-item');

//for( i = 0; i < listItems.length ; i++){
//listItems[i].style.fontSize = "5rem";
//}
//console.log(listItems);







//creating elements

//const ul = document.querySelector("ul");

//const li = document.createElement('li');

//ADDING ELEMENTS need to append first
//ul.append(li)

//modify the text can use innertext use this , textcontent, and innerhtml
//li.innerText = "The Ring";



//modfiy attribute and classes
//li.setAttribute('id' , 'main-heading');
//li.removeAttribute('id');
//const title = document.querySelector('#main-heading');
//console.log(title);

//li.classList.add('list-item')
//li.classList.add('divider')

//const parentUL = document.querySelector('ul');
//const anotherLi = document.createElement('li');
//parentUL.append(anotherLi)

//anotherLi.innerText = "UnderWorld"
//anotherLi.classList.add('list-item')
//anotherLi.classList.add('divider')

//const yetAnotherUl = document.querySelector('ul');
//const yetAnotherLi = document.createElement('li');

//yetAnotherUl.append(yetAnotherLi)

//yetAnotherLi.innerText = "Alien"
//yetAnotherLi.classList.add('list-item')
//yetAnotherLi.classList.add('divider')

//remove element
//li.remove();



// now lets learn how to navigate the dom
//traverse the dom
// parent node traversal
//child node traversal
//sibling node traversal

//let ul_traverse = document.querySelector('ul');
//to find parent node use
//console.log(ul_traverse.parentNode.parentNode); //allows you to move up the dom tree by parent node
//console.log(ul_traverse.parentElement);//both options move up the dom, use parent node though
//nodes are considered parents ,child or sibling,


//traverse down the dom

//let ul = document.querySelector('ul');
//console.log(ul.firstChild);
//console.log(ul.lastChild);
//console.log(ul.childNodes);

//sibling node traversal
let ul = document.querySelector('ul');
const div = document.querySelector('div');
console.log(ul.previousElementSibling);
console.log(ul.nextSibling);
console.log(ul.nextElementSibling);//no element nnode after ul.
