What is the specificity for type selectors?

Type selectors, also known as element selectors, target elements based on their tag name.

These selectors are fundamental in CSS and allow you to apply styles to all instances of a specific HTML element.

Type selectors are straightforward to use and are written simply as the tag name of the element you want to style.

Here is an example of a type selector targeting all paragraph elements on the page:

p {
  color: blue;
}
In this example, all p elements will have their text color set to blue.

Type selectors have a relatively low specificity compared to other selectors. The specificity value for a type selector is (0, 0, 0, 1).

This means that type selectors will be overridden by class selectors, ID selectors, and inline styles, but can still apply styles unless those higher-specificity rules are present.

Let's take a look at an example where the class selectors will override the styles of the type selector.

Here is an example with two paragraph elements:

<p class="para">I am a paragraph</p>
<p class="para">Here is another paragraph</p>
Both paragraph elements have a class called para.

Inside the CSS file, the type selector targets paragraphs, and the class selector targets elements with the para class.

p {
  color: blue;
}

.para {
  color: red;
}
All paragraphs on the page with the class of para will have the text color set to red instead of blue because class selectors have a higher specificity than type selectors.

