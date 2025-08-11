<!-- @format -->

In these lectures, you will learn how to work with the Document Object Model (DOM), the addEventListener() method and events, and web APIs.

Lesson 1
What Is an API, and What Are Web APIs?
Let's learn about APIs and why they’re essential for web development. API stands for Application Programming Interface. APIs establish a set of rules and protocols that allow software applications to communicate with each other and exchange data efficiently.

You can think of them as constructs that allow developers to create more complex functionality based on simpler building blocks that are already implemented.

There are various types of APIs. Web APIs are specifically designed for web applications. There are different types of web APIs for client-side JavaScript development. They are not part of JavaScript itself.

These types of APIs are often divided into two main categories: browser APIs and third-party APIs.

Browser APIs expose data from the browser. As a web developer, you can access and manipulate this data using JavaScript.

They also provide access to various functionalities, such as manipulating the structure of the website, handling events, working with storage, and communicating with the network.

Some examples of commonly used Browser APIs include:

The DOM API, which you can use to manipulate HTML elements, their styles, and attributes. You will learn much more about the DOM in the coming lectures. It’s a core concept in web development.

The Storage API, to store data locally on the user’s device.

And more.

There are various browser APIs that you can use to handle user interactions and to get more information from the browser, like the user's current location.

You can also work with other types of elements, such as video and audio.

Browser APIs can be helpful tools for building powerful web applications. They already come built into the browser.

But you can also use third-party APIs, which are not built into the browser by default. To use them, you need to retrieve their code in some way. Typically, they come with detailed documentation explaining how to use their services.

An example is the Google Maps API, which you can use to display interactive maps on your website.

There are various types of third-party web APIs, including weather APIs, social media APIs, payment APIs, data APIs, translation APIs, and more. You just need to find the API that fits your needs.

Web APIs are essential tools for building modern web applications that can interact with various services and data sources. By learning how to leverage their power, you will expanding your toolset for creating dynamic and engaging websites.

Lesson 2

What Is the DOM, and How Do You Access Elements?
Let's learn about the DOM and why it's so important for web development. DOM stands for Document Object Model. It's a programming interface that lets us interact with HTML documents.

With the DOM, you can add, modify, or delete elements on a webpage. You can even make your website interactive by making elements listen to and respond to events.

In the DOM, an HTML document is represented as a tree of nodes. Each node represents an HTML element from the HTML document:

Example Code

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1>What is the DOM?</h1>
    <h2>Let's learn about the DOM</h2>
  </body>
</html>
This is a diagram representing the basic DOM structure of our example:

Example Code
Document
========

## HTML

- Head
  - Title
- Body
  - H1
  - H2  
    Of course, this can be more detailed and complex based on the structure of the HTML markup of a webpage.

The HTML document is the root node in the DOM hierarchy. It has one child node, the html element. This is the root element of the HTML document, since all other nodes descend from it.

The html element has two children: head and body.

The head element contains metadata about the document. It provides essential information about the webpage.

The body element contains the visible content of the webpage.

You can access these elements with JavaScript, work with them in your code, and even modify them dynamically. That's the power of the DOM and web APIs.

To access these elements in JavaScript, you can use getElementById() and querySelector() methods. These methods are web APIs because they provide standardized ways to interact with the DOM using JavaScript.

With getElementById(), you can get an object that represents the HTML element with the specified id. Remember that ids must be unique in every HTML document, so this method will only return one Element object. Here you can see an example:

Example Code
const container = document.getElementById("container");
This line of JavaScript code gets an element with the id value of container and assigns that object to a JavaScript constant. You must pass the id within quotation marks as an argument. If you log this object to the console, you will see it in the output:

Example Code
console.log(container); // <div id="container">...</div>
querySelector() is broader than getElementById(). With querySelector(), you can get the first element in the HTML document that matches the CSS selector passed as argument. In this example, you will get the first element with the class section and assign it to a variable:

Example Code
const section = document.querySelector(".section");
You also have other methods to match multiple elements, like getElementsByClassName() and querySelectorAll(). You'll learn more about them in a coming module.

By understanding how to use web APIs to manipulate the DOM efficiently, you can create powerful and interactive web applications.

Lesson 3
How Do DOM Nodes Exist Relative to Each Other in the DOM Tree?
Let's learn about DOM nodes and their relationships in the DOM tree.

Just as a real tree has large and small branches connected in a hierarchical structure, DOM nodes also have direct and indirect relationships with one another. We will use this example to illustrate these relationships:

Example Code

<!DOCTYPE html>
<html>
  <head>
    <title>DOM Tree Example</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <p>Paragraph 1</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </body>
</html>
Let's start at the top. The root of the DOM tree is the html element. It's the top-level container for all the content of an HTML document. All other nodes are descendants of this root node.

Then, below the root node, we find other nodes in the hierarchy. A parent node is an element that contains other elements. A child node is an element that is contained within another element.

In this example, the body element is the parent of the paragraph element while the paragraph element is a child of the body element. These elements are represented as nodes in the DOM tree with the same relationships.

Just like we have parent nodes and child nodes, we also have sibling nodes. Sibling nodes are elements that share the same parent. In our example, two list item elements share the same unordered list parent, so they are siblings.

Similarly, the h1 and paragraph elements are siblings because they share the same parent, the body element.

We also have indirect relationships across different levels in the hierarchy. Descendant nodes are elements that are contained within another element, either directly or indirectly. An element is considered a descendant of another one if it can be reached by going through the DOM tree downwards from its ancestor.

In our example, the list item li elements are descendants of the body element, since they are indirectly contained within it.

An ancestor node is an element that is higher up in the DOM tree hierarchy than another element. In our example, the body element is an ancestor of the list item li elements.

Understanding these relationships is essential for manipulating and navigating the DOM tree using JavaScript.

Lesson 4

What Is the querySelectorAll() Method, and When Should You Use It?
Let's learn about the querySelectorAll() method. You can use this method to get a list of all the DOM elements that match a specific CSS selector.

