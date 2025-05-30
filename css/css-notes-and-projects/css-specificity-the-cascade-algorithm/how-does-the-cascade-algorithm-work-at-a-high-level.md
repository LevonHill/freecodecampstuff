How does the Cascade Algorithm work at a high level?

The Cascade Algorithm is the process the browser uses to decide which CSS rules to apply when there are multiple styles targeting the same element. It ensures that the most appropriate styles are used, based on a set of well-defined rules.

The process begins with relevance. The browser first filters all the CSS rules to find those that actually apply to the element in question. This includes matching selectors and considering media queries that might be in effect.

A media query is a CSS technique used to apply styles based on the characteristics of the device or viewport, such as its width, height, or orientation.

Next, the algorithm considers origin and importance. CSS can come from different sources: the browser’s default styles (user-agent), styles set by the user, and styles written by the author (you).

Following the consideration of origin, the algorithm then evaluates the importance of each rule, giving priority to rules marked with !important, which override other rules regardless of their source.

After filtering by origin and importance, the algorithm looks at specificity. When two rules from the same origin and importance level apply, the rule with the higher specificity will be applied.

Specificity is a measure of how targeted a selector is, with more specific selectors taking precedence over more general ones.

Finally, if everything else is equal, the order of appearance comes into play. When two rules have the same specificity, the one that appears last in the CSS will be applied.

This is why the order in which you write your styles can sometimes affect the outcome.

Let's take a look at an example.

Here we have a single paragraph element on the page:

<p>example paragraph</p>
Inside the CSS, we have two rules each targeting the paragraph element.

p {
  color: blue;
}

p {
  color: green; 
}
The first rule sets all paragraph elements to the text color of blue while the second rule sets all paragraph elements to the text color of green.

So which color will be applied? The color green will be applied to the paragraph elements.

By considering relevance, origin and importance, specificity, scope, and order of appearance, the Cascade Algorithm ensures that your CSS behaves predictably, allowing you to design more complex and nuanced web pages.

