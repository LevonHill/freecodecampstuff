<!-- @format -->

What are the roles of the aria-label and aria-labelledby attributes?

It is important to make sure that all users, including those living with disabilities, can access websites without issues.

For people using screen readers, the aria-label and aria-labelledby attributes provide crucial information about page elements that might be unclear or invisible.

Let's look at what the aria-label and aria-labelledby attributes are and the roles they play in making the web accessible to people with visual impairments and related disabilities.

You'll notice both aria-label and aria-labelledby are prefixed with aria. So what does that mean? ARIA stands for Accessible Rich Internet Applications. It's a set of attributes prefixed with aria-, which lets developers communicate the purpose of elements to assistive technologies. The aria-label attribute is an invisible label for interactive elements. It adds a text label to an element that screen readers can read.

aria-label is especially useful for elements that do not have visible text but still need to be described by screen readers. For example, buttons with only icons often need aria-label to convey their purpose.

Here is an example:

<button aria-label="Search">
  <i class="fas fa-search"></i>
</button>
In this case, a screen reader may announce this button as Search, button, even though the button only contains an icon. The aria-label attribute tells screen readers what text to use in place of the icon.

If the button contained the text "Search" instead of an icon, then there would be no need for the aria-label attribute as the text would provide the label for the button.

For input elements, the aria-label attribute provides a label directly if there isn't a visible label associated with the input.

The aria-labelledby attribute does the exact same thing as the aria-label attribute, but instead of defining the text directly in the attribute, you use a reference to text that already exists on the page. The existing text must have an id attribute, which will be used for the reference value in the aria-labelledby attribute.

Here's an example:

<input type="text" aria-labelledby="search-btn">
<button type="button" id="search-btn">Search</button>
In this case, the text for the button is being used as the label for the search input. Screen readers will announce the input as something like Search, edit. If you later decide you want to change the button text to Find, the label for the input will automatically be updated to the new text since it is referencing the button text. Combining multiple id values into a single aria-labelledby attribute value is also possible. Here's how that works:

<div>
  <span id="volume-label">Volume</span>
  <span id="volume-details">Adjust the volume level</span>
  <input
    type="range"
    min="0"
    max="100"
    value="30"
    aria-labelledby="volume-label volume-details">
</div>
For the slider, the screen reader will look out for the content of the volume-label and volume-details elements and announce Volume Adjust the volume level.

You've seen that both aria-label and aria-labelledby attributes help screen readers understand what elements do. So, which one should you use? Since they both provide the same functionality, either can be used, but there may be a few advantages to using aria-labelledby over aria-label:

If someone is using a translation service to translate the content on your page, the text in an aria-label attribute may not always be translated.
Using aria-labelledby can also help prevent a mismatch between the visible label text and the invisible label for screen reader users since updating the visible text will automatically update the invisible label.
aria-labelledby can make it much easier to programmatically create complex invisible labels consisting of multiple sources of text.
One last note, do not use aria-label and aria-labelledby on an element at the same time. In this case, the invisible label for screen readers will always be determined by aria-labelledby and aria-label will be completely ignored.