This is how you can call the querySelectorAll() method:

Example Code
document.querySelectorAll(selectors);
Call it on the document object and pass a string with the CSS selectors as an argument. The argument must be a valid CSS selector string. Otherwise, a SyntaxError exception will be thrown.

querySelectorAll() returns a NodeList object, a collection of nodes that match the specified CSS selector.

The list will contain one Element object for each element that matches the CSS selectors. If no matches are found, the list will be empty.

The elements will be in the order in which they appear in the HTML document. For example, you can match all elements of a specific type:

Example Code
document.querySelectorAll("div");
All elements with a specific class:

Example Code
document.querySelectorAll(".rounded");
All elements with a specific ID:

Example Code
document.querySelectorAll("#logo");
Or all elements with a specific attribute, like all links that take users to a specific URL:

Example Code
document.querySelectorAll("a[href='https://www.freecodecamp.org/']");
You can also use more complex CSS selectors, like this one, which matches all list items within an unordered list element with the class ingredients:

Example Code
document.querySelectorAll("ul.ingredients li");
Since the method will return a collection of nodes, you can assign this collection to a variable and use it in your programs to work with the individual elements, like you can see in this example with the general syntax:

Example Code
const matches = document.querySelectorAll(selectors);
For example, if you have this unordered list with three list items:

Example Code

<ul class="ingredients">
  <li>Flour</li>
  <li>Cheese</li>
  <li>Water</li>
</ul>
You can call the querySelectorAll() method to match all list items within the unordered list with the class ingredients and assign the return value to the matches constant:

Example Code
const matches = document.querySelectorAll("ul.ingredients li");
This will return a collection of three nodes. Each node represents a list item element:

Example Code
// NodeList(3)
{
0: `<li>Flour</li>`,
1: `<li>Cheese</li>`,
2: `<li>Water</li>`,
length: 3,
}
You can work with this collection exactly like you would work with any other JavaScript array.

For example, you can show it in the console with console.log():

Example Code
console.log(matches);
You can also check the length of the collection with the length property:

Example Code
console.log(matches.length);
The output will be an integer representing the number of nodes in the collection:

Example Code
3
You can also access the individual elements of the collection with their corresponding indices. The first element will be at index 0:

Example Code
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
This is the output:

Example Code

<li>Flour</li>
<li>Cheese</li>
<li>Water</li>
The elements are printed one by one on the console.

You can also iterate over the elements with a for loop:

Example Code
for (let i = 0; i < matches.length; i++) {
console.log(matches[i]);  
}
The output will be exactly the same in this case. But this can be very powerful for working with all the elements of the collection.

The querySelectorAll() method in JavaScript is a powerful tool for selecting multiple elements based on their CSS selectors. With this method, you can select specific elements within your web pages and manipulate them as needed.

Lesson 5
How Do You Create New Nodes Using innerHTML and createElement()?
Let's see how you can create nodes with innerHTML and createElement().

We'll start with innerHTML.

innerHTML is a property of Element objects that you can use to set their HTML markup. With innerHTML, you can set the HTML structure of an existing element with a string, creating all the necessary nodes.

This is an example. We have an empty div and we'll add some elements within it using the innerHTML property:

Example Code

<div id="container">
  <!-- Add new elements here -->
</div>
First, we need to select the element by its ID:

Example Code
const container = document.getElementById("container");
Then, we set the innerHTML property of the container to a string. This string has to have all the markup necessary to represent the nodes and the structure that you want to create. You can think of it as writing HTML within a string.

Example Code
container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";
We will set the innerHTML of this element to an unordered list of pizza ingredients (cheese and tomato).

You can also write the string on multiple lines if it makes the markup easier to understand. The important thing is that the markup accurately represents the HTML structure you want to create.

After running this code, you will see the following HTML structure if you inspect your markup.

Example Code

<div id="container">
  <ul>
    <li>Cheese</li>
    <li>Tomato</li>
  </ul>
</div>
The new nodes were created and added dynamically to the DOM after the string was parsed.

innerHTML can be very helpful for certain scenarios. However, it does have some security risks that you should be familiar with. You shouldn't use it if you won't have full control over the string.

For example, if the string will be entered by the user, you shouldn't use innerHTML because the user might insert malicious content into your website. Because of this, it’s usually recommended to use textContent instead, to insert plain text.

Another way to create a new node is by using the createElement() method. With this new method, you can create a new element by specifying its tag name.

For example, if you want to create an image element, you would pass the img tag as a string when calling this method:

Example Code
document.createElement("img");
And you can assign this new object to a variable:

Example Code
const img = document.createElement("img");
The createElement() method returns a new HTMLElement object if the document is an HTMLDocument. Else, it returns an Element object.

Once you have this new element ready, you can add it to the DOM as a child of another existing element using the appendChild() method, or you can insert it at a specific location using other methods. Choose the one that best fits your needs.

Creating nodes with innerHTML and createElement() allows you to dynamically manipulate the structure and content of your websites. By combining these techniques, you can build interactive web applications.

Lesson 6

What Is the Difference Between innerText, textContent, and innerHTML?
Let's learn about innerText, textContent, and innerHTML.

These are properties that you can access in JavaScript to get or change the content of an HTML element. Even if they may look very similar at first, they do have key differences. Choosing the right one depends on your specific use case, so let's dive in.

Let's start with innerText.

innerText represents the visible text content of the HTML element and its descendants. This property doesn't include hidden text or HTML tags, only rendered text.

For example, here you can see a div element that contains two paragraphs:

Example Code

<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
If we get a reference to this HTML element in our JavaScript code using getElementById(), we can access the innerText property of this element:

Example Code
const container = document.getElementById("container");
console.log(container.innerText);
This is the inner text of this element:

Example Code
Hello, World!
I'm learning JavaScript
The property returns a string with the text contained within the element, including text from its descendants.

