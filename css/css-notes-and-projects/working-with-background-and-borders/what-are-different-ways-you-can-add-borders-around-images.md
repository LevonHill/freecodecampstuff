<!-- @format -->

What are the different ways you can add borders around images?

In CSS, there are several ways to add borders around images, each offering different styling options and levels of control.

Let's explore some of the most common and versatile methods.

The most straightforward way to add a border to an image is by using the border property. This property is a shorthand that allows you to set the width, style, and color of the border all at once.

img {
border: 2px solid red;
}
This CSS rule adds a 2-pixel wide, solid red border around all img elements. You can adjust the width, style (such as dashed, dotted, or double), and color to suit your design needs.

If you need more control over individual sides of the border, you can use the specific border properties for each side:

img {
border-top: 1px solid red;
border-right: 2px dashed green;
border-bottom: 3px dotted blue;
border-left: 4px double yellow;
}
This allows you to create unique border styles for each side of the image.

Another way to create a border effect is by using the outline property. While similar to border, outline doesn't affect the element's dimensions or layout:

img {
outline: 3px solid gold;
}
This creates a gold outline around the image without changing its size or position.

If you want to create rounded corners on your border, you can use the border-radius property in conjunction with border:

img {
border: 2px solid black;
border-radius: 10px;
}
Remember, these techniques can be combined and customized to create unique border effects. The choice of method depends on your specific design requirements and the level of complexity you need.
