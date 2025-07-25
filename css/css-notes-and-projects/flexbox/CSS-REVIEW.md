Introduction to CSS Flexbox and Flex Model

Definition: CSS flexbox is a one-dimensional layout model that allows you to arrange elements in rows and columns within a container.
Flex Model: This model defines how flex items are arranged within a flex container. Every flex container has two axes: the main axis and the cross axis.

The flex-direction Property
Definition: This property sets the direction of the main axis. The default value of flex-direction is row, which places all the flex items on the same row, in the direction of your browser's default language (left to right or right to left).
flex-direction: row-reverse;: This reverses the items in the row.
flex-direction: column;: This will align the flex items vertically instead of horizontally.
flex-direction: column-reverse;: This reverses the order of the flex items vertically.


The flex-wrap Property
Definition: This property determines how flex items are wrapped within a flex container to fit the available space. flex-wrap can take three possible values: nowrap, wrap, and wrap-reverse.
flex-wrap: nowrap;: This is the default value. Flex items won't be wrapped onto a new line, even if their width exceed the container's width.
flex-wrap: wrap;: This property will wrap the items when they exceed the width of their container.
flex-wrap: wrap-reverse;: This property will wrap flex items in reverse order.

flex-flow Property: This property is a shorthand property for flex-direction and flex-wrap.
Example Code
flex-flow: column wrap-reverse;



The justify-content Property
Definition: This property aligns the child elements along the main axis of the flex container.
justify-content: flex-start;: In this case, the flex items will be aligned to the start of the main axis. This could be horizontal or vertical.
justify-content: flex-end;: In this case, the flex items are aligned to the end of the main axis, horizontally or vertically.
justify-content: center;: This centers the flex items along the main axis.
justify-content: space-between;: This will distribute the elements evenly along the main axis.
justify-content: space-around;: This will distribute flex items evenly within the main axis, adding a space before the first item and after the last item.
justify-content: space-evenly;: This will distribute the items evenly along the main axis.


The align-items Property
Definition: This property is used to distribute items along the cross axis. Remember that the cross axis is perpendicular to the main axis.
align-items: center;: This is used to center the items along the cross axis.
align-items: flex-start;: This aligns the items to the start of the cross axis.
align-items: stretch;: This is used to stretch the flex items along the cross axis.