You should know that innerText only returns the text that is visible at the particular moment when the string is requested. If a child element is hidden, its text won't be visible.

This is an example where the second paragraph is hidden:

Example Code

<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
If we try to log the innerText again, now the output won’t have the text of the second paragraph:

Example Code
console.log(container.innerText);
This will be the output:

Example Code
Hello, World!
You can set the innerText of an HTML element like this, but this will replace the existing text and add a line break element (br) element for every line break:

Example Code
container.innerText = "JavaScript is awesome!";
Since innerText takes visibility into account, getting its value triggers a process called "reflow", that recalculates the position of certain elements on the website. This process can be computationally intensive, so you should avoid triggering it if possible.

Great. Now let's talk about textContent.

textContent returns the plain text content of an element, including all the text within its descendants.

The most important difference between innerText and textContent is that textContent always returns the full text content of an HTML element and its descendants, regardless of whether it's visible or hidden.

Here we have the same example in HTML:

Example Code

<div id="container">
  <p>Hello, World!</p>
  <p>I'm learning JavaScript</p>
</div>
If you try to access this property, you'll see the text of the element and its descendants as the output, keeping the indentation and spacing:

Example Code
const container = document.getElementById("container");
console.log(container.textContent);
Example Code
Hello, World!
I'm learning JavaScript
If an HTML element is not visible, like you can see over here, where we’ve hidden the second paragraph, its text will still be included in this property:

Example Code

<div id="container">
  <p>Hello, World!</p>
  <p hidden>I'm learning JavaScript</p>
</div>
You will see the same output:

Example Code
Hello, World!
I'm learning JavaScript
textContent will also include the content of elements like script and style.

If you try to replace the value of textContent on a node, it will remove all its child nodes and replace them with a single text node containing the new string:

Example Code
const container = document.getElementById("container");
container.textContent = "Hello, World!";
And finally, let's talk about how textContent and innerText differs from innerHTML.

Remember that with innerHTML you can set the inner HTML content of an element. This is helpful for injecting new HTML into the DOM dynamically.

However, remember that this poses a security risk if you don't have control over the string, such as strings containing data entered by the user. If that data is malicious, it can lead to serious security issues.

To avoid this, it's recommended to use the textContent property to insert plain text instead.

The innerText, textContent, and innerHTML properties in JavaScript provide different ways to access and manipulate the content of HTML elements. You should understand the differences between these properties if your goal is to work with HTML content in JavaScript effectively.

Lesson 7

How Do You Add and Remove Nodes from the DOM with appendChild() and removeChild()?
There will be times where you will need to add or remove nodes from the DOM and there are a couple of Web APIs you can use.

In this lecture, we will cover the appendChild() and removeChild() methods.

The appendChild() method is used to add a node to the end of the list of children of a specified parent node.

Here is the basic syntax for the appendChild() method:

Example Code
parentNode.appendChild(newNode);
Let's take a look at an example to better understand how to use the appendChild() method.

In this example, we have an unordered list element with an ID of desserts inside the HTML. This list contains two list items of Cake and Pie:

Example Code

<ul id="desserts">
  <li>Cake</li>
  <li>Pie</li>
</ul>
To access that list inside the JavaScript file, we can use the getElementById() method:

Example Code
const dessertsList = document.getElementById("desserts");
We have a variable called dessertsList that stores the reference to the ul element with the ID of desserts.

Then we need to create a new list item element using the createElement() method:

Example Code
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");
The following code will create a new list item element and store it in a variable called listItem.

To add that node to the end of the list of children of the ul element, we can use the appendChild() method:

Example Code
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

dessertsList.appendChild(listItem);
If you were to run this code, you will see that a new list item element is added to the end of the list of children of the ul element.

The problem is that the new list item element is empty. To add text content to the new list item element, you can use the textContent property:

Example Code
const dessertsList = document.getElementById("desserts");
const listItem = document.createElement("li");

listItem.textContent = "Cookies";
dessertsList.appendChild(listItem);
Now the list will show Cake, Pie, and Cookies.

To remove a node from the DOM, you can use the removeChild() method.

Here is the basic syntax for the removeChild() method:

Example Code
parentNode.removeChild(childNode);
Let's take look at an example where we want to remove that last paragraph element from this section element:

Example Code

<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
  <p>second paragraph</p>
</section>
We can access the section element inside of the JavaScript file using the getElementById() method:

Example Code
const sectionEl = document.getElementById("example-section");
Once we have the reference to the section element, we can then access that last paragraph using the querySelector() method:

Example Code
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");
We are using the :last-of-type pseudo-class to select the last paragraph element inside the section element.

Now that we have the parent and child nodes, we can remove the last paragraph element from the section element using the removeChild() method:

Example Code
const sectionEl = document.getElementById("example-section");
const lastParagraph = document.querySelector("#example-section p:last-of-type");

sectionEl.removeChild(lastParagraph);
Here is the new HTML markup after removing the last paragraph element:

Example Code

<section id="example-section">
  <h2>Example sub heading</h2>
  <p>first paragraph</p>
</section>
So, when might you want to add or remove nodes from the DOM?

If you're working with dynamic content, you might need to add or remove nodes from the DOM. Real world examples include shopping carts, to-do lists, and social media feeds.

Lesson 9
How Do the Navigator, Window, and Document Work?
When working with the DOM, you will often come across the Navigator, Window, and Document interfaces. An interface is a collection of methods and properties that define a particular object.

In this lecture, we will explore how these interfaces work and how you can use them in your web applications.

Let's start by looking at the Navigator interface.

The Navigator interface provides information about the browser environment, such as the user agent string, the platform, and the version of the browser. A user agent string is a text string that identifies the browser and operating system being used.

Here is an example of how to access the user agent string using the Navigator interface:

Example Code
console.log(navigator.userAgent);
The result will be a string that contains information about the browser and operating system being used.

Here is an example string that you might see:

