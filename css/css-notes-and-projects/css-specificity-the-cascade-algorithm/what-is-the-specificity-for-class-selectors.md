What is the specificity for class selectors?

Class selectors are a key part of CSS, allowing developers to target multiple elements with the same class attribute and apply consistent styling.

This makes them highly versatile and efficient for applying styles across a website.

Class selectors are defined by a period (.) followed by the class name. They can be applied to any element in the HTML document.

Here is an example using a class selector:

.highlight {
  color: green;
}
In this example, any element with the class highlight will have its text color set to green.

Class selectors have a higher specificity than type selectors but lower than ID selectors and inline styles.

The specificity value for a class selector is (0, 0, 1, 0). This means that class selectors can override type selectors, but they can be overridden by ID selectors and inline styles.

Class selectors can be combined with other selectors to create more specific rules.

Here is an example combining a paragraph type selector with a class selector:

p.highlight {
  font-weight: bold;
}
This rule applies only to p elements that also have the highlight class, making their text bold.