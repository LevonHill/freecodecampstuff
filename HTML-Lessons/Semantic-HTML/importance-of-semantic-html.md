<!-- @format -->

Lesson 1
Why should you care about semantic HTML?

Semantics are the meaning of words, or phrases, in a language. In HTML, which is a language, elements have their own semantic meaning too. In fact, you can think of your HTML document like you would a text document. And much like a text document, you might have headings, images, bold text, and other formatting.

The semantic meaning of an element refers to what special information that element conveys. The semantic meaning of a p element, for example, is a paragraph of text:

Example Code

<p>
  Let me tell you about my fantastic holiday in Paris.
  I saw the impressive Eiffel Tower up close!
</p>
Most elements have semantic meaning. The div element is one of the very few that does not. But why is this important?

First and foremost, using proper semantic HTML will ensure the best experience for users with assistive technology like screen readers. But also, semantic HTML can improve your search rankings. This is referred to as search engine optimization, or SEO.

Finally, using correct semantic elements can improve your development experience. Rather than having to sift through a bunch of developments to find your navigation bar, you can edit the nav element directly and know what you're changing. Throughout this section, you will learn more about these topics, how to use semantic elements, and why semantic HTML is so important.

Lesson 2
Why is it important to have good structural hierarchy?

The most important aspect of creating a structural hierarchy is the proper use of heading elements. Heading elements are numbered as h1, h2, h3, and so on. These numbers represent the heading level for that element.

Much like a text document, you do not want to use heading levels in the incorrect order. Your h1 element is your top-level heading. You will rarely have more than one of these on a page, and it should typically come before all of your content.

Your h2 element is your subheading. It should always come after your h1 and might come after some introductory text. Unlike an h1 element, you can have multiple h2 elements on your page. You'll often do this to delineate different sections of content.

Following the pattern, your h3 element should always come after an h2 element. That is, you should never skip directly from h1 to h3. You can, however, have multiple heading elements at the same level. For example, this code is correct:

Example Code

<div>
  <section>
    <h1>freeCodeCamp</h1>
    <h2>Learn Front-End Development</h2>
    <h2>Learn Back-End Development</h2>
  </section>
</div>
But this code would not be correct, because h3 comes before h2:

Example Code

<div>
  <section>
    <h1>freeCodeCamp</h1>
    <h3>Learn Front-End Development</h3>
    <h2>Learn Back-End Development</h2>
  </section>
</div>
It may be tempting to use a specific heading element because of its styling, such as h1 for large text:

Example Code

<article>
  <p>
    Here is some
    <h1>Large Text</h1>
  </p>
</article>
Instead, you should choose the appropriate element for your document structure and use CSS to achieve the styling you'd like.

Using the right hierarchy is important for accessibility. Assistive technologies, like screen readers, rely on the structure of a web page to determine how to parse and announce that web page to the user. Using an h3 element after an h1 might cause a screen reader user to believe they have accidentally skipped over important content, due to the lack of an h2 element.

Proper structure is also important for SEO. Search engines use automation to parse the content of your web page and determine when and where it should show up in results. If your structure is malformed, search engines may not be able to rank you very well in the relevant search results.

Finally, depending on how incorrect your structure is, your HTML may not even be technically valid. When this happens, the web browser has to effectively guess what you meant to do. And what it guesses might not even be what you want at all.

As you have learned today, there are many reasons to use the proper structural hierarchy for your page. Keep this in mind as you build new projects.

Lesson 3

What's the difference between presentational and semantic HTML?

Presentational HTML focuses on the appearance and style of the content. In the early days of HTML, developers would use elements like the center, big, and font elements. But in modern web development you shouldn't use these types of elements, because of their limitations and negative impact on accessibility and maintainability.

Many presentational HTML elements are deprecated, which means that they are outdated and no longer recommended. There are better ways to get the same results. However, it is helpful to know that they exist, so we'll take a look at some examples.

The font element is a deprecated element used to set the font size and color of the text. Here's an example of a font element:

Example Code
<font size="5" color="blue">This text is blue and large.</font>
This example sets the color of the text to blue and the size to a value of 5. The range for the size attribute is from 1 to 7, with 1 being the smallest and 7 being the largest. The default value is 3, if you don't set the value explicitly.

While this element still works, you should not use it because the font size and color should always be set in CSS, not in HTML.

The center element is another deprecated element that is used to center the content horizontally within its container. Here's an example of the center element that contains text and a paragraph element:

Example Code

<center>
  This text is centered.
  <p>HTML is awesome.</p>
