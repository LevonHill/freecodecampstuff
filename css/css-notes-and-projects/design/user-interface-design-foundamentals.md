<!-- @format -->

In these lecture videos, you will learn about the fundamentals of user interface (UI) design. You will learn about the terms you need to know to communicate with designers, visual hierarchy, scaling, alignment, whitespace, and much more.

lesson 1
What are common design terms to help you communicate with designers?

As a developer, you may need to work closely with designers. If you understand basic design terminology, you'll have a shared vocabulary and you'll be able to participate in the design process more actively. This can make your workflow more efficient and result in a better user experience.(UX)

So let's dive in. We'll start with the term layout. Layout is how the visual elements are arranged on a page or screen to communicate a message. These elements may include text, images, and white space. The layout is like the blueprint of a design. Designers must consider the placement, size, and hierarchy of each element.

The term that is closely related to layout is alignment. Alignment is how the elements are placed in relation to one another. Using alignment correctly is helpful for making the design look clean and organized. Designers create visual order by aligning elements along imaginary lines, edges, or a central point.

Great. Now let's talk about composition. Composition is the art of arranging elements to create a harmonious design. It determines how elements like images, text, and shapes relate to each other and contribute to the design in an artistic way. While layout mostly focuses on the placement of the elements, composition also considers the artistic impact that this placement will have in the overall design.

Composition is closely related to concepts of balance. Balance is how the visual weight is distributed within a composition. Designers aim to create an equilibrium through symmetrical or asymmetrical arrangements. A balanced design feels harmonious.

Hierarchy is another important concept that you should know. Hierarchy establishes the order of importance of the elements in a design. It's about making sure the most important information is noticed first. You can implement a visual hierarchy with size, color, contrast, alignment, white space, and even typography.

To create clear distinctions between the elements, you can use contrast. Contrast is helpful for guiding user attention to what you want to emphasize. You can do this through variations in color, size, shape, texture, or any other visual characteristic. Strong contrast is also helpful for improving readability.

Another helpful term is white space. White Space, also known as "negative space", is the empty space in a design. It's the area surrounding the elements. You might be surprised to know that white space is not necessarily white. Actually, it can be space in any color or texture. Its purpose is to improve the readability and enhance the visual hierarchy of a design.

These are general design concepts that you will find very often, but you may also find design terms that are more closely related to software development.

The user interface, also known as UI, is how humans interact with computers. A user interface includes the visual and interactive elements that users can see on their screens, like icons, images, text, menus, links, and buttons.

The user experience, also known as UX, is about how users feel when using a product or service. An application with a well-designed user experience is intuitive, easy to use, efficient, accessible, and enjoyable. The user interface plays a key role in making the user experience as easy and enjoyable as possible, so they are very closely related.

These are some of the common terms that you should know to communicate with designers. With this knowledge, now you can take a more active role in the design process.

Lesson 2

How do you create good background and foreground contrast in your designs?

First, you may need to familiarize yourself with contrast. Contrast is the difference between two colors - or how easy it is to tell them apart.

Colors with a higher contrast will be more visually distinct, whereas colors with a lower contrast will be more visually similar. For example, black and white have a very high contrast ratio. Whereas light blue and light purple have less of a contrast.

Of course, in these examples the distinction might be made clearer because of the layout. But what about applying these colors to text? You can have the high contrast black text on a white background. And the low contrast purple text on a blue background.

But how do you determine what is a "good enough" contrast? You can't base it solely on how the text looks to you, as every user will have a different experience. Thankfully, the Web Content Accessibility Guidelines, or WCAG, provide a standard for this.

Text with a contrast ratio of 4.5:1 is considered the AA standard, which is the bare minimum you should follow to be accessible to most users. Text with a contrast ratio of 7:1 is considered the AAA standard, and ensures the best level of accessibility.

There are a number of websites that can check the contrast ratio between two colors, but most browsers will allow you to do this directly in the developer tools on your website.

Let's open the developer tools and inspect the text elements of the example site.

The black text on a white background has a contrast ratio of 21:1, which more than meets the AAA standard. The purple text on a blue background, however, has a contrast ratio of 1.48:1, which does not even meet the AA standard.

How can you fix this? Well, there are three aspects that impact the contrast ratio.

The first is the hue, which represents the general color type, like red, blue, orange. Let's shift to a hue that is further away from blue. In this case, let's use red.

Unfortunately, this change onlbrought the contrast ratio to 1.49:1, which means you need to change the saturation, or the "amount" of color present. Let's increase the amount of red in thy e text. That brings us much closer to the goal, with a 3.54:1 contrast ratio.

However, you can potentially get even closer by changing the last value, which is lightness. Lightness represents how much white is present in the color.

Let's decrease the lightness of the red. Now there is a much darker red against the light blue background, which brings the contrast ratio to 10.34:1.

You could continue to adjust the colors to find the balance between the visual effect you want and an accessible contrast ratio. But it is important to remember that accessibility should always take precedence.
