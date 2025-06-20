Lesson 1


What is the purpose of WAI-ARIA, and how does it work?

Making static content accessible can be relatively straightforward, but dynamic content can be more challenging. This is where WAI-ARIA comes in.

Let's look at what WAI-ARIA is, its purpose, how it works, and some examples.

WAI-ARIA stands for Web Accessibility Initiative - Accessible Rich Internet Applications. It's a specification that enhances accessibility for dynamic content and UI (User Interface) components.

Note that WCAG and WAI-ARIA are not the same. WCAG provides general guidelines for web accessibility, while WAI-ARIA offers specific rules for making dynamic and interactive content accessible for users of assistive technologies.

So, the primary purpose of WAI-ARIA is to improve accessibility for dynamic content and UI components that do not have native HTML equivalents.

WAI-ARIA works by introducing a set of attributes you can add to HTML elements to provide additional semantic information. These attributes are categorized into roles, states, and properties.

ARIA role defines the purpose of an element within a website or web app. Here is an example of setting the role to button for a div element.

<div role="button">Click Me</div>
By doing this you are indicating to assistive technology that the element is a button. Roles do not provide any functionality however. Merely giving this div a role of button will not make it act like a button. To make it look and behave like a button you would need to use CSS and JavaScript to get the desired result. It is always better to use the native button or input element with type="button" instead.

Since HTML alone does not provide a way to make custom UI components like tabbed navigation (tab list) accessible, ARIA roles can be very helpful.

Here's what a tablist could look like with the role attribute:

<div role="tablist" aria-label="Football Match Dashboard">
   <button
     role="tab"
     aria-selected="true"
     aria-controls="match-info-panel"
     id="match-info-tab">
       Match Info
   </button>

   <button
     role="tab"
     aria-selected="false"
     aria-controls="player-stats-panel"
     id="player-stats-tab">
     Player Stats
   </button>
</div>
Each tab in the tablist will have an associated tab panel that will display when its tab is selected. Each tab panel will have a role of tabpanel.

Here's what each of those tab panels could look like:

<div 
  role="tabpanel"
  id="match-info-panel" 
  aria-labelledby="match-info-tab"
>
   <p>
     Details about the match, including date,
     time, venue, and current score.
   </p>
</div>

<div
   role="tabpanel"
   id="player-stats-panel"
   aria-labelledby="player-stats-tab"
   hidden
>
   <p>
     Individual player statistics such as goals,
     assists, and minutes played.
   </p>
</div>
ARIA state describes the current status of an element, which can change based on user interactions. An example is the aria-expanded attribute for collapsible sections:

<button aria-expanded="false" aria-controls="more-info">
  More Info
</button>

<div id="more-info" hidden>
   <p>This is additional information.</p>
</div>
Again, this is merely describing the state, it does not provide any functionality. You would have to use JavaScript to change the state of the attribute when the user clicks the button.

ARIA properties provide additional details about elements. For example, the aria-labelledby property lets you connect an element to a specific label:

<h2 id="header-id">About freeCodeCamp</h2>
<button id="button-id" aria-labelledby="header-id button-id">Learn More</button>
This will make the elements understandable and navigable for users of assistive technologies.

To get the best out of WAI-ARIA, try to stick with native HTML whenever possible since it generally provides more accessibility out of the box.

Use WAI-ARIA only when HTML falls short, and don’t forget to test with assistive technologies like screen readers, or have people with disabilities test your work. Also, make sure your WAI-ARIA states and properties update with the content in real time. Avoid overusing ARIA as it can be confusing many times.


Lesson 2
What are ARIA roles?

ARIA stands for Accessible Rich Internet Applications.

ARIA roles specify the semantic meaning of HTML elements. They're essential for making web content accessible to people who use assistive technologies, like screen readers.

HTML has semantic and non-semantic elements, based on whether they convey meaning about their content.

Many semantic HTML elements already have an ARIA role assigned by default. For example, the button element has a default ARIA role of button.

But non-semantic elements don't have a role. For example, screen readers will not know how to interpret the purpose of a div if you don't specify its role explicitly.

To specify the ARIA role of an element, you just need to add the role attribute, like this role="ARIA role", where value is the name of a role in the ARIA specification.