</center>
In the browser, you would see all of the content within the center element centered horizontally.

And next, we have the big element. This is another deprecated presentational HTML element that makes the enclosed text one level bigger than its surrounding text. Here we have an example that defines a paragraph with two parts:

Example Code

<p>
  This text has a normal font size.
  <big>This text is larger.</big>
</p>
The first part has normal sized text, while the second part enclosed within the big element will be displayed in a larger font size. In the browser, you would see the text within the big element looks larger compared to the surrounding text.

However, remember that font size should always be set with CSS, so you should not use this element in modern HTML.

These were examples of presentational HTML elements. But all of them are deprecated and no longer recommended. So what should you use instead? Let's see.

Semantic HTML is now the recommended practice. It describes the content of the elements, so it's much easier to read, understand, and maintain.

Search engines can easily understand your website when you use semantic HTML. It's also helpful for accessibility purposes, because screen readers need semantic information to describe what's on the web page.

Examples of semantic HTML elements include:

The header element for defining the header of the document, or section.
The navigation section element, nav, for sections with navigation links.
The section element for grouping related information.
The figure element for illustrations and diagrams.
This is an example of a header element that contains a navigation section element:

Example Code

<header>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>
The semantic elements clearly show their purpose within the HTML structure. There are many different semantic HTML elements. You will definitely find one that fits the needs of your project.

Great work. Now you know the difference between presentational and semantic HTML: semantic HTML describes the content, while presentational HTML focuses on the appearance.

Lesson 4
When should you use the emphasis element over the idiomatic text element?

These elements are very closely related to the concepts of presentational and semantic HTML. The idiomatic text element, i, was originally used for presentational purposes to display the text in italics. But now, it is frequently used for highlighting alternative voice or mood, idiomatic terms from another language, technical terms, and thoughts.

Here is example from the official HTML spec, using the i element to show an idiomatic phrase in French:

Example Code

<p>There is a certain <i lang="fr">je ne sais quoi</i> in the air.</p>
The lang attribute inside the open <i> tag is used to specify the language of the content. In this case, the language would be French. The i element does not indicate if the text is important or not, it only shows that it's somehow different from the surrounding text.

If you do need to emphasize the importance of the text, you can use a similar semantic element called the emphasis element, em. This is usually recommended if you need to provide more context. You should use this element for parts of the text that require a special emphasis compared to surrounding text. It's usually limited to only a few words, because it can alter the meaning of the sentence.

This is an example of the emphasis element within a paragraph:

Example Code

<p>
  Never give up on <em>your</em> dreams.
</p>
You can see the sentence Never give up on your dreams. Notice that the word your will be emphasized, because it's inside this element. In the browser you would see the word your is italicized to tell readers that this is an important word in the sentence.

Even if it looks the same when the text was inside the idiomatic text element, the semantic emphasis element conveys its meaning and importance behind the scenes.

It's important to know that these elements should not be used for presentational purposes only. If you need to display the text in italics, but the text doesn't have a special purpose, style, or meaning in the paragraph, you should use CSS instead.

Lesson 5
When should you use the strong element over the "bring attention to" element?

The "bring attention to" element, b, is commonly used to highlight keywords in summaries, or product names in reviews. Usually, browsers display this text in boldface. Here's an example using the b element to highlight product names in this review:

Example Code

<p>
  We tested several products, including the <b>SuperSound 3000</b> for audio
  quality, the <b>QuickCharge Pro</b> for fast charging, and the
  <b>EcoClean Vacuum</b> for cleaning. The first two performed well, but the
  <b>EcoClean Vacuum</b> did not meet expectations.
</p>
The browser renders these parts of the text as bold text. This visual emphasis will draw readers attention to the product names.

If you need to emphasize the importance of the text, you should use the strong element instead of the b element.

strong is a semantic HTML element that emphasizes text that is crucial, or urgent. This is an example where the strong element is used to label a very important warning about the potential allergic reactions that customers may have to a product:

Example Code

<p>
  <strong>Warning:</strong> This product may cause allergic reactions.
</p>
The strong element communicates that sense of urgency.

Visually both are very similar, because they are both rendered as bold by default. But their meanings are quite different. While the "bring attention to" element only draws attention to the text, without indicating the higher level of importance, the strong element does more than that. It conveys a sense of importance, or urgency. This is their main difference.

To choose between them, consider the purpose of the text and its importance within the surrounding content.

Lesson 6
What are description lists, and when should you use them?

Description lists are perfect for presenting terms and definitions in an organized and easy-to-read format, like in a glossary, or real dictionary, where you can find words with their corresponding definitions.