Example Code
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36
This could be helpful if you want to display different content based on the user's browser or operating system.

Another useful property of the Navigator interface is the language property, which returns the language of the browser. You can use this property to display content in the user's preferred language.

Here is an example of using the language property:

Example Code
console.log(navigator.language);
The result will be a string that contains the language code of the browser. If your preferred language is English, it will return en-US.

Next, let's look at the Window interface.

The Window interface represents the browser window that contains the DOM document. It provides methods and properties for interacting with the browser window, such as resizing the window, opening new windows, and navigating to different URLs.

Here is an example of working with the innerWidth property of the Window interface:

Example Code
console.log(window.innerWidth);
The result will be the width of the browser window in pixels. For example, if the browser window is 800 pixels wide, it will return 800.

Another example would be the location property of the Window interface, which provides information about the current URL of the browser window:

Example Code
console.log(window.location);
The result will be an object that contains information about the current URL, such as the protocol, hostname, and pathname.

Most of the time you won't need to interact with the Window interface directly, as it is automatically available in the global scope of your JavaScript code.

For example, you can access the location property directly without using the window object:

Example Code
console.log(location);
You will see the same results as before when you were using window.location.

Finally, let's look at the Document interface.

The Document interface represents the DOM document that is displayed in the browser window. It provides methods and properties for interacting with the DOM, such as selecting elements, creating new elements, and modifying the content of elements.

Here is an example of using the document.children property:

Example Code
console.log(document.children);
The result will be an HTMLCollection object that contains all the child elements of the document.

There are many more properties and methods available on the Document, Window, and Navigator interfaces. However, this lecture has provided you with a basic understanding of how these interfaces work and how to use them in your web applications.

Lesson 10

How Do You Add Attributes with setAttribute()?
You have been used to working with attributes in your HTML and CSS projects. But did you know that you can add attributes to your HTML elements in your JavaScript file?

In this lecture, you will learn how work with the setAttribute() method to add attributes to your HTML elements.

Here is the basic syntax:

Example Code
setAttribute(attribute, value);
Let's take a look at a few examples to better understand how to use the setAttribute() method.

In this first example, we have a p element inside the HTML:

Example Code

<p id="para">I am a paragraph</p>
To add a class attribute we first need to access that p element using the getElementById() method. Then we can use the setAttribute() method to add the class attribute and set the value to my-class:

Example Code
const para = document.getElementById("para");
para.setAttribute("class", "my-class");
If we inspect the element inside the browser, we will see that the class attribute has been added to the p element.

If you have an existing attribute on an HTML element, you can update its value using the setAttribute() method.

In this example we have a div element with a class attribute set to my-class:

Example Code

<div class="my-class"></div>
To update the class attribute value to example, we can use the setAttribute() method again:

Example Code
const divEl = document.querySelector(".my-class");
divEl.setAttribute("class", "example");
If we inspect the element inside the browser, we will see that the class attribute value has been updated to example.

So, what are some real-world examples of when to use the setAttribute() method?

If you were building a dynamic image gallery, you might need to update the src attribute of an image element when a user clicks on a thumbnail.

Another example would be if you're dealing with form validation and need to add certain attributes like required or minlength to an input element.

Lesson 11

What Is the Event Object?
The Event object is a payload that triggers when a user interacts with your web page in some way. These interactions can be anything from clicking on a button or focusing an input to shaking their mobile device.

Like all JavaScript objects, the Event object has a number of properties that might be helpful. The properties available depend on the event that triggered this payload.

All Event objects will have the type property. This property reveals the type of event that triggered the payload, such as "keydown" or "click". These values will correspond to the same values you might pass to addEventListener(), where you can capture and utilize the Event object.

Event objects will always have the target property. The target property is a reference to whatever object triggered the event. Most commonly, this will be some sort of HTMLElement object, or the Document or Window objects. But it can also be something more specific, like an AudioContext.

Events also have methods, which are functions exposed as properties on the object. One commonly used method is preventDefault(), which prevents the default behavior of the event when called.

If you want to handle form submissions yourself, for example, you might call preventDefault() to keep the browser from trying to submit the form data as a POST request. You will learn more about POST requests in future lectures.

You'll also likely run in to the stopPropagation() method. This method prevents the event from bubbling up or propagating to parent elements. You'll learn more about what this means in a later lecture.

There are also a large number of properties that are specific to certain implementations of the Event object. For example, a FetchEvent will have a request property to contain the request that triggered the event.

If you are ever unsure of what properties are available, you can log the Event object in question or even check the documentation.

Lesson 12

How Does the addEventListener Method Work?
When the user clicks on a button or there is a change in a form, this is known as an event. In your programs, you will need to have a way to listen for these events and respond to them.

The addEventListener() method is used to listen for events. It takes two arguments: the event you want to listen for and a function that will be called when the event occurs.

Here is the basic syntax:

Example Code
element.addEventListener("event", listener);
The element is the HTML element to monitor for events, and event specifies the type of event to listen for, such as "click".

The listener is an object that will receive the notification when the event occurs. Most of the time, this will be a function that you define to handle the event.

Here is an example:

Example Code
element.addEventListener("click", () => {
// code to run when the click event occurs
});
You can also choose to pass in a function reference like this:

Example Code
function handleClick() {
// code to run when the click event occurs
}

element.addEventListener("click", handleClick);
Sometimes you may want to create a separate function to handle the event. This can make your code easier to read and maintain.

The listener argument can also be null, or it can be an object that uses the EventListener interface. The EventListener interface defines a single method called handleEvent(). This method is automatically called whenever the event you're listening for occurs. Using this interface allows the same object to handle multiple events if needed.

Most of the time, you won't need to use this interface, and you can instead pass in a function that will be called when the event occurs.

Now, let's take a look at an example to better understand how this works:

In this example, we have a button element with the id of btn:

Example Code
<button id="btn">Show alert</button>
We want to listen for the "click" event on this button and show an alert when the button is clicked.