It is important to note that specifying a role on an element only does one thing: It informs assistive technology of the purpose of the element. It does not add any functionality or behavior to the element. If people expect a role to behave a certain way, it is up to you, the developer, to add that expected behavior. For example, adding a role of button to a div does not automatically make it clickable with a mouse or usable with a keyboard. It is the responsibility of the developer to add the expected behavior that allows the div to act like a button, and in most cases, it is just better to use the button element.

There are six main categories of ARIA roles:

Document structure roles
Widget roles
Landmark roles
Live region roles
Window roles
And Abstract roles
Let's take a look at them in more detail.

Document structure roles define the overall structure of the web page. With these roles, assistive technologies can understand the relationships between different sections and help users navigate the content.

However, most of the document structure roles are not used in modern web development because browsers already support equivalent semantic HTML elements, which should be prioritized whenever possible.

You should specify the roles that don't have an equivalent semantic element. For example: toolbar, tooltip, feed, math, presentation, none, and note.

There are other similar roles but these are the most commonly used ones. This is an example of a div with the math ARIA role. The div contains a mathematical equation.

<div role="math" aria-label="x squared + y squared = 3">
  x<sup>2</sup> + y<sup>2</sup> = 3
</div>
You'll also notice that the div has an aria-label attribute. The value of this attribute should be a string that represents the expression.

Widget roles define the purpose and functionality of interactive elements, like scrollbars.

Examples of widget roles include scrollbar, searchbox, separator (when focusable), slider, spinbutton, switch, tab, tabpanel, and treeitem.

Some of these roles have equivalent semantic elements. You should prioritize the semantic element over the role if there is one. For example, you should favor using the HTML button element over adding a role of button to a div.

Landmark roles classify and label the primary sections of a web page. Screen readers use them to provide convenient navigation to important sections of a page. You should use them sparingly to keep the overall layout simple and easy to understand. Examples of landmark roles are banner, complementary, contentinfo, form, main, navigation, region, and search. Each of these roles has a corresponding HTML equivalent, such as header, footer, aside, form, main, nav, section, and search. If you use the proper HTML elements to define the sections of your page then it is not necessary to explicitly add the role attribute to these elements.

Live region roles define elements with content that will change dynamically. This way, screen readers and other assistive technologies can announce changes to users with visual disabilities. These roles include: alert, log, marquee, status, and timer.

Window roles define sub-windows, like pop up modal dialogues. These roles include alertdialog and dialog. Please note that it is now considered a best practice to use the HTML dialog element and its associated JavaScript methods instead of manually creating a dialog.

And finally, we have abstract roles. These roles help organize the document. They're only meant to be used internally by the browser, not by developers, so you should know that they exist but you shouldn't use them on your websites or web applications.

With ARIA roles, you can create accessible and inclusive websites and web applications. They provide semantic information about the purpose and function of HTML elements.

Screen readers and other assistive technologies use this information to help users understand the content of your page and set expectations for how to use it, which helps ensure that everyone can have a great user experience.


Lesson 3

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


Lesson 4

What is the aria-hidden attribute, and how does it work?

If you ever need to display content while at the same time hiding it from people who use assistive technology, like screen readers, you can use the aria-hidden attribute.

You just need to add it to the HTML element that you want to hide and set its value to true, like you can see over here: aria-hidden="true".

This attribute hides the element and all of its children from the accessibility tree, while keeping them visible on the page. Common use cases include:

Icons and images that only have a decorative purpose.
Duplicated content.
It is important to remember that aria-hidden only hides content from assistive technology, such as screen readers. If the content should be hidden from everyone, then you should not use aria-hidden to hide it. For example, a hamburger menu that is currently collapsed must be hidden from all keyboard users, not just screen reader users. In this case you could set the CSS display property to none on the menu to remove it from the DOM when it is collapsed.

You should never use aria-hidden to hide an element that is focusable with the keyboard. The aria-hidden attribute only removes the element from the accessibility tree. It does not remove it from the DOM. Thus, it will still be possible for screen reader users to tab to the element, but their screen reader will not announce the element, effectively causing them to focus on "nothing".

Here's an example where we hide an icon from the accessibility tree by adding the aria-hidden attribute with a value of true.

We only keep the text exposed to assistive technologies to avoid any confusion that may arise from the redundancy of having both an icon and text for the same purpose.

