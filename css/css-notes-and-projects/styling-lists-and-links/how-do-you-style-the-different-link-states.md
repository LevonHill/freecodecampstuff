How do you style the different link states in CSS?

There are different states of a link, including link, visited, hover, focus, and active. These states are important for helping users recognize links and providing clear feedback after interactions, which improves both usability and accessibility.

Styling these different link states is crucial for usability and accessibility, as it provides visual cues about the current state of the link. This helps users understand which links they have visited, which link they are interacting with, and what will happen when they click.

For users with visual impairments or cognitive disabilities, these distinct styles can make navigation much easier and more intuitive.

Additionally, clear link states enhance the overall user experience by providing immediate feedback on user interactions, reducing confusion and improving the site's navigability.

These states can be styled using something called pseudo-classes in CSS.

A pseudo-class is a keyword added to a selector that specifies a special state of the selected element.

For example, :hover can change a button's color when the user's pointer hovers over it, while :visited can change the color of a link that has already been visited.

Pseudo-classes allow you to style elements based on their state or the user's interaction with them, without the need for additional markup in your HTML.

The syntax of a pseudo-class looks something like this where A is the selector and :B is the pseudo-class:

A:B {
  property: value;
}
To better understand how to style the different link states, let's take a look at some examples.

The :link pseudo-class styles unvisited links, indicating that they are clickable.

Here is an example of targeting an anchor element and using the :link pseudo-class:

/* Normal state (unvisited link) */
a:link { 
  color: red;
}
The above example will change the link's default blue color to red when it is unvisited.

:visited styles links that have already been visited or clicked, helping users track which links they have clicked before. Here’s an example usage of :visited pseudo-class:

/* Visited link */
a:visited {
  color: green;
}
This code will color the link to green when it is clicked.

:hover changes the link's style when the user hovers over it, providing a visual cue that the link is interactive. Here’s an example usage of :hover pseudo-class:

/* Hover state */
a:hover {
  color: yellow;
}
This code will color the links to yellow when mouse is hovered over it.

:focus adds styles around the link when it is focused, such as when navigating with a keyboard, or enhancing accessibility.

Here is an example using the outline property to apply a solid orange outline when the link is focused.

/* Focus state */
a:focus {
  outline: 2px solid orange;
}
:active changes the link's styles while the link is being clicked, providing immediate feedback to the user that their action is being registered. Here’s an example usage of :active pseudo-class:

/* Active state */
a:active {
  color: pink;
}
This code example will make the link to pink color immediately when the link is clicked.