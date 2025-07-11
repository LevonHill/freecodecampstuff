<!-- @format -->

In these lecture videos, you will learn how CSS flexbox works, its properties, and when you should use it.
Lesson 1 

What is CSS flexbox, and when should you use it? LESSON 1

CSS flexbox is a one-dimensional layout model that allows you to arrange elements in rows and columns within a container. You can also control their order and orientation. Web developers use it to create responsive websites and web applications that adapt to different screen sizes and orientations. We refer to flexbox as a one-dimensional layout model because it focuses on arranging elements along a single axis at a time. The axis can be either horizontal or vertical.

There are two key concepts that you should know about before you start working with flexbox: flex container and flex item.

A flex container is an HTML element with a flex layout. You can arrange and align elements in various ways within a flex container. To make an HTML element a flex container, you need to add display: flex to its CSS styles.

Flex items are the direct children of a flex container. These elements can be arranged and aligned within a flex container based on its properties. They can also shrink or expand to fit the available space.

This is an example with a main container and three child div elements:

Example Code

<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
If you set only the width, height, and background-color of these div elements in the CSS stylesheet, every child element will be placed on its own row because the container is not flex by default. That is:

Example Code
div {
width: 80px;
height: 50px;
}

#first-div {
background-color: #4d70b2;
}

#second-div {
background-color: #5c4db2;
}

#third-div {
background-color: #4da3b2;
}
But if you add display: flex to the main container, the div elements will be rearranged to fit on the same row and they will shrink if necessary:

Example Code
main {
display: flex;
}
By default, a flex container will be a block-level element, so the container itself will be on its own row relative to other elements and containers.

Now that you know more about flex containers and flex items, you should also know about flex properties. These properties determine how flex items will be arranged, resized, and distributed within the flex container. Some of the most commonly used ones are flex-direction, justify-content, align-items, and flex-wrap.

Great. Now let’s talk a little bit about the flex model. This model defines how flex items are arranged within a flex container. Every flex container has two axes:

The main axis.
The cross axis.
The orientation of these axes determines how different properties will affect the layout and distribution of the flex items. By default, the main axis of a flex container is horizontal and the cross axis is vertical. Flex items are arranged in the direction of the main axis. The cross axis is perpendicular to the main axis.

The flex-direction property sets the direction of the main axis. The default value of flex-direction is row, which places all the flex items on the same row, in the direction of your browser's default language (left to right or right to left):

Example Code
flex-direction: row; /_ Default _/
To reverse the items in the row, you can use flex-direction: row-reverse:

Example Code
flex-direction: row-reverse;
This will reverse the order of the flex items. If you want to align the flex items vertically instead, you just need to set flex-direction to column in the flex container. This will change the direction of the main axis:

Example Code
flex-direction: column;
Now the div elements will be aligned vertically because the main axis will be vertical and the cross axis will be horizontal. You can also reverse the order of the flex items vertically with flex-direction: column-reverse:

Example Code
flex-direction: column-reverse;
CSS flexbox is a powerful layout model that provides a flexible and efficient way to arrange elements within a container. By understanding the key concepts of flex containers, flex items, and the various flex properties, you can create dynamic and responsive websites that adapt to different screen sizes and orientations.




LESSON 2

What are some common flex properties, and how do they work?

Flex properties are properties that you can apply to flex containers to determine the distribution of child elements. We'll cover some of the most commonly used ones: flex-wrap, justify-content, and align-items.

Let's start with flex-wrap. This property determines how flex items are wrapped within a flex container to fit the available space. flex-wrap can take three possible values: nowrap, wrap, and wrap-reverse. nowrap is the default value—flex items won't be wrapped onto a new line, even if their width exceeds the container's width.

In the code below, we have three div elements. Let's focus on the width. The main container bordered in red has a width of 200px, while its three child div elements combined have a width of 240px (80px each):

Example Code
main {
width: 200px;
display: flex;
border: 2px solid red;
}

div {
width: 80px;
height: 50px;
}

#first-div {
background-color: #4d70b2;
}

#second-div {
background-color: #5c4db2;
}

#third-div {
background-color: #4da3b2;
}
The width of the div elements exceeds the width of their container, but by default they will be shrunk to fit the available space. If you do want to wrap them when they exceed the width of their container, you can set flex-wrap: wrap on the flex container:

Example Code
flex-wrap: wrap;
The div elements will be rearranged in rows when they exceed the width of their container. You can wrap flex items in reverse order with flex-wrap: wrap-reverse. The flex-flow property is a shorthand property for flex-direction and flex-wrap. In this example, we set flex-direction to column and flex-wrap to wrap-reverse:

Example Code
flex-flow: column wrap-reverse;
Great. Now let's talk about justify-content. justify-content aligns the child elements along the main axis of the flex container. If you assign the value flex-start to justify-content, the flex items will be aligned to the start of the main axis. This could be horizontal or vertical:

Example Code
justify-content: flex-start;
With justify-content: flex-end, flex items are aligned to the end of the main axis, horizontally or vertically. To center the flex items along the main axis, you can use justify-content: center. To distribute the elements evenly along the main axis, you can use justify-content: space-between. This will add some space between the flex items if needed.

justify-content: space-around distributes flex items evenly within the main axis, adding a space before the first item and after the last item. This additional space is half of the space between each pair of adjacent items. If there's only one item to distribute, it will be centered.

And last but not least, we have justify-content: space-evenly, which distributes the items evenly along the main axis. The space between the items and the space before and after the first and last elements, are exactly the same:

Example Code
justify-content: space-evenly;
Great. Now you know how to distribute flex items along the main axis. But you may also want to distribute them along the cross axis. Remember that the cross axis is perpendicular to the main axis. You can do this with the align-items property. To center the items along the cross axis, you just need to add align-items: center to the flex container:

Example Code
align-items: center;
In this example, the flex items are centered along the cross axis, which is vertical by default. If the cross axis is horizontal, they will be centered horizontally instead. In contrast, align-items: flex-start aligns the items to the start of the cross axis:

Example Code
align-items: flex-start;
The opposite is align-items: flex-end. This will align flex items to the end of the cross axis, vertically or horizontally. To stretch the flex items along the cross axis, you can use align-items: stretch. This also works with elements that are automatically sized, such as those without set width or height, or with only a minimum width or height. The flex items will stretch to fill the container in the direction of the cross axis.

And finally, you can use the align-self property to assign a different alignment on the cross axis to an individual flex item. For example, you can stretch it with align-self: stretch. You can center it with align-self: center. You can align it to the start of the cross axis with align-self: flex-start. Or you can align it to the end of the cross axis with align-self: flex-end.

There are other flex properties and values that you can choose from to create the responsive layout that you envision, but these are the most commonly-used ones. With these CSS flex properties and your new knowledge of the CSS flex model, you can start creating responsive layouts to create a smooth and inclusive user experience across devices.