<button>
  <i class="fa-solid fa-gear" aria-hidden="true"></i>
  <span class="label">Settings</span>
</button>
You do not need to use aria-hidden when:

The HTML element already has a hidden attribute.
The element or the element's ancestor is already hidden with display: none.
The element or the element's ancestor is already hidden with visibility: hidden.
In these three cases, the element is already removed from the DOM and thus hidden from the accessibility tree, so the aria-hidden attribute is not necessary.

As with using any ARIA attributes, you should always test with assistive technologies, and preferably having people with disabilities test your work, to make sure that it's easy to understand, even with these hidden elements.

You should also know that setting aria-hidden to false will not expose the element to assistive technologies if any of its parents has this attribute set to true.

The aria-hidden attribute is used to hide elements from people who use assistive technology, such as screen reader users.

While it can be helpful for hiding purely decorative elements and duplicated content, it should be used sparingly to avoid hindering accessibility.

In general, all content and functionality available on the page should also be available to people using assistive technology. The use case for aria-hidden is very narrow and should be limited primarily to making the experience cleaner for screen reader users by removing purely decorative or duplicate information. Do not use aria-hidden to hide content that you don’t think screen reader users would be interested in. Screen reader users deserve to have access to all information on the page.

By following these best practices and testing the user experience, you can create inclusive online experiences for everyone.


Lesson 5

What is the aria-expanded attribute, and how does it work?

The aria-expanded attribute is used for accessibility purposes to indicate if a control is expanded or collapsed. It's used in conjunction with collapsible widgets like menus, accordions and other disclosure widgets that control the visibility of content. The aria-expanded attribute is set to true if the control is expanded, or false if it is collapsed.

The information provided by aria-expanded allows people using screen readers to understand the current state of the control (whether it is expanded or collapsed).

The aria-expanded attribute is applied to the interactive element that toggles the visibility of a collapsible widget. For example, if a button toggles an expandable menu, the aria-expanded attribute is placed on the button.

When the menu is expanded, the aria-expanded attribute should be set to true like in this example:

<button aria-expanded="true">Menu</button>
When the menu is collapsed, it should be set to false instead.

<button aria-expanded="false">Menu</button>
You must always have the aria-expanded attribute set to either true or false on the controlling element. For example, if a button toggles the visibility of a menu, the default value for aria-expanded should be based on the default visibility of the menu.

If the menu is expanded by default, aria-expanded should initially be set to true. If the menu is collapsed by default, aria-expanded should initially be set of false.

The value of aria-expanded should be updated dynamically using JavaScript as the user interacts with the element.

Additionally, the properties, aria-controls and aria-owns can be used in combination with aria-expanded to establish a programmatic connection between the controlling element and the element it controls.

Let's start with aria-controls. When used with aria-expanded, the aria-controls attribute is used to specify the element being controlled. For example, a button might expand or collapse a list acting as a menu. The value of aria-controls will be the id of the controlled element (the menu list in this example).

<button aria-expanded="false" aria-controls="menu1">Menu</button>
<ul id="menu1">
  <li>...</li>
  <li>...</li>
</ul>
Notice that the list immediately follows the controlling button. For expandable controls like this, it is best to have the expanded content immediately follow the element that controls it in the DOM. This prevents screen reader users from having to search for the expanded content, and makes it easier for keyboard users to navigate through any interactive controls in the expanded content.

If it is not possible to place the expanded content immediately after the controlling element, the aria-owns attribute allows you to virtually move it after the control in the accessibility tree. This allows assistive technology like screen readers to pretend the expanded content is placed directly after the control in the DOM.

<button aria-owns="menu1" aria-expanded="true">Menu</button>
<main>
  <!-- an entire page worth of content --->
</main>
<ul id="menu1">
  <li>...</li>
  <li>...</li>
</ul>
There are drawbacks to using the aria-owns attribute. It creates unnecessary verbosity for screen reader users since most screen readers will automatically read out the entire contents of the expanded element when first expanded. It also does not change the tab order, potentially forcing keyboard users to tab through all of the other interactive controls on the page before reaching the expanded content, unless you manage the tabbing order with JavaScript.

