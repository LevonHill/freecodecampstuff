<!-- @format -->

What are some default browser styles applied to HTML?

When you start working with HTML and CSS, you'll notice that some styles are applied to your web pages even before you write any CSS. These styles are called "default browser styles" or "user-agent styles".

These default browser styles provide basic formatting to ensure that HTML elements are displayed in a readable way across all browsers.

However, these styles can vary slightly from one browser to another, which is why it's important to understand them when designing a consistent look for your website.

Let’s take a look at some common default browser styles applied to various HTML elements.

Headings are one of the most commonly used HTML elements and are styled by default to have varying sizes and weights.

For example, h1 (the highest-level heading) is usually bold and larger in font size compared to lower-level headings like h2, h3, and so on.

These heading tags help define the hierarchy and structure of your content.

The following example shows all six heading elements from h1 to h6.

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
Another element with default styles is the hr element, which creates a horizontal rule often used to visually separate sections of content. Browsers generally apply a simple line style to this element.

To understand it better, let's look at this code example:

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<hr>
<p>Paragraph 3</p>
<p>Paragraph 4</p>
The horizontal rule appears as a thin line with spacing above and below the text to distinguish between sections of content.

Next, we will look at the blockquote element.

Blockquotes are used to indicate a section of text that is a quotation from another source. Browsers typically add indentation and sometimes italicize the text.

The indentation helps set blockquotes apart from the rest of the text, making it clear that this content is quoted from another source.

Let's take a look at this code example:

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<blockquote>I think, therefore I am. (Rene Descartes)</blockquote>
<p>Paragraph 3</p>
<p>Paragraph 4</p>
In the example above, the blockquote element will produce an indent on the text, applied by the default browser styles.

Another element with default styles is the anchor element (<a>), which is styled with a default blue color and underlining to make it recognizable as a link.

Let's take at look at the following HTML example:

<p>Paragraph 1</p>
<p>Paragraph 2</p>
<a href="https://freecodecamp.org/">Visit the freeCodeCamp learn page</a>
<p>Paragraph 3</p>
<p>Paragraph 4</p>
The above code has four paragraph elements with an anchor element in the middle. The anchor element is styled in blue with an underline to show users to go to the freeCodeCamp learn page.

Finally, we'll look at the unordered and ordered list elements.

Browsers add basic formatting to lists, including indentation and bullets or numbers, depending on whether you are using an unordered list (ul) or an ordered list (ol).

Let's take a look at an example:

<p>Sample Paragraph</p>
<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
<ul>
  <li>item</li>
  <li>another item</li>
  <li>yet another item</li>
</ul>
<p>Ending Paragraph</p>
In the above code example, we are using an unordered list and an ordered list. Both of these lists will be slightly indented to the right by default.

For all of these examples, you saw how the browser applied default spacing, varying font sizes, and weights to these HTML elements.

In later lecture videos, you will learn how to reset some of these default styles using a CSS reset.
