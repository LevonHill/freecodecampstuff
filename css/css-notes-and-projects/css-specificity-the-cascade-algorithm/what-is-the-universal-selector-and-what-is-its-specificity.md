What is the universal selector and what is its specificity?

The universal selector (*) is a special type of CSS selector that matches any element in the document.

It is often used to apply a style to all elements on the page, which can be useful for resetting or normalizing styles across different browsers.

The universal selector can be used to select all elements within a specific context or globally across the entire document.

Here is an example of using the universal selector for setting the margin and padding for the entire HTML document:

* {
  margin: 0;
  padding: 0;
}
In this code example, the * selector resets the margin and padding of all elements to zero, which is a common technique used in CSS resets.

The universal selector has the lowest specificity value of any selector. It contributes 0 to all parts of the specificity value (0, 0, 0, 0).

This means that any other selector, including type selectors, class selectors, ID selectors, and inline styles, will override the styles set by the universal selector.

Let's take a look at the following HTML and CSS example:

<head>
  <style>
    * {
      color: blue;
    }
    p {
      color: red;
    }
    .highlight {
      color: green;
    }
    #unique {
      color: purple;
    }
  </style>
</head>
<body>
  <p id="unique" class="highlight">This text has multiple styles applied.</p>
</body>
The universal * selector sets the text color to blue for all elements.

However, the p type selector overrides this by setting the text color to red specifically for p elements.

If an element has the highlight class, the class selector takes precedence, changing the text color to green.

Finally, the #unique ID selector, which has the highest specificity, will override all others, setting the text color to purple.