Ideally, the expandable content should be placed after the control element, and the aria-owns attribute should only be used in a worst case scenario when that is not possible. If it must be used, you will need to thoroughly test with a wide range of screen readers and browsers to ensure that your implementation is accessible for everyone.

And just a reminder, when you use either aria-controls or aria-owns, the value of aria-expanded must continue to be updated as the control is expanded and collapsed.

The aria-expanded attribute indicates whether a control is expanded or collapsed. This information is essential for screen reader users, helping them understand the current state of collapsible elements like menus, accordions, and other similar disclosure widgets.

By using aria-expanded correctly, you can create an intuitive user experience for everyone.

Lesson 6 
What is the aria-live attribute and how does it work?

The aria-live attribute creates a live region on your page which can be used to notify screen reader users of dynamic content changes in the live region as they occur.

Common uses of live regions include messages that are displayed after an action has been taken (such as an error message or confirmation), content that updates periodically (such as a ticker, marquee, or countdown timer), or general status messages (such as updates about a process).

Because the reading focus for screen readers can only be at one place at a time, screen reader users will not notice a content change if their focus is on another part of the page. Live regions allow screen reader users to be automatically notified of changes that happen on the page in real time. Without a live region, screen reader users might miss important content updates available to sighted users, since a sighted user has the ability to scan the entire page.

There are three possible values for this attribute, based on the priority of the information.

If you set aria-live to the value assertive that means that the update is very important. It has the highest priority, so the user should be notified immediately.

This means that the screen reader will interrupt any announcement it is currently making to announce the content change in the live region. Such interruptions can be extremely disruptive, so the assertive value should only be used for time-sensitive or critical notifications.

<div aria-live="assertive">
  <p>Your session will expire in 30 seconds.</p>
</div>
The next value in order of priority is polite.

This value means that the update is not urgent, so the screen reader can wait until any current announcement is finished or until the user stops typing before announcing the update. Most live regions will use the polite value.

<div aria-live="polite">
  <p>File successfully uploaded</p>
</div>
The lowest priority value for aria-live is off which means that the update will not be announced unless the content is in an element that currently has keyboard focus. Realistically, this value is almost never used as the use case is very narrow and it is not implemented consistently (if at all) across screen readers. If you need live regions, plan on using polite for everything except critical messages that need assertive.

It's also important to note that the aria-live attribute is not required if the updated information is contained in an element with an ARIA role of alert, log, marquee, status, or timer, as these roles already have default aria-live values. But the default value can be changed by explicitly setting aria-live on the element.

Choosing the right aria-live value depends on the priority of the updated information.

If the updates are urgent, you should notify the user immediately with assertive. But you should use this only if the updates are really urgent because sudden interruptions can potentially disorient users and affect the user experience.

If the update can wait until the current task is finished, you should use polite instead.

The aria-live attribute lets assistive technologies know when the content is changing dynamically on a web page. This helps users with disabilities stay updated on important announcements and updates.

By using aria-live appropriately, you can ensure that users are aware of these updates based on their priority.

Lesson 7 
 
What are some common ARIA states used on custom control elements?

Semantic form control elements like input, select, textarea, button, and fieldset have built-in states that are conveyed to assistive technologies.

For example, you could use the disabled attribute to disable a button or the checked attribute to indicate that a checkbox is checked.

But if you are creating a custom control element, you need to use ARIA attributes to convey the state of the control to assistive technologies.

In this lecture video, we will discuss a few common ARIA states that you can use on custom control elements.

The first ARIA state we will discuss is aria-selected. This state is used to indicate that an element is selected. You can use this state on custom controls like a tabbed interface, a listbox, or a grid.

Here is an example of how you can use aria-selected on a custom tab control:

<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
  <button role="tab" aria-selected="false">Tab 3</button>
</div>
Tabs are used to display multiple panels of content in a limited space. The aria-selected state is used to indicate which tab is currently selected.

When the user selects a tab, the aria-selected state of the selected tab is set to true, and the aria-selected state of the other tabs is set to false.

Another common ARIA state is aria-disabled. This state is used to indicate that an element is disabled only to people using assistive technologies, such as screen readers. It is important to note that aria-disabled does not actually disable the element. It is up to you, the developer, to make it look and act like a disabled element. This attribute is also commonly used on native HTML elements in place of the disabled attribute. Which one you choose will depend on the context the button is being used.