We first need to access that button element in our JavaScript code. Then we need to add an event listener to listen for the click event and show an alert when the button is clicked:

Example Code
const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));
Now each time the button is clicked, the user will see an alert message displayed on the screen like this:

Example Code
You clicked the button
Another type of event that you can listen for is the "input" event. This event is triggered when the value of an input element changes.

Here is an example:

Example Code
<input type="text" id="input" placeholder="Type something" />
We want to listen for the input event on this input element and log the value of the input to the console each time the user types something.

We first need to access that input element in our JavaScript code. Then we need to add an event listener to listen for the input event and log the value of the input to the console each time the user types something:

Example Code
const input = document.getElementById("input");

input.addEventListener("input", () => {
console.log(input.value);
});
Here is what the console will look like when the user types something in the input field:

Example Code
h
he
hel
hell
hello
There are many more events that you can listen for using the addEventListener() method. Some common events include mouseover, mouseout, keydown, keyup, and submit.

In future lectures, we will cover more events and how to use the addEventListener() method to listen for them.

Lesson 13
How Does the removeEventListener Method Work?
In the previous lecture, you learned how to work with "click" and "input" events by using the addEventListener() method. In this lecture, you will learn how to remove event listeners using the removeEventListener() method.

The removeEventListener() method is used to remove an event listener that was previously added to an element using the addEventListener() method. This is useful when you want to stop listening for a particular event on an element.

Here is the basic syntax for the removeEventListener() method:

Example Code
element.removeEventListener("event", listener);
Just like the addEventListener() method, the removeEventListener() method takes two arguments: the event you want to remove and the listener function that was previously added.

There is also an additional optional third argument that can be passed to the removeEventListener() method. This argument can either be the options or useCapture.

The options argument is an object that specifies the options for the event listener, such as whether the event listener should be passive or once.

The useCapture argument is a boolean value that specifies whether the event should be captured during the event propagation phase.

Most of the time, you will only need to pass the event and listener arguments to the removeEventListener() method.

Let's take a look at an example to better understand how the removeEventListener() method works:

In this example, we have heading, paragraph and button elements in the HTML:

Example Code

<h1>Event Listener examples</h1>
<p id="para">MouseOver this text to remove the event listener</p>
<button id="btn">Change background color</button>
Inside the CSS file, we are setting the body background color to grey:

Example Code
body {
background-color: grey;
}
If we want to toggle the background color between grey and blue, then we can use an event listener for that.

We first need to access the paragraph and button elements along with the body element:

Example Code
const bodyEl = document.querySelector("body");
const para = document.getElementById("para");
const btn = document.getElementById("btn");
Then we need to create the function responsible for toggling between the grey and blue colors:

Example Code
let isBgColorGrey = true;

function toggleBgColor() {
bodyEl.style.backgroundColor = isBgColorGrey ? "blue" : "grey";
isBgColorGrey = !isBgColorGrey;
}
We are using a boolean variable isBgColorGrey to keep track of the current background color. If the background color is grey, then we change it to blue, and vice versa.

Then we need to add an event listener to the button element to call the toggleBgColor function when the button is clicked:

Example Code
btn.addEventListener("click", toggleBgColor);
Each time the button is clicked, the background color of the body will change between grey and blue.

To remove the event listener when the paragraph is hovered over, we can add an event listener to the paragraph element. We are using the mouseover event and passing in a function that removes the event listener from the button element:

Example Code
para.addEventListener("mouseover", () => {
btn.removeEventListener("click", toggleBgColor);
});
When the paragraph is hovered over, the event listener for the button click event is removed, and the background color will no longer change when the button is clicked.

Real world examples of when to use the removeEventListener() method include removing event listeners when a modal is closed in a web application or when a user logs out of an application.

Lesson 14
What Are Inline Event Handlers, and Why Is It Best Practice to Use addEventListener Instead?
In the previous lectures, you learned how to work with events by using the addEventListener() method. But there is another, not recommended way, to work with events in JavaScript.

Inline event handlers are special attributes on an HTML element that are used to execute JavaScript code when an event occurs.

Here is an example of a button element with an inline click event handler:

Example Code
<button onclick="alert('Hello World!')">Show alert</button>
When the user clicks on the button, the alert function is called and an alert dialog is displayed with the message Hello World!.

Another way to use inline event handlers is to call a function that is defined in a script tag in the HTML document.

Here is an example of defining a function called changeBgColor and calling it from an inline click event handler:

Example Code

<script>
  function changeBgColor() {
    document.body.style.backgroundColor = "lightblue";
  }
</script>

<button onclick="changeBgColor()">Change background color</button>
When the user clicks on the button, the changeBgColor function is called and the background color of the page is changed to light blue. While it is possible to use inline event handlers like this, it is not considered a best practice.

For one reason, inline event handlers can only be used to attach one event listener to an element. If you want to attach multiple event listeners to the same element, you will need to use addEventListener(). Another reason is that inline event handlers mix HTML and JavaScript code together, which can make your code harder to read and maintain. It is better to keep your HTML code and JavaScript code separate by using addEventListener() to attach event listeners to elements.

Inline event handlers are not recommended for use in modern JavaScript. So, it is best practice to stick with the addEventListener() method when working with events in JavaScript.

Lesson 15

How Do You Manipulate Styles Using Element.style and Element.classList?
There will be times when you will need to manipulate the styles of an HTML element inside your JavaScript file. An example of this would be when you need to hide or show a menu when a user clicks on a button.

In this lecture, you will learn how to manipulate styles using the Element.style and Element.classList properties.

The Element.style property is a read-only property that represents the inline style of an element. You can use this property to get or set the style of an element.

Here is an example of a paragraph element with an ID of para:

Example Code

<p id="para">This is a paragraph</p>
You can use the style property to change the color of the paragraph element to red:

Example Code
const paraEl = document.getElementById("para");
paraEl.style.color = "red";
The style property can be used to set many CSS properties, such as color, background-color, font-size, font-weight, and so on.