This is an example of a description list in HTML with two terms and their corresponding details:

Example Code

<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
In this case the terms are the acronyms HTML and CSS, and the details are their expansions. The details could also be definitions, or other information related to the terms.

You will need three HTML elements to define a description list. First, the description list element, dl, which is the container for the entire list. You can see it wraps around all the other elements of the description list in the example.

Then, one description term element, dt, for each term. In this case the description list has two terms, HTML and CSS, so it has two of these elements.

And finally, after each term you will find a description details element, dd, for the description, or details associated with that term. In this example, they are Hypertext Markup Language and Cascading Style Sheets.

In the browser, you would see each term followed by its corresponding description. By default, the descriptions are slightly more indented towards the right to distinguish them visually.

But description lists are not limited to only terms and definitions. They are much more versatile than that. Here we have a recipe with two ingredients.

Example Code

<dl>
  <dt>Flour</dt>
  <dd>2 cups</dd>
  <dt>Sugar</dt>
  <dd>1/2 cup</dd>
</dl>
The entire description list is within a description list element. The first ingredient, Flour, is within a description term element. Then, you can see how much of this ingredient you will need: 2 cups. This is within a description details element directly after its corresponding ingredients.

And the same structure is repeated for Sugar. In this case, the recipe has only two ingredients, but if there were more the same structure could be repeated throughout the description list.

In the browser, you would see the ingredients aligned to the left, and the measurements indented to separate them visually.

Other use cases for description lists include product specifications, frequently asked questions, contact information, and metadata. Essentially, when you have two related pieces of information in a key-value pair format, where one acts as a label, the key, and the other acts as additional related information, the value, you can use a description list.

Lesson 7

How do block and inline quotes work in HTML?

In HTML, quoted elements are used to distinguish quoted text from the surrounding content. This gives the quoted text a format that is easy to identify.

You should use the block quotation element for representing a section quoted from another source. It's mainly used for extended quotations. If the source of the quote has an address, you can cite it with the cite attribute. The value of this attribute should be a valid URL. This is an example of a quote within a block quotation element:

Example Code

<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  "Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?"
</blockquote>
This element has a cite attribute. The value of the cite attribute is the URL of the source. While this attribute doesn't change the presentation of the block quote, it's very helpful for giving screen readers and search engines more information about the quote. In the browser, you'll see that the text is slightly indented.

If you want to start and end the block quote with quotation marks, you may need to write them explicitly within the text. You can write the text directly within the block quotation element, like I just did, or wrap it within one or more paragraph elements. This is helpful when the text has multiple paragraphs, but you want to keep them within the same block quote. Here's an example with four paragraphs:

Example Code

<blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
  <p>Build your projects. Show them to your friends. Build projects for your friends.</p>
  <p>Build your network. Help the people you meet along the way. What goes around comes around. You'll get what's coming to you.</p>   
  <p>It is not too late. Life is long.</p>
  <p>You will look back on this moment years from now and be glad you made a move.</p>
</blockquote>
All the paragraphs are contained within the same block quotation element, so they are part of the same quotation. You can see that the element has a cite attribute with the URL of the source. In the browser, you'll see that the four paragraphs are aligned relative to each other, but they are indented relative to their container.

So far I've been using the cite attribute to attribute the source of the quotation, but the attribute doesn't really show the source to the user. It only works behind the scenes.

If you want to attribute the source visually, you can add a citation element, cite, outside of the block quotation element. This is different from the cite attribute. The citation element is an HTML element that you can use to mark up the title of a referenced creative work like a book article, song, film, website, or research paper. Here's an example:

Example Code

<div>
  <blockquote cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?
  </blockquote>
  <p>—Quincy Larson, <cite>How to Learn to Code and Get a Developer Job [Full Book].</cite></p>
</div>
The block quotation element contains quoted text. Below the element you can see a paragraph element with the name of the author, followed by a citation element. The citation element contains the title of the book where the quotation came from.

If you go to the browser, now the source will be clearly visible and see that the quote comes from a book written by Quincy Larson. The title of this book is How to Learn to Code and Get a Developer Job.

You should use block quotes like these for long quotations from other sources. But sometimes you will only need to quote a few words within a larger paragraph.

That's exactly what the inline quotation element is for. It's for short inline quotations from other sources. Most modern browsers will add quotation marks around the inline quote automatically when you use this element. This is an example:

Example Code

<p>
  As Quincy Larson said,
  <q cite="https://www.freecodecamp.org/news/learn-to-code-book/">
    Momentum is everything.
  </q>