Here is an example of how you can use aria-disabled on a custom edit button:

<div role="button" tabindex="-1" aria-disabled="true">Edit</div>
The aria-disabled attribute is used to tell screen reader users that the edit button is disabled and cannot be interacted with. Again, it does not actually disable the button. When using aria-disabled,you will need to apply styling and JavaScript to make the control look and behave like a disabled button.

In most cases, you will probably use the native button element, but there are cases where you might need to use a custom control. So, it is essential to know how to convey the state of the control to assistive technologies.

The next ARIA state we will discuss is aria-haspopup. This state is used to indicate that an interactive element will trigger a popup element when activated. You can only use the aria-haspopup attribute when the popup has one of the following roles: menu, listbox, tree, grid, or dialog. The value of aria-haspopup must be either one of these roles or true, which defaults to the menu role.

Here is an example of a file editor menu that uses aria-haspopup:

<button id="menubutton" aria-haspopup="menu" aria-controls="filemenu" aria-expanded="false">File</button>
<ul id="filemenu" role="menu" aria-labelledby="menubutton" hidden>
  <li role="menuitem" tabindex="-1">Open</li>
  <li role="menuitem" tabindex="-1">New</li>
  <li role="menuitem" tabindex="-1">Save</li>
  <li role="menuitem" tabindex="-1">Delete</li>
</ul>
The aria-haspopup state is used to indicate that the File menu button will open a popup menu when activated. Screen reader users may hear this additional information when they navigate to the button.

You will need to use JavaScript to show and hide the popup menu, and to implement proper keyboard support for interacting with the menu. Also, please note that the ARIA menu role refers to a very specific type of menu. It generally refers to a list of actions that the user can invoke, similar to a menu on a desktop application. It does not include more common uses of what we typically refer to as "menus", such as navigation menus. Realistically, most "menus" you create on the web will not be ARIA menus and you will not use aria-haspopup with them.

The next ARIA state we will discuss is aria-required. The aria-required attribute is used to indicate that a field needs to be filled out before the form is submitted. Here is an example of working with the aria-required attribute for a custom form control.

<div id="name-label">Full Name*</div>
<div role="textbox" contenteditable aria-labelledby="name-label" aria-required="true" id="name"></div>
We need to use the contenteditable attribute so users can type in their input. We are also using the aria-required attribute set to true to indicate that this custom form control is required.

To make the form control look like a normal form control, you would need to add CSS. You would also need to add JavaScript to prevent the form from being submitted without content.

If the label already has the word required, then you should omit the aria-required attribute. This ensures that screen readers only announce the word required once.

In most cases, you will probably use the native label and form elements with the required attribute. But if you need to create a custom form control, then it is important to add the aria-required attribute when necessary.

Additionally, the aria-required attribute can also be used on native form inputs, such as the input, textarea, and select elements. This is often preferred to the native required attribute, since the required attribute may have potential usability and accessibility concerns, particularly with the default error handling provided by the browser. Ultimately, you will need to test in order to determine which attribute is best for your situation.

The last ARIA state we will discuss is aria-checked. This attribute is used to indicate whether an element is in the checked state. It is most commonly used when creating custom checkboxes, radio buttons, switches, and listboxes.

Here is an example of how you can use aria-checked on a custom checkbox control:

<div role="checkbox" aria-checked="true" tabindex="0">Checkbox</div>
Native checkbox elements have a built-in checked state that is conveyed to assistive technologies. But if you are creating a custom checkbox control, you will need to use the aria-checked attribute to indicate its state.

When the user interacts with the custom checkbox control, you will need to use the aria-checked state to reflect the new state of the checkbox. When the checkbox is checked, the aria-checked attribute is set to true. When it is unchecked, it is set to false.

Native elements typically have better support and built-in accessibility features.

However, if you must create custom controls, using ARIA attributes is essential to convey the state of these controls to assistive technologies effectively.

As always, test your work to ensure that ARIA attributes are applied correctly and that the custom control functions in a way that is both accessible and user-friendly.


Lesson 8 
What is the aria-controls attribute, and how does it work?

The aria-controls attribute is used to create a programmatic relationship between an element that controls the presence of another element on the page, and the element it controls. This relationship can help screen reader users better understand how the control works. Common uses include a set of tabs that control the visibility of different sections of content, or a button that toggles the visibility of a menu.

