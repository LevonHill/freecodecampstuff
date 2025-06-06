<!-- @format -->

What are the accessibility benefits for good link text, and what are examples of good link text?

Let's take a look at the benefits of writing good link texts in the context of accessibility, and some examples of good link texts.

The first visible benefit of a good link text is that it makes it easier for everyone to find information quickly. Descriptive links help users know where they're headed and what they'll access. This ensures the user doesn't feel lost and improves the overall user experience.

For those using screen readers, a clear and descriptive link text is a must. Screen readers read the link text aloud, so a text like "Read our accessibility guide" is way better than "Click here."

Making link text clear and descriptive isn't just beneficial for those living with visual impairments. Descriptive links also help people with cognitive disabilities by providing clear context.

Here are some best practices to keep in mind while writing link texts:

Make sure links are visually distinct by using underlining and other visual cues, so users can easily identify and navigate them.
Avoid generic link texts like "here", "click here", and "more-info" as they don't provide any useful information.
Aim for concise and descriptive link texts, ideally between 2-5 words, that convey the link's purpose.
Avoid jargon and abbreviations that users may not understand.
Focus on the destination, not the action. For example, "user behavior results", instead of "click here to read more".
Don’t repeat the same link text for different destinations.
Place links in a way that they make sense within the surrounding text. For example, "for more details, visit our events page" instead of "Click here for more".
Here are some examples of good link texts for specific use cases, compared to less helpful ones. Let's say you want to link to a page providing details about an event like this:

<a href="webinar-details-link">Details</a>
Details is vague and doesn’t provide specific information about what the user will find if they click the link. Without additional context, users might not know if the link leads to details about a webinar, a product, a policy, or something else.

Now, here is an example of good link text:

<a href="webinar-details-link">
  Get details about our upcoming webinar
</a>
This link text gives users context about the content they will find, making it easier to decide whether they want to click on it. It reduces ambiguity by specifying that the link is related to a webinar.

Here is an another example linking to a post in a blog:

<a href="/blog-post-link">Read more</a>
The link text Read more is not ideal in terms of accessibility because it lacks context.

Here is a better link text example:

<a href="/blog-post-link">
   Read our latest blog post on web accessibility
</a>
This updated link text provides users with a clearer idea of what to expect and why they might want to click the link, which is particularly important for those using screen readers.

Let's take a look at one more example. Let's say you want to provide more information about a certain topic:

<a href="/link-to-topic">More info</a>
More info is also vague and can be problematic for accessibility. It doesn't provide specific details about the link's destination, which can be confusing for users relying on screen readers or those who might be navigating the site in a non-linear way.

Here is a better example for link text:

<a href="/link-to-topic">
   Learn more about our accessibility efforts
</a>
This updated link text is better because it clearly describes what the user will find if they click the link. Users can immediately understand that the link leads to information about your accessibility efforts.