</p>
You can see a paragraph element that contains text. Part of the text is an inline quote, because it's within the inline quotation element. You can also add a cite attribute to attribute the source.

This works exactly the same as it did with the block quotation element. There won't be any visual changes, but it will give screen readers and search engines more information about the quote.

In the browser, you'll see that the quoted text is part of the paragraph and it's surrounded by quotation marks. Most modern browsers will add these quotation marks automatically.

What's the difference between block quotes and inline quotes? You should use block quotes for extended quotations from other sources and inline quotes for short quotations from other sources that should be part of existing paragraphs.

Lesson 8

How do you display abbreviations and acronyms in HTML?

An abbreviation is a shortened form of a word. For example, "Dr" followed by a period, is an abbreviation for the word "doctor".

An acronym is a word formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase. HTML is an example of an acronym. It stands for HyperText Markup Language.

By taking the first letters of each word H, T, M, and L, you get the acronym HTML. They are both very helpful for writing more concise text, especially when they are well-known and easy to understand in a given context.

If you need to display abbreviations and acronyms in HTML, the abbreviation element is exactly what you're looking for. You should always explain their full meaning when you use them for the first time. Then you can use the abbreviation element to highlight them and provide more details.

Here's an example where you can see a paragraph with the sentence HTML is the foundation of the web:

Example Code

<p><abbr>HTML</abbr> is the foundation of the web.</p>
The acronym HTML is within an abbreviation element. In the browser, you'll see that nothing has really changed. It still looks like normal text. The abbreviation element is providing helpful context behind the scenes, but users will still see the acronym as normal text.

If you want to help users understand what this acronym means, you can show its full form with the title attribute.

The title attribute is optional, but if you decide to include it, it must be a human readable description of the abbreviation, or acronym.

Let's take the same example as before, but add the title attribute. It will be HyperText Markup Language, the expanded form of the acronym:

Example Code

<p><abbr title="HyperText Markup Language">HTML</abbr> is the foundation of the web.</p>
Usually, the style of the abbreviation element will change when you add this attribute. The specific style will depend on the browser. Some browsers may display a dotted underline, while others may convert the contents to small caps, or even assign certain default styles, such us a dotted underline. When the user hovers over the acronym with the mouse, the full form is displayed as a tooltip.

While you don't necessarily need to use the abbreviation element for every abbreviation, or acronym on your web page, it's recommended for those that might be unclear and those that might need additional context.

You should use your best judgment to find the right balance between information and presentation to avoid cluttering the text while being clear and concise.

Lesson 9

How do you display addresses in HTML?

The contact address element is used to represent contact information for a section on a web page. The address element is versatile and can be used for business pages, author pages, personal sites, and more.

When it comes to building out your website's contact sections, you should use the semantic address element over a generic element like a div.

Here is an example of using the address element for a company contact page:

Example Code

<address>
  <h2>Company Name</h2>
  <p>
    1234 Elm Street<br />
    Springfield, IL 62701<br />
    United States
  </p>
  <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
  <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
</address>
In this example, there is the company name, physical address, phone, and email information. For the physical address, the line break element, br, is used to show the division between the street name, city, and country.

For the phone number, we have an anchor element with the href value set for telephone numbers. The tel:+ value inside the href attribute creates a clickable link to initiate a phone call on certain devices that support that.

For the email address, another anchor element is used with the href value set to a mailto link. mailto links are used in HTML documents to allow users to open a new email within their preferred email client.

One of the downsides of using a mailto link is that users often perceive it as spam. Unfortunately, a lot of spammers will use this option to send emails to users. So just keep that in mind when you're using it.

Lesson 10

How do you display times and dates in HTML?

The time element is used to represent a specific moment in time.

Here is an example using the time element to represent twenty hundred hours, or eight PM in the evening.

Example Code

<p>The reservations are for <time datetime="20:00">20:00 </time></p>
The datetime attribute is used to translate dates and times into a machine-readable format.

This is important, because it helps with search engine results and helps the browser process date and time information more effectively.

The value for the datetime attribute must be either a valid year, valid month, valid time, local date, global date, or valid duration string.

Here is another example of using the time element to represent a particular date:

Example Code

<p>
  The graduation will be on <time datetime="2024-06-15T15:00">June 15</time>
</p>
The value for the datetime attribute is in the ISO 8601 format. ISO 8601 is an international standard to represent dates and times.

The first part of that value is the year, month and day. The capital T in the value is a separator between the date and time.