Let's take a look at an example to see how this works. In this example of a tabbed interface, we have a div element with a set of three buttons:

<div role="tablist">
  <button role="tab" id="tab1" aria-controls="section1" aria-selected="true">
    Tab 1
  </button>
  <button role="tab" id="tab2" aria-controls="section2" aria-selected="false">
    Tab 2
  </button>
  <button role="tab" id="tab3" aria-controls="section3" aria-selected="false">
    Tab 3
  </button>
</div>
Each button represents a tab and has a role attribute set to tab. In most tabbed interfaces, the first tab panel is visible by default, so the first tab button has an aria-selected attribute set to true to indicate that its associated section of content is currently visible The aria-controls attribute is used to associate each button with the section of content that it controls.

Here are the three sections of content that correspond to the tabs:

<div id="section1" role="tabpanel" aria-labelledby="tab1">
  Section 1 content
</div>

<div id="section2" role="tabpanel" aria-labelledby="tab2" hidden>
  Section 2 content
</div>

<div id="section3" role="tabpanel" aria-labelledby="tab3" hidden>
  Section 3 content
</div>
Each section of content has a role attribute set to tabpanel and an aria-labelledby attribute that points to the corresponding tab to give the panel an accessible name. The hidden attribute is used to hide the sections of content that are not currently selected. Each section id matches the value of the aria-controls attribute on the corresponding button. The section1 id matches the aria-controls attribute on the first button, section2 matches the aria-controls attribute on the second button, and section3 matches the aria-controls attribute on the third button. This is how the association between the tabs and their sections of content is established.

To switch between the different sections you will need to use JavaScript to update the hidden attribute on the section and the aria-selected attribute on the button based on which section is currently visible. Only one section can be visible at a time and it should not have the hidden attribute and aria-selected should be set to true on its button. The remaining hidden sections should all have the hidden attribute and aria-selected should be set to false on their buttons.

Tabs are a common use case for the aria-controls attribute, but it can be used in other scenarios where one element controls the visibility or behavior of another element. Other examples include accordions, dropdown menus, and modals.

The next time you design a user interface that involves controlling the visibility of elements, consider using the aria-controls attribute to establish the relationship between the controlling element and the controlled element.


Lesson 9 
What is the aria-describedby attribute, and how does it work?

The aria-describedby attribute is used to provide additional information about an element to screen reader users by referencing existing content on the page. It creates a programmatic association between the element and the content (technically referred to as an accessible description), which screen readers can use to inform users of the additional information when they interact with the element.

The most common use for aria-describedby is to associate instructions and error messages with form inputs. Due to the various methods screen reader users have for navigating a page, they may miss these messages when navigating between inputs. Using aria-describedby helps ensure that they will hear them.

Let's take a look at a few examples to understand how it works. In this first example, we have a form element that accepts a password:

<form>
  <label for="password">Password:</label>
  <input type="password" id="password" aria-describedby="password-help" />
  <p id="password-help">Your password must be at least 8 characters long.</p>
</form>
We are using a label element for the Password text and associating that with the password input field.

We also have a paragraph element that describes the password requirements. We are using the aria-describedby attribute to associate the password input field with the password requirements in the paragraph element. When a screen reader user interacts with this input, their screen reader will announce the name of the input (Password) and may then also announce the password requirements. This is not an absolute guarantee however as some screen readers may not automatically announce the additional content, or may only announce it in specific circumstances. This is not uncommon. Each screen reader is different and handles ARIA attributes in their own way. This does not negate the use of aria-describedby, as it will benefit screen reader users in general.

Another good use case for the aria-describedby attribute is when you have a delete button. Here is an example of a delete button followed by a message describing what will happen when the button is clicked:

<button aria-describedby="delete-message">Delete</button>

<p id="delete-message">Warning! All deletions are permanent.</p>
Just like in the earlier example, we associate the delete button with the message using the aria-describedby attribute. The id value and the value of the aria-describedby attribute must match.

The aria-describedby attribute is a powerful attribute that can be used to help ensure that additional information about an element is provided to screen reader users when they interact with the element. It is most commonly used to associate instructions and error messages with form inputs in order to reduce the chance that screen reader users will miss these messages as they navigate the form.