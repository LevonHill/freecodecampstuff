<!-- @format -->

How do the different list-style properties work in CSS?

In CSS, the list-style property is used to control the appearance of lists on a webpage.

Whether you're working with ordered lists (ol) or unordered lists (ul), the list-style property allows you to customize how list items are displayed.

The list-style property is actually a shorthand for three other properties:

list-style-type
list-style-position
list-style-image
Each one plays a different role in defining the appearance of lists.

The list-style-type property allows you to define the type of bullet point or number used in a list.

For unordered lists, you can choose from several bullet styles, such as discs, circles, or squares.

For ordered lists, you can use different numbering systems, like decimal, Roman numerals, or even alphabetical characters.

Here’s an example of using list-style-type:

<ul style="list-style-type: square;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
In this example, the bullet points of the unordered list are changed to squares.

The list-style-type property is the most commonly used of the three, as it directly affects the appearance of the bullet or numbering style in your lists.

The list-style-position property controls the position of the bullet or number in relation to the list item’s content. There are two values you can use: inside and outside.

When you use the value outside, the bullet or number appears outside the content, which is the default behavior.

And, when you use the value inside, the bullet or number appears inside the content, which may cause the text to wrap and align with the bullet or number.

Here’s an example of using list-style-position:

<ul style="list-style-position: inside;">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ul style="list-style-position: outside;">
  <li>Item 4</li>
  <li>Item 5</li>
  <li>Item 6</li>
</ul>
In this example, both inside and outside values are provided for two different unordered list tags.

The list-style-position property can be useful when you want to control the alignment of the list content, especially in situations where you have multiple lines of text in a single list item.

The list-style-image property allows you to use an image as the bullet point for your list items. This can be useful for adding a unique visual style to your lists.

Here’s an example of using list-style-image:

<head>
  <style>
    ul {
      list-style-image: url('freeCodeCamp-logo.svg');
      list-style-position: inside;
    }
  </style>
</head>
<body>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</body>
In this example, the bullet points are replaced by a custom freeCodeCamp logo, adding a personalized touch to the list.

When using list-style-image, make sure the image you choose is small and appropriate for the design of your webpage. If the image is too large or complex, it can make the list harder to read.

You can combine the three properties – list-style-type, list-style-position, and list-style-image – into a single list-style shorthand property.

The order of the values in the shorthand doesn’t matter, but all three can be specified together.

Here’s an example using the shorthand property:

<ul style="list-style: square inside url('https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg');">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
In this example, the list items use square bullets, positioned inside the content, with a custom image as the bullet.

However, if the image is unavailable or not rendered, the square bullets will be used as a fallback.
