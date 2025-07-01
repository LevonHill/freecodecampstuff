<!-- @format -->

Lesson1

What is CSS Grid, and how does it differ from Flexbox?

CSS Grid is a powerful layout system that allows web developers to create complex and responsive web page layouts with ease.

Imagine you're arranging furniture in a room – CSS Grid is like having an invisible grid on your floor that helps you position everything precisely where you want it.

When we build websites, we often need to arrange different elements on the page.

Before CSS Grid, this was sometimes tricky, especially for complex layouts. CSS Grid simplifies this process by dividing your web page into rows and columns, creating a grid-like structure.

Let's imagine you were working with a container div with several items nested inside like this:

Example Code

<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
If you wanted to style those elements in a grid format, you can set the display to grid and apply columns like this:

Example Code
.container {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 20px;
}

.item {
background-color: lightgray;
padding: 20px;
text-align: center;
border: 1px solid #ccc;
}
In this code, we're telling the browser to create a grid with three equal-width columns, that's what the 1fr 1fr 1fr means, and we're adding a 20-pixel gap between each grid item.

Now, you might be wondering: "What about Flexbox? Isn't that also used for layouts?"

You're right! Flexbox is another CSS layout model, and it's quite useful too. But there are some key differences.

Flexbox is one-dimensional, while Grid is two-dimensional. This means Flexbox works great for laying things out in a single row or column, while Grid excels at creating layouts with both rows and columns.

Flexbox is content-first, meaning it adjusts the layout based on the content. Grid, on the other hand, is layout-first, allowing you to create the layout and then place items into it. Grid gives you more precise control over placement. You can tell an item exactly which row and column to occupy.

Here's a Flexbox example for comparison:

Example Code
.container {
display: flex;
justify-content: space-between;
}
This creates a flex container where the items are spaced evenly along the main axis.

Both Grid and Flexbox have their strengths, and often, the best layouts use a combination of both. You might use Grid for the overall page layout, and then use Flexbox for aligning items within each grid area.

In summary, CSS Grid is a powerful tool that allows for precise, two-dimensional layouts. While it might seem complex at first, with practice, it becomes an invaluable tool for creating responsive and complex web layouts.

Lesson 2

How can you create flexible grids with the fr unit?

In the previous lecture video, you were introduced to CSS grid which can be used to create complex and fluid layouts in your web pages. In this video, we will explore how to create flexible grid layouts using the fr unit.

Let's start with this HTML markup which is going to represent our grid container:

Example Code

<div class="grid-container">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
Inside the CSS, we set the display property to grid for the container.

Example Code
html,
body {
width: 100%;
height: 100%;
}

.grid-container {
display: grid;
grid-template-columns: 25% 25% 25% 25%;
gap: 15px;
background-color: darkgray;
height: 100%;
}

.col {
background-color: darkslateblue;
}
grid-template-columns is used to set the size for each column. In this case, each column size will be 25% of the container. Then the gap property is used to create space around each column.

So far we have been using percentages for the column size but we can also use the fr unit.

The fr unit is a fractional unit which represents a fraction of the space for the grid container.

Here is what the code will look like when it is refactored to use fr units instead of percentages.

Example Code
html,
body {
width: 100%;
height: 100%;
}

.grid-container {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 15px;
background-color: darkgray;
height: 100%;
}

.col {
background-color: darkslateblue;
}
Each column will take up one fraction of the available space. Since there are four columns, each column will have an equal share of the space available in the grid container.

As you start to build your grid layouts, you will find yourself wanting to use fr units more often because they provide a flexible, proportional way to distribute space, allowing you to create responsive layouts that adapt to varying screen sizes without needing to manually adjust pixel values.
