<!-- @format -->

What is the basic anatomy of a CSS rule?

CSS is responsible for the styles of a web page. All of these styles are made up of various CSS rules.

A CSS rule is made up of two main parts: a selector and a declaration block.

Let's take a look at the basic syntax:

selector {
property: value;
}
A selector is a pattern used in CSS to identify and target specific HTML elements for styling.

Examples of selectors include type selectors, class selectors, and ID selectors.

The curly braces provided in the basic syntax are known as a declaration block. A declaration block applies a set of styles for a given selector, or selectors.

Inside the declaration block, you will have a series of declarations. Each declaration consists of a property and a value.

The property is the CSS identifier that specifies which feature is being styled. An example of a property would be the background-color property.

The value would be the specific setting applied to that property. For example, if the property is background-color, a value could be purple, which sets the background color to purple.

After each property name, you need to place a colon, and after each value, you should have a semicolon.

Now that you know the syntax for a CSS rule, let's take a look at an example.

p {
color: blue;
}
In this CSS rule, a type selector targets all paragraph elements on the page.

Inside the declaration block, there is a one declaration.

The declaration consists of the color property with a value set to blue. This will change the text color for all paragraph elements to blue.

If you want to apply the same set of styles to multiple selectors, you can create a selector list with each selector separated by a comma.

Here is an example of styling multiple selectors:

#title,
.subheading {
color: navy;
}
In this selector list, there is an id selector targeting the HTML element with the id value of title. All id selectors must start with a hash # symbol.

Then there is a comma followed by a class selector that targets all HTML elements with the class value of subheading. All class selectors must start with a dot .

The entire selector list will receive the same styling, with the text color set to navy
