<!-- @format -->

Open up this page to review concepts like the transform property, the box model, the overflow property and more.

CSS Layouts and Effects Review

CSS Overflow Property
Definition: Overflow refers to the way elements handle content that exceeds, or "overflows", the size of the containing element. Overflow is two-dimensional.

overflow-x: The x-axis determines horizontal overflow.
overflow-y: the y-axis determines vertical overflow.
overflow: Shorthand property for overflow-x and overflow-y. If given one value, both overflows will use it. If given two values, the overflow-x will use the first, and the overflow-y will use the second.

CSS Transform Property
Definition: This property enables you to apply various transformations to elements, such as rotating, scaling, skewing, or translating (moving) them in 2D or 3D space.
translate() Function: This function is used to move an element from its current position.
scale() Function: This function allows you to change the size of an element.
rotate() Function: This function allows you to rotate an element.
skew() Function: This function allows you to skew an element.
Transforms and Accessibility: If you're using transform to hide or reveal content, make sure that the content is still accessible to screen readers and keyboard navigation. Hidden content should be truly hidden, such as by using display: none or visibility: hidden, rather than simply being visually moved off-screen.

The Box Model
Definition: In the CSS box model, every element is surrounded by a box. This box consists of four components: the content area, padding, border, margin.
Content Area: The content area is the innermost part of the box. It's the space that contains the actual content of an element, like text or images.
padding: The padding is the area immediately after the content area. It's the space between the content area and the border of an element.
border: The border is the outer edge or outline of an element in the CSS box model. It's the visual boundary of the element.
margin: The margin is the space outside the border of an element. It determines the distance between an element and other elements around it.
Margin Collapse
Definition: This behavior occurs when the vertical margins of adjacent elements overlap, resulting in a single margin equal to the larger of the two. This behavior applies only to vertical margins (top and bottom), not horizontal margins (left and right).
The content-box and border-box Property Values
box-sizing Property: This property is used to determine on the final width and height is calculated for an HTML element.
content-box Value: In the content-box model, the width and height that you set for an element determine the dimensions of the content area but they don't include the padding, border, or margin.
border-box Value: With border-box, the width and height of an element include the content area, the padding, and the border, but they don't include the margin.

CSS Reset
Definition: A CSS reset is a stylesheet that removes all or some of the default formatting that web browsers apply to HTML elements. Third party options for CSS resets include sanitize.css and normalize.css.

CSS Filter Property
Definition: This property can be used to create various effects such as blurring, color shifting, and contrast adjustment.
blur() Function: This function applies a Gaussian blur to the element. The amount is defined in pixels and represents the radius of the blur.
brightness() Function: This function adjusts the brightness of the element. A value of 0% will make the element completely black, while values over 100% will increase the brightness.
contrast() Function: This function adjusts the contrast of the element. A value of 0% will make the element completely grey, 100% will make the element appear normally, and values greater than 100% will increase the contrast.
grayscale() Function: This function converts the element to grayscale. The amount is defined as a percentage, where 100% is completely grayscale and 0% leaves the image unchanged.
sepia() Function: This function applies a sepia tone to the element. Like grayscale, it uses a percentage value.
hue-rotate() Function: This function applies a hue rotation to the element. The value is defined in degrees and represents a rotation around the color circle.
