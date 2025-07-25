<!-- @format -->

In these lecture videos, you will learn about the best practices for styling forms and issues you can encounter while styling special inputs like color and datetime-local.

(Lesson1)
What are some of the best practices for styling text inputs?

As with all text elements you need to ensure the styles you apply to the text input are accessible. This means the font needs to be adequately sized and the color needs to have sufficient contrast with the background.

The placeholder, however, is often forgotten. It's important to remember that this is also text and you will likely need to change the styling to ensure it's readable.

Another thing to keep in mind is that you should allow the user to modify the input. For example, if it's a text area you should not remove the ability to resize it. The input should also scale accordingly when the user zooms the page.

Input elements are also focusable. When you are editing your styles you should take care that you preserve a noticeable indicator when the element has focus such as a bold border. Additionally there is the error state to consider. When the user's text does not pass the input validation there is a visual indicator that shows there is something wrong. As you give your element your personal flair you want to be sure that state is still noticeable and that it does not look similar to the focus indicator. With all this in mind you can now create captivating user forms.

(Lesson 2)
When should you use appearance: none to deal with issues styling search inputs and checkboxes?

Let's learn when to use appearance: none to address styling issues for search input, checkboxes and radio buttons.

Browsers apply default styling to a lot of elements. In the case of input elements your ability to style them with CSS can feel rather restricted. So, you may want to use appearance: none to hide aspects of the default element and build your own instead. For example, this would hide the default checkboxes for a checkbox input allowing you to use custom indicators like a green tick and a red X to show the state. For a search input, WebKit based browsers will show a default search icon and a cancel button. Hiding these allows you to create your own indicators that would appear on all browsers.

WebKit is a software engine that helps web browsers display websites. Browsers like Safari use WebKit to make sure web pages look and work correctly. This appearance: none CSS property gives you complete control over the styling, but it does come with some things to look out for. The default interactive components of input elements include features such as focus and error indicators which you will need to ensure aren't lost.

Creating consistent cross-platform styling is a great reason to use this property. You can also use it to ensure that tap targets on a mobile device are large enough or that the colors of a checkbox have enough contrast.

(Lesson3)

Let's learn about some of the common issues when trying to style special input elements like the datetime-local and color inputs.

These special types of inputs rely on complex pseudo-elements to create things like the date and color pickers. This presents a significant challenge for styling these inputs. One challenge is that the default styling is entirely browser-dependent, so the CSS you write to make the picker look the way intend may be entirely different on another browser.

Another may be the complexity of the pseudo-element. Consider the date selector; there are a lot of moving parts here and the complex structure of the pseudo-element might pose a significant challenge in applying styling to the right areas.

Of course, with these complex elements, you also run the risk of accidentally losing important functionality when you manually style them. Not only could you lose important indicators like the focus state or selected item but you could potentially break the selector entirely.

For these reasons many developers rely on JavaScript libraries or custom components entirely instead of using the browser's built-in components.