Another way to manipulate styles is by using the Element.classList property. The classList property is a read-only property that can be used to add, remove, or toggle classes on an element. Let's take a look at a couple of examples.

In this first example, you are going to add a class called highlight to a paragraph element with an ID of para:

Example Code

<p id="para">This is a paragraph</p>
In the CSS, we will set the highlight class to change the background color of the paragraph element to yellow:

Example Code
.highlight {
background-color: yellow;
}
In the JavaScript, we will add the highlight class to the paragraph element using the classList.add() method:

Example Code
const paraEl = document.getElementById("para");
paraEl.classList.add("highlight");
You can also add multiple classes to an element by passing them as arguments to the classList.add() method:

Example Code
classList.add("class1", "class2", "class3");
If you need to remove a class from an element, you can use the classList.remove() method like this:

Example Code
classList.remove("highlight");
To toggle a class on an element, you can use the classList.toggle() method. In this example, we have a button element with an ID of toggle-btn and a nav element with an ID of menu:

Example Code
<button id="toggle-btn">Toggle Menu</button>

<nav id="menu" class="menu">
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Products</li>
  </ul>
</nav>
Inside the CSS, we have added some styles for the menu and a class called show that will change the display property of the .menu to block:

Example Code
.menu {
display: none;
background-color: lightgray;
width: 50%;
padding: 10px;
}

.menu.show {
display: block;
}
Inside the JavaScript, we are accessing the menu element and the button element using the getElementById() method. Then, we are adding an event listener to the button element that will toggle the show class on the .menu element when the button is clicked:

Example Code
const menu = document.getElementById("menu");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => menu.classList.toggle("show"));
When a user clicks on the button, the show class will be added to the .menu element, and the menu will be displayed. If the user clicks on the button again, the show class will be removed from the .menu element, and the menu will be hidden.

By using methods and properties such as style, add(), remove(), and toggle(), you can easily manipulate an element's styles with JavaScript, creating dynamic and interactive web pages.

Lesson 16
What Is the DOMContentLoaded Event, and How Does It Work?
The DOMContentLoaded event is fired when everything in the HTML document has been loaded and parsed. If you have external stylesheets, or images, the DOMContentLoaded event will not wait for those to be loaded. It will only wait for the HTML to be loaded.

This differs from the load event, which waits for everything to be loaded, including external stylesheets, images, and so on.

Here is the example syntax for using the DOMContentLoaded event:

Example Code
document.addEventListener("DOMContentLoaded", function () {
console.log("DOM is loaded.");
});
Once the DOM is loaded, the function will be executed and the message DOM is loaded. will be logged to the console.

Now, let's take a look at another example using the DOMContentLoaded event. In this example, we have an image inside the HTML:

Example Code

<h1>Image Change on DOM Loaded</h1>
<img
  id="example-img"
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
  alt="Cat relaxing"
/>
To update the image, we can create a function that changes the src attribute of the image:

Example Code
function changeImg() {
const img = document.getElementById("example-img");
img.src =
"https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
console.log("image was just changed");
}
We can then check if the DOM is still loading and add an event listener for the DOMContentLoaded event. If the DOMContentLoaded event has already fired, we can call the changeImg function directly:

Example Code
if (document.readyState === "loading") {
document.addEventListener("DOMContentLoaded", changeImg);
} else {
console.log("DOMContentLoaded has already fired");
changeImg();
}
If you were to run this code, and refresh the page, you would see the image change to the new image after the DOM has loaded. It happens pretty quickly, but you will see a slight flicker as the image changes.

The DOMContentLoaded event is useful when you want to run some JavaScript code as soon as the DOM is loaded, but before all the external resources like images and stylesheets are loaded.

Lesson 17

How Do the setTimeout and setInterval Methods Work?
When building your programs, you'll often want something to happen after a delay, or repeat at regular intervals. That's where the setTimeout() and setInterval() methods come in handy. Both methods accept two parameters: a function and a delay.

Let's look at each of the methods in more detail so you can start using them in your web projects.

setTimeout() lets you delay an action for a specified time. Here's the basic syntax of the setTimeout() method:

Example Code
setTimeout(functionToRun, delay);
functionToRun is the code you want to execute after a specified delay, and delay is the time (in milliseconds) to wait before running the function. Here's an example:

Example Code
setTimeout(function () {
console.log("This runs after 3 seconds");
}, 3000);
You can also use an arrow function for the callback, like this:

Example Code
setTimeout(() => {
console.log("This runs after 3 seconds");
}, 3000);
setInterval() keeps repeating a function at a set interval. It's like having an alarm that goes off every few seconds. setInterval() is perfect when you want something to happen over and over again, like refreshing data or creating an animation that moves continuously.

Just like setTimeout(), it takes a function and a delay:

Example Code
setInterval(functionToRun, delay);
functionToRun is the code you want to run repeatedly, while delay is the time in milliseconds between each execution of that function. Here's an example:

Example Code
setInterval(() => {
console.log("This runs every 2 seconds");
}, 2000);
And here's the result in the console:

Example Code
This runs every 2 seconds
This runs every 2 seconds
This runs every 2 seconds
Since setInterval() keeps executing the provided function at the specified interval, you might want to stop it. To do this, you have to use the clearInterval() method.

To do the work, clearInterval() takes the ID of the setInterval() you want to stop. This could be a variable you assign the interval to. One way to stop the interval is inside a setTimeout(), as that will stop the interval after a certain time:

Example Code
const intervalID = setInterval(() => {
console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
clearInterval(intervalID);
}, 5000);
You can also stop a timeout with the clearTimeout() method:

Example Code
let timeoutID = setTimeout(() => {
console.log("This will not run");
}, 5000);

clearTimeout(timeoutID);
With that code, the setTimeout() will not run at all. So, a more elegant way to do it is through the DOM, by adding a click event listener to a button to stop the timeout:

