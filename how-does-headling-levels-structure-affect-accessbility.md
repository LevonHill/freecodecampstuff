

How does proper heading level structure affect accessibility?

In an earlier lecture video, you learned about proper heading level structure. In this video, you will learn how a good heading structure affects accessibility.

Proper use of headings creates a visual hierarchy for users to navigate and understand your web page. Using a logical heading hierarchy allows screen reader users to understand the structure of your content and navigate your content quickly. Creating appropriate heading text that accurately describes the content that follows helps everyone find the information they need on your site. As an additional benefit, well-formed headings may also improve the SEO of your site.

Think of headings as the foundation of your site. Without a good foundation, the accessibility of your content will suffer.

Let's look at how you can make your web projects friendly for people who use assistive technologies by using headings correctly.

Headings, ranging from h1 to h6, create a navigational structure for screen reader users. Screen readers can list all headings on a page, allowing users to jump directly to the sections they need. So, correctly arranging headings is important for helping these users avoid unnecessary content and finding the information they are looking for quickly.

People with partial sight or cognitive disabilities need to process information quickly and easily to reduce cognitive load.

While proper arrangement of headings is important, it is also necessary to make heading texts clear and descriptive.

Here are some key practices to follow to use headings properly:

Use headings in a hierarchy that reflects clear organization. For example, the page title should be an h1, major sections should be introduced with h2 headings, subsections with h3 , and so on, down to h6.
Don't skip from h1 to h3, or from h2 to h4, and so on.
Use clear and descriptive text that summarizes the content that follows each heading.
Don't use a heading in isolation – some content must follow the heading.
Use appropriate headings where necessary instead of formatting text to look like headings.
Each page should have a single h1 element representing the main topic or title.
Here's a basic markup that represents how you should use headings on a page:

<!-- Page title -->
<h1>What is HTML</h1>

<!-- First section -->
<section>
  <h2>Introduction to HTML</h2>
  <p>
    HTML stands for HyperText Markup Language. It is the standard language for
    creating web pages.
  </p>
</section>
<!-- Second section -->
<section>
  <h2>History of HTML</h2>
  <p>HTML began to take shape in the early 90s</p>
  <h3>Origins</h3>
  <p>
    HTML was created by Tim Berners-Lee in 1991. It has evolved significantly
    over the years.
  </p>
</section>