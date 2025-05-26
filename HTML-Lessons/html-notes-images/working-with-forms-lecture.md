<!-- @format -->

In these lecture videos, you will learn about forms, the role of labels, inputs and buttons in creating forms, client-side form validation, and form states.

1. How do forms, labels, and inputs work in HTML? The form element in HTML is used to gather user information such as names, and email addresses example, <form action="Url-goes-here">the action attribute specifies where the form data will be sent upon submission,to collect specific informaiton like, "names, and emails"
   you would use the input element, <label>Full Name: <input type="text"></label> input elements are void elements and do not have closing tags, the type attributes defines, the data type expected from the user in this case the data would plain text...
   <!-input element goes here->

Next to add a label for the input you would use a label element here is an example <label>FullName:</label> now by nesting an input element inside a label element you, create an impicit association. Between the label and the input field... the term "implicit - something that is understood or inferred without needing to be explicitly state or defined with additonal attributes or elements...!!

</form>
Now t0 explicitly associate a label with an input you can use the for attribute...
when using an explicit association the values for the "for" attributes and "ID" need to be the same!! ,type in the input provides a basic validation for correctly formated email addresses, if we need more hints to the user lets use placholder attribute...!!
<form action=''>
<lable for ="email">Email Adress</label>
<input type="email" id="email" placeholder="ex.example@emeial.com">
</form>

2. What are the different types of buttons, and when should you use them? The buttom element is used to perform a particular action when it is activated.Heres an example <button>Start Game</button>, other examples of using the button element include submitting a form ,showing a model or toggling a side menu open and closed...!! , the button element has a type attirbute, that controls the behavior of the button when it is activated,
   <button type="button">Show Alert</button> by default it wont do nothin whehn activated, however you can add javascript code to make the button interactive such as showing an alert,

   another possible value for the type is this submit value, <button type="submit">Save form</button>, once this is clicked data will get sent to server to be processed.

Another attribute is the reset attribute <button type ="reset">Rest Form</button>

<form action=''>
<lable for ="email">Email Adress</label>
<input type="email" id="email" placeholder="ex.example@emeial.com">
<button type="reset">Reset Form</button> reset buttons arent the best idea, because they can lead to users accidently reseting data, it can also clutter UI
<button type="submit">Submit Form</button>

whats the different between button and input? Well, input elements are void which means they cant have child nodes such as text and can only have a start tag on the other hand the button offers more flexiability because you cna nest text, icons, images inside

another input type is to use the input type button <input type="button"value="show Alert">

</form>

3. What is client-side form validation in HTML forms, and what are some examples? when a user fills out a form on your website its important that they fill out all the needed information in the correct ,format, html form controls like inputs have alot of built-in validation that you can use to check for invalid data this will help ensure the user fixes the mistakes, before the information is submitted and processed by the server...
   The term "client-side - refers to everything that happens on the user's computer or device. Like the part of a website or app you interact with directly , this includes the layout design and any interactive features, The term "server-side"- refers to everything that happens on the server the computer or... system that host the website or app, this includes processing data running applications and handling request that come fro, the users device, now while the clien side validation is important you also need server aside validation for added security, malicious users can bypass client-side checks.... so robust server side measures are ESSENTIAL..!! you'll learn more later... Lets look at client-side form validation examples one commone example of form validation is to use required attribut in "inputs" the required attribute specifies that the user needs to fill out that portion of the form before it gets submitted...heres the example:
   <form action ="">
   <label for="email">Email Address (Required Fields):</label>
   <input required type="email" name="email" id="email" minlength="4" maxlength=""64 >
   <button type="submit">Submit From</button>
   </form>
   Now when the user click on the submit form button, without suppliying the email address they will be alerted the field is required,

4.What are the different form states, and Why are they important? FOR HTML form controls like inputs can be in different stages...., or conditions like a focused state, read-only state, or disabled state..., the first state is considered the default state
