<!-- @format -->

Lesson 1

What are CSS custom properties, and how do they work?

CSS custom properties, also known as CSS variables, are entities defined by CSS authors that contain specific values to be reused throughout a document. They are a powerful feature that allows for more efficient, maintainable, and flexible stylesheets.

The syntax for declaring a custom property is straightforward. It begins with two dashes (--) followed by the property name:

Example Code
:root {
--main-color: #3498db;
}
In this example, we're declaring a custom property named --main-color with a value of #3498db. The :root pseudo-class is commonly used to declare global custom properties, as it represents the highest-level parent in the DOM tree.

To use a custom property, you employ the var() function:

Example Code
.button {
background-color: var(--main-color);
}
This sets the background color of elements with the class button to the value stored in --main-color.

One of the key features of custom properties is that they follow the CSS cascade. This means that you can redefine them for specific elements or contexts:

Example Code
.alert {
--main-color: #e74c3c;
background-color: var(--main-color);
}
In this case, elements with the class alert will use a different --main-color value, overriding the global definition.

Custom properties also support fallback values. If a custom property is not defined or is invalid, you can provide a fallback value:

Example Code
.text {
color: var(--text-color, black);
}
Here, if --text-color is not defined, the color will default to black.

Custom properties are particularly useful in creating themeable designs. You can define a set of properties for different themes:

Example Code
:root {
--bg-color: white;
--text-color: black;
}

.dark-theme {
--bg-color: #333;
--text-color: white;
}

body {
background-color: var(--bg-color);
color: var(--text-color);
}
Switching themes becomes as simple as adding or removing a class from the body element.

Custom properties can also be used with media queries to create responsive designs:

Example Code
:root {
--container-width: 100%;
}

@media (min-width: 768px) {
:root {
--container-width: 750px;
}
}

.container {
width: var(--container-width);
}
This approach allows for more maintainable responsive layouts, as you can change values in one place rather than throughout your stylesheet. This can significantly reduce repetition in your stylesheets, especially for frequently used, complex values.

Custom properties can also reference other custom properties:

Example Code
:root {
--primary-color: #3498db;
--button-bg: var(--primary-color);
}
This allows for creating relationships between different style aspects, making it easier to maintain consistent themes across your site.

While custom properties offer many advantages, it's important to be aware of their browser support. They are well-supported in modern browsers, but older browsers may not recognize them. Always have a fallback plan when using cutting-edge features.

In conclusion, CSS custom properties provide a powerful way to create more dynamic, flexible, and maintainable stylesheets. They allow for the creation of themeable designs, simplify responsive layouts, and enable runtime manipulation of styles.

As web development continues to evolve, custom properties are becoming an increasingly important tool in a developer's toolkit, offering new possibilities for creating adaptable and efficient CSS.