The fifteen hundred hours would be three PM in the afternoon.

Whenever you need to represent events, publication dates, or appointments, it is best to use the time element.

Lesson 11
How do you display mathematical equations and chemical formulas in HTML?

The superscript element is used to display a piece of text as a superscript. A superscript is a symbol or letter printed above the normal line of text.

Here is an example using the superscript element to illustrate exponents:

Example Code

<p>2<sup>2</sup> (2 squared) is 4.</p>
In this example, the number 2 is wrapped in sup tags to represent the superscript inside the paragraph. In the browser, you would see that the second number 2 is smaller and slightly higher than the first number 2.

Common use cases for the superscript element would include exponents, superior lettering, and ordinal numbers. Here is an example using the superscript element for superior lettering:

Example Code

<p>
  Monseigneur is often written as <strong>M<sup>gr</sup></strong>.
</p>
Superior lettering refers to letters written in superscript, usually to indicate abbreviations. The letters g and r are wrapped inside superscript tags to illustrate the abbreviation in this example.

It is important to note that the superscript element should only be used for typographical reasons. If you want style a piece of text with a raised baseline, then you should use CSS instead of the superscript element.

To represent chemical equations inside HTML, you would use the subscript element. This element uses a subscript which displays a lowered baseline using smaller text.

Here is an example of using the subscript element to show the chemical representation for carbon dioxide.

Example Code

<p>CO<sub>2</sub></p>
The number two is wrapped inside sub tags to illustrate that the character should be a subscript.

Common uses cases for the subscript element include chemical formulas, foot notes, and variable subscripts.

Lesson 12
How do you represent computer code in HTML?

The inline code element is used to represent short snippets of code inside text. Common use cases for the code element would be for technical articles and documentation pages.

Here is an example of using the code element to show a CSS code snippet:

Example Code

<p>
  To set the text color to blue in CSS, use the following code:
  <code>color: blue;</code>
</p>
In this example, the CSS color property is used to set the text color to blue. By wrapping this code snippet inside <code> tags, it communicates to the browser that the text is a piece of inline code.

The browser will apply default styles for content inside of the code element. The default styling is a monospaced font.

The code element is meant to represent a single line of code. If you want to represent multiple lines of code, you will need to place a code element inside a preformatted text element.

The preformatted text element is used to represent preformatted text. Here is an example of using the preformatted text element to show a CSS declaration:

Example Code

<pre>
  <code>
    body {
      color: red;
    }
  </code>
</pre>

When using the pre element, you will need to be mindful of spacing because it will display exactly as written inside the HTML document.

In the browser, you will see that the code is indented several spaces to the right. If you were to change the indentation in the code example, then you will see a difference in indentation on the screen.

When it comes to including code examples inside your HTML document, you should use the code element for short inline examples.

If you need to display longer code snippets, then you will need to use the pre and code elements.

Lesson 13
What are the u, s, and ruby elements used for, and how do they work?

The unarticulated annotation element, or u element for short, is used to represent inline text that has non-textual annotation applied.

Here is an example of using the u element to highlight various spelling errors:

Example Code

<p>
  You can use the unarticulated annotation element to highlight
  <u>inccccort</u> <u>spling</u> <u>issses</u>.
</p>
In the example, the words incorrect, spelling, and issues are misspelled. The default styling for the u element is a black underline underneath the text.

In HTML4, the u element was used for styling purposes. But in HTML5, the u element should only be used to indicate that text has non-textual annotation applied.

If you want to style a piece of text with a underline, then you should use CSS instead of HTML.

The strikethrough element, or s element for short, should be used to represent when text is no longer accurate or relevant. Here is an example of using the s element to show the cancellation of an activity:

Example Code

<p><s>Tomorrow's hike will be meeting at noon.</s></p>

<p>Due to unforeseen weather conditions, the hike has been cancelled.</p>
In this example, the first sentence is crossed out because the hike was cancelled due to weather reasons.

The s element should never be used to just to show changes to a document. More appropriate elements in that case would be the deleted text element and the inserted text element.

The ruby element represents small text shown above or below the main text. It is typically used to show the pronunciation of East Asian characters. Here is the ruby element example from the MDN web docs page:

Example Code
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
The rp element, or ruby fallback parenthesis element, is used as a fallback for browsers lacking support for displaying ruby annotations.

The rt element, or ruby text element, is used to indicate text for the ruby annotation. This text is usually used for pronunciation, or translation details in East Asian typography.

While the ruby element can be used for other types of annotations, the most common use case is for East Asian typography.