Example Code

<h1>Cancel Timeout Example</h1>
<button id="cancelButton">Cancel Timeout</button>

<script>
   let timeoutID = setTimeout(() => {
     console.log("This will run if not canceled");
   }, 5000);

   document
   .querySelector("#cancelButton")
   .addEventListener("click", () => {
     clearTimeout(timeoutID);
     console.log("Timeout canceled!");
   });
</script>

Lesson 18
What Is the requestAnimationFrame() API, and How Can It Be Used to Set Up an Animation Loop?
Creating smooth animations on a web page can be tricky, especially if you're not sure how to handle timing properly. The great news is that the requestAnimationFrame() API makes it easier.

requestAnimationFrame() is a method that allows you to schedule the next step of your animation before the next screen repaint, resulting in a fluid and visually appealing experience.

The next screen repaint refers to the moment when the browser refreshes the visual display of the web page. This happens multiple times per second, typically around 60 times (or 60 frames per second) on most displays.

To use the requestAnimationFrame() method, all you need to do is to call it and pass a callback function into it:

Example Code
requestAnimationFrame(callback);
Calling requestAnimationFrame() must first occur inside a function that handles the animation, such as animate(), along with a function to update the animation, traditionally called update():

Example Code
function animate() {
// Update the animation...
// for example, move an element, change a style, and more.
update();
// Request the next frame
requestAnimationFrame(animate);
}
The update() function is where the magic happens. Inside it, you get to change whatever you want to animate. For example, updating a style or changing the position of an element:

Example Code
function update() {
element.style.transform = `translateX(${position}px)`;
position += 2;
}
What finally kicks off the animation is calling requestAnimationFrame() and passing in the animate function, this time outside the animate function:

Example Code
requestAnimationFrame(animate);
The loop will continue until you stop it.

Now, let's take a look at another example. The HTML for this example is a div element with the text freeCodeCamp is Awesome:

Example Code

<div id="rect" class="rect">freeCodeCamp is Awesome</div>
This is the CSS that makes the div a rectangle and hides anything that goes out of the viewport on the left or right:

Example Code
body {
overflow-x: hidden;
}

.rect {
display: flex;
align-items: center;
justify-content: center;
width: 400px;
height: 250px;
border-radius: 5px;
background-color: #1b1b32;
color: #f5f6f7;
font-size: 2rem;
position: absolute;
}
This is the commented JavaScript that moves the rectangle 2px to the right at every call of requestAnimationFrame(animate) with the animate function as a callback:

Example Code
// reference the rectangle
const rect = document.getElementById("rect");

// start with a position of 0
let position = 0;

function update() {
// Move the rectangle 2px to the right
rect.style.left = position + "px";
position += 2;

// Reset the position when the rectangle reaches
// the right side of the screen
if (position > window.innerWidth) {
// Move the rectangle just outside the left side of the screen
position = -rect.offsetWidth;
}
}

function animate() {
// Update the position
update();

//request the next frame
requestAnimationFrame(animate);
}

// Start the animation
requestAnimationFrame(animate);
The result in the browser will be an animated title card floating across the screen.

Lesson 19
What Is the Web Animations API, and How Does It Relate to CSS Animation Properties?
The Web Animations API (WAAPI) allows you to create and control animations directly within JavaScript. With WAAPI, you can work with animations more dynamically, making it easier to manipulate them.

Let's take a look at WAAPI in more detail, so you can start working with animations directly inside your JavaScript code. At the core of WAAPI is the Animation constructor, which provides several instance methods and properties that allow you to dynamically animate elements.

A significant method in the Animation constructor is animate(). It allows you to create an animation by specifying keyframes and options like duration, directions easing, and iterations.

Here's the basic syntax of the animate() method:

Example Code
element.animate(keyframes, options);
Let's look at an example. Here's a div element for the HTML:

Example Code

<div class="square" id="square"></div>
Here's the CSS that makes the div a square and centers everything on the page:

