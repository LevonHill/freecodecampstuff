<!-- @format -->

Lesson 1
What Role Does HTML Play on the Web?

HTML, which stands for Hypertext Markup Language, is a markup language for creating web pages. When you visit a website and see content like paragraphs, headings, links, images, and videos; that's HTML. HTML represents the content and structure of a webpage through the use of elements. Here's an example of a paragraph element:

Example Code

<p>Hello</p>
Most elements will have an opening tag and a closing tag. Sometimes those tags are referred to as start and end tags. In between those two tags, you will have the content. This content can be text or other HTML elements. Both opening and closing tags start with a left angle bracket (<), and end with a right angle bracket (>), with the tag name placed between these angle brackets. Here is a closer look at just the opening and closing paragraph tags:

Example Code

<p>
Example Code
</p>
What distinguishes an opening tag from a closing tag is the forward slash (/) placed immediately after the left angle bracket in a closing tag. Some HTML elements do not have a closing tag. These are known as void elements. Here is an example of an image element which is a void element:

Example Code
<img>
Notice that this image element does not have the closing tag and it does not have any content. Void elements cannot have any content and only have a start tag. If you wanted to display an image, you will need to include a couple of attributes inside your image element. An attribute is a special value used to adjust the behavior for an HTML element. Here is an example of an image element with a src, or source, attribute:

Example Code
<img src="image location" />
The src attribute is used to specify the location for that image. For image elements, it's good practice to include another attribute called the alt attribute. Here's an example of an image element with the src and alt attributes:

Example Code
<img src="example-cat-img-url" alt="Cat sleeping in the grass">
The alt attribute is used to provide short, descriptive text for the images. In this case, the descriptive text is a "Cat sleeping in the grass".

So, you might be wondering if HTML by itself is enough to build a website. Well, the answer is: it depends. If you're building a small practice project that only displays text and images, HTML alone might be sufficient. However, if you're creating a modern professional website, you will need to have HTML, CSS, and JavaScript.

HTML is for the content and structure. CSS is for styling. JavaScript is for adding interactivity to your web pages. A good analogy for this is to compare HTML, CSS, and JavaScript with a complete building. HTML represents the blocks, concrete, and irons that make up the walls. It's the foundation that makes the building strong. CSS represents the interior and exterior design that makes the house look beautiful. JavaScript represents the electrical and water system that ensures uninterrupted access to water and electricity.

Lesson 2
What are attributes and how do they work ??

An attribute is a value placed inside the opening tag of an HTML element. Attributes provide additional information about the element or specify how the element should behave. Here is the basic syntax for an attribute:

Example Code
<element attribute="value"></element>
The attribute name is followed by an equal sign (=) and a value in quotes. The value can be a string or a number, depending on the attribute.

Let's take a look at a few examples of common HTML attributes. The first example is the href attribute, which is used to specify the URL of a link:

Example Code
<a href="https://www.example-website.com">Visit our website</a>
Without this attribute, the link would not work because there would be no destination URL. So you must include this href attribute to make the link functional. Other common attributes are the src, or source, and alt, or alternative, attribute - which is used to specify the source of an image and provide alternative descriptive text for the image, respectively:

Example Code
<img src="image.jpg" alt="A beautiful image" />
Similar to the href attribute, the src attribute is required because it specifies the image file to be displayed. The alt attribute is not required, but it is recommended for accessibility purposes. Accessibility means making sure that everyone, including those with disabilities, can use and understand things like websites, apps, and physical spaces. You will learn more about accessibility in the upcoming lectures.

Some attributes are a little unique with their syntax like the checked attribute shown here:

Example Code
<input type="checkbox" checked />
In the following example, we have an input element with the type attribute set to checkbox. Inputs are used to collect data from users, and the type attribute specifies the type of input. In this case, this input is a checkbox. You will learn more about how inputs work in the upcoming lectures. The checked attribute is used to specify that the checkbox should be checked by default. The checked attribute does not require a value. If it is present, the checkbox will be checked by default. If the attribute is not present, the checkbox will be unchecked. This is known as a boolean attribute. You will learn more about booleans in general when you get to the JavaScript section. There are several common boolean attributes you will encounter in HTML, such as disabled, readonly, and required. These attributes are used to specify the state of an element, such as whether it is disabled, read-only, or required.

HTML has many attributes that can be used to customize the behavior and appearance of elements on a webpage. Understanding how to use attributes is essential for creating interactive and accessible web content. Over the next few lectures, you will learn about more HTML attributes and how to use them effectively in your web development projects.

Lesson 3
What Is the Role of the Link Element in HTML, and How Can It Be Used to Link to External Stylesheets?

