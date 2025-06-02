<!-- @format -->

How do you space list items using margin or line-height in CSS?

Margins and line-height are essential for spacing list items to enhance readability and visual appeal.

First, let's start spacing list items using margins!

Margins can be used to create space between list items by applying margin properties to the li elements. This method allows you to control the spacing outside each list item, effectively increasing or decreasing the gap between them.

Let's take a look at an example of an unordered list with three list items.

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
By default, HTML will not apply that much spacing between the list items.

To apply some spacing to the bottom of each list item, you can use the margin-bottom property like this:

li {
margin-bottom: 40px;
}
In this example, 40px of margin will be applied to the bottom of each list item inside the unordered list.

Another way to space out list items would be to use the line-height property.

The line-height property adjusts the vertical spacing between lines of text within a single list item.

While it primarily affects the spacing between lines of text within each item, it can also indirectly influence the overall spacing between list items if the items contain only a single line of text.

If list items have multiple lines of text, the line-height will affect the spacing between those lines, but it does not directly adjust the spacing between separate list items themselves.

To control the spacing between individual list items, you would use margin or padding properties instead.

Using the same unordered list from earlier, here is an example of applying line-height to the list items:

li {
line-height: 2;
}
In this example, line-height: 2; sets the line height to be twice the font size, creating more vertical space within each list item.