Example Code
body {
background: #f1f1f1;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}

.square {
background: #1b1b32;
width: 10rem;
aspect-ratio: 1/1;
}
And here's the JavaScript that uses the animate() method:

Example Code
const square = document.querySelector("#square");

const animation = square.animate(
[{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
{
duration: 2000, // makes animation lasts 2 seconds
iterations: Infinity, // loops indefinitely
direction: "alternate", // moves back and forth
easing: "ease-in-out" // smooth easing
}
);
The result in the browser will be a blue square moving back and forth horizontally.

The instance methods of the Animation constructor include:

Example Code
play()
pause()
reverse()
finish()
cancel()
And the instance properties include:

Example Code
playbackRate
currentTime
startTime
effect
timeline
playState
finished
onfinish
oncancel
Let's modify the example to use the play(), pause() methods and the onfinish property. Here's the HTML with play and pause buttons:

Example Code

<div class="square" id="square"></div>

<button id="playBtn">Play</button>
<button id="pauseBtn">Pause</button>
Here's the new CSS:

Example Code
body {
background: #f1f1f1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
}
.square {
background: #1b1b32;
width: 10rem;
aspect-ratio: 1/1;
margin-bottom: 20px;
}
button {
margin: 10px;
padding: 10px 20px;
font-size: 16px;
}
And here's the new JavaScript:

Example Code
const square = document.querySelector("#square");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const animation = square.animate(
[{ transform: "translateX(0px)" }, { transform: "translateX(200px)" }],
{
duration: 5000, // Animation lasts 5 seconds
// iterations: Infinity, // Loops indefinitely
direction: "alternate", // Moves back and forth
easing: "ease-in-out" // Smooth easing function
}
);

// Set the onfinish property to log a message when the animation ends
animation.onfinish = () => {
console.log("Animation finished!");
};

// Play the animation when the "Play" button is clicked
playBtn.addEventListener("click", () => {
animation.play();
console.log("You start the animation");
});

// Pause the animation when the "Pause" button is clicked
pauseBtn.addEventListener("click", () => {
animation.pause();
console.log("You pause the animation");
});
The result in the browser will show the blue box moving from left to right when the play button is clicked.

WAAPI extends the capabilities of CSS animations by providing more dynamic control over animations right inside JavaScript.

With CSS animations, you define animations declaratively using properties like animation-name, animation-duration, and animation-timing-function. You also have the opportunity to do the same thing using the animate() method of WAAPI.

The difference is that you can control the animations you create with the animate() method more directly and dynamically, but with CSS animations, you need to do way more by defining custom styles and triggering them inside your JavaScript file.

CSS animation is ideal for simple and declarative animations that run automatically. Those include hover effects, transitions or animations that don't need much interaction once triggered. If your animation needs to respond to user interactions like clicks, and scrolls, or you want the user to be able to pause, reverse, or change speed dynamically, WAAPI is the better choice.

You can consider combining both WAAPI and CSS animations when you want the simplicity of CSS for basic setup but need to control animations at runtime.

Lesson 20

What Is the Canvas API, and How Does It Work?
The Canvas API is a powerful tool that lets you manipulate graphics right inside your JavaScript file. Everything begins with a canvas element in HTML. This element serves as a drawing surface that you can manipulate using the instance methods and properties of the Canvas API.

The Canvas API provides everything you need to create amazing visuals, including shapes, text, animations, and even complex games. It has interfaces like HTMLCanvasElement, CanvasRenderingContext2D, CanvasGradient, CanvasPattern, TextMetrics which provide methods and properties you can use to create graphics in your JavaScript file.

Let's look at how the Canvas API works so you can start creating graphics with JavaScript.

First, you need to create a canvas element in your HTML file:

Example Code
<canvas id="my-canvas"></canvas>
The canvas element is represented by the HTMLCanvasElement interface, which provides methods and properties for manipulating it. Additionally, you can use methods and properties from other interfaces in the Canvas API.

You can give your canvas a width and height inside the HTML:

Example Code
<canvas id="my-canvas" width="400" height="400"></canvas>
Or you can use the width and height properties of the HTMLCanvasElement interface:

Example Code
const canvas = document.getElementById("my-canvas");
canvas.width = 400;
canvas.height = 400;
For now, you can't see anything on the screen yet. After creating your canvas element, the next thing to do is to get access to the drawing context of the canvas with the getContext() method of the HTMLCanvasElement interface.

The most common context is 2d, which allows you to draw in two dimensions:

Example Code
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext('2d');
If you log the ctx variable to the console, you'll see the methods and properties of CanvasRenderingContext2D that you can use to create shapes, colors, lines, and more, along with their default values:

Example Code
console.log(ctx);
Once you have the 2D context, you can start drawing on the canvas.

The Canvas API provides several methods and properties for drawing shapes, lines, and text. One of those is the fillStyle property, which you can combine with the fillRect() method to draw a rectangle or square:

Example Code
const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

// Set the background color
ctx.fillStyle = "crimson";

// Draw a rectangle
ctx.fillRect(1, 1, 150, 100);
fillRect takes 4 number values which represent the x axis, y axis, width, and height, respectively.

There's something on the screen now. You can also draw text or even create an animation. Here's a canvas to represent text:

Example Code
<canvas id="my-text-canvas" width="300" height="70"></canvas>
To finally draw the text, pass the text into the fillText() method as the first argument, followed by the values for the x and y axis:

Example Code
const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext("2d");

// Set font family and size
textCanvasCtx.font = "30px Arial";

// Set text color
textCanvasCtx.fillStyle = "crimson";

// Draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50);
The result in the browser will be the red text Hello HTML Canvas!.

These's much more you can do with the Canvas API. For example, you can combine it with requestAnimationFrame to create custom animations, visualizations, games, and more.

lesson 21
How Do You Open and Close Dialog Elements Using JavaScript?
Dialogs let you display important information or actions to users. With HTML's built-in dialog element, you can easily create these dialogs (both modal and non-modal dialogs) in your web apps.

A modal dialog is a type of dialog that forces the user to interact with it before they can access the rest of the application or webpage. It effectively blocks interaction with other content until the user completes an action, such as closing the dialog or submitting a form.

In contrast, a non-modal dialog allows the user to continue interacting with other parts of the page or application even when the dialog is open. It doesn't prevent access to the rest of the content.

In this lecture, you will learn how to open and close modals using the showModal() and close() methods.

When you want to make sure the user focuses on a specific action or message of a modal, you can open the modal dialog using the showModal() method. This will add a backdrop to the other items on the page and disable them. This is ideal for modals that display forms, confirmations, and critical information that requires user action.

Here's the HTML for the modal dialog:

Example Code

<dialog id="my-modal">
   <p>This is a modal dialog.</p>
</dialog>
For now, you can't see anything on the page because the modal is closed on the initial render. You can automatically open the modal by using the showModal() method:

Example Code
const dialog = document.getElementById("my-modal");
dialog.showModal();
The result in the browser will show a modal with the text This is a modal dialog.

It's best to give control to the user. To achieve this, you can add a click event listener to a button and use the showModal() method:

Example Code

<dialog id="my-modal">
   <p>This is a modal dialog.</p>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
Here's the JavaScript:

Example Code
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
dialog.showModal();
});
If you needed to show a dialog while still allowing interaction with content outside of the dialog, then you can use the show() method:

Example Code
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");

openButton.addEventListener("click", () => {
dialog.show();
});
To close a modal, you can add a button to the modal inside the dialog element:

Example Code

<dialog id="my-modal">
   <p>This is a modal dialog.</p>
   <button id="close-modal">Close Modal</button>
</dialog>
<button id="open-modal">Open Modal Dialog</button>
Then use the close() method on the button:

Example Code
const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

openButton.addEventListener("click", () => {
dialog.show();
});

closeButton.addEventListener("click", () => {
dialog.close();
});