Let's learn about the link element, and how to use it to link to external stylesheets.

The link element is used to link to external resources like stylesheets and site icons. Here is the basic syntax for using the link element for an external CSS file:

Example Code

<link rel="stylesheet" href="./styles.css" />
The rel attribute is used to specify the relationship between the linked resource and the HTML document. In this situation, we need to specify that this linked resource is a stylesheet.

It is considered best practice to separate your HTML and CSS in different files. Developers will use the link element for their external CSS file instead of writing everything in the HTML document.

The href attribute is used to specify the location of the URL for the external resource.

The dot followed by a forward slash in the example tells the computer to look in the current folder, or directory, for the styles.css file.

The link element should be placed inside the head element as seen in the following example:

Example Code

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Examples of the link element</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
Often times you will see multiple link elements inside a professional codebase that link to different stylesheets, fonts, and icons. Here is an example of using the link element to link to an external Google Font called Playwright Cuba:

Example Code

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap"
  rel="stylesheet"
/>
Google Fonts are a set of free and open source custom fonts that you can use inside any project. You can choose which fonts you would like to use and Google will provide you with the necessary HTML and CSS code. In this example, the preconnect value for the rel attribute tells the browser to create an early connection to the value specified in the href attribute. This is done to speed up loading times for these external resources.

Another common use case for the link element is to link to icons. Here is an example of linking to a favicon:

Example Code

<link rel="icon" href="favicon.ico" />
A favicon, which is short for favorite icon, is a small icon typically displayed in the browser tab next the site title. A lot of websites will use a favicon to display their brand icon.

Lesson 4
Let's learn about the HTML boilerplate.

What is the HTML boilerplate, you ask? It's like a ready-made template for your webpages. Think of it as the foundations of a house. A boilerplate includes the basic structure and essential elements every HTML document needs. It saves you time and helps ensure your pages are set up properly. Here is an example:

Example Code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
       name="viewport"
       content="width=device-width, initial-scale=1.0" />
    <title>freeCodeCamp</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
  </body>
</html>
Let's break down the key parts of this boilerplate. First, there is the DOCTYPE declaration:

Example Code

<!DOCTYPE html>

It tells browsers which version of HTML you're using. Next, comes the html tag:

Example Code

<!DOCTYPE html>
<html lang="en">
  <!--All other elements go inside here-->
</html>
This wraps around all your content, and can specify the language of your page. Inside the html tag, you'll find two main sections - a head, and a body:

Example Code

<!DOCTYPE html>
<html lang="en">
  <head>
    <!--Important metadata goes here-->
  </head>
  <body>
    <!--Headings, paragraphs, images, etc. go inside here-->
  </body>
</html>
The head section contains important behind-the-scenes information:

Example Code

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document Title Goes Here</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
Your site's metadata, contained in meta elements, has details about things like character encoding, and how websites like Twitter should preview your page's link. Your site's title, found in the title element, determines the text that appears in the browser tab or window. Finally, you'll typically link your page's external stylesheets in the head section using link elements.

The body section is where all your content goes:

Example Code

<body>
  <h1>I am a main title</h1>
  <p>Example paragraph text</p>
</body>
Now, why is a boilerplate important? It ensures your pages are structured correctly and work well across different browsers. Using a boilerplate helps you avoid common mistakes and follow best practices. It's a great starting point for any web project. Remember, you can customize your own boilerplate to fit your needs. As you gain experience, you might add your own preferred elements or meta tags. As you continue to improve your personal boilerplate, you'll find that it saves you time when starting new projects.

Next time you start a new HTML file, consider using a boilerplate. It will definitely give you a solid foundation to build on.

Lesson 5

What is UTF-8 character encoding, and why is it needed?

UTF-8, or UCS Transformation Format 8, is a standardized character encoding widely used on the web. Character encoding is the method computers use to store characters as data. Essentially, all text on a web page is a sequence of characters stored as one or more bytes. In computing, a byte is a unit of data consisting of 8 bits, or binary digits. UTF-8 supports every character in the Unicode character set - and this includes characters and symbols from all writing systems, languages, and technical symbols. Here is an example of using the meta element with the charset attribute to set the character encoding to UTF-8:

Example Code

<meta charset="UTF-8" />
By setting the character encoding to UTF-8, it will ensure that the accented "e" character (é) is displayed correctly on the page. Here is an extended code example of using the UTF-8 character encoding:

Example Code

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Examples of the UTF-8 encoding</title>
  </head>
  <body>
    <p>Café</p>
  </body>
</html>
For each new project you create, you should include this meta element with the charset attribute set to UTF-8.
