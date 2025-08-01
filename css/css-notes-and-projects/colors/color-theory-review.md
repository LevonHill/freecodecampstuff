<!-- @format -->

Color Theory
Color Theory Definition: This is the study of how colors interact with each other and how they affect our perception. It covers color relationships, color harmony, and the psychological impact of color.
Primary Colors: These colors which are yellow, blue, and red, are the fundamental hues from which all other colors are derived.
Secondary Colors: These colors result from mixing equal amounts of two primary colors. Green, orange, and purple are examples of secondary colors.
Tertiary Colors: These colors result from combining a primary color with a neighboring secondary color. Yellow-Green, Blue-Green, and Blue-Violet are examples of tertiary colors.
Warm Colors: These colors which include reds, oranges, and yellows, evoke feelings of comfort, warmth, and coziness.
Cool Colors: These colors which include blues, green, and purples, evoke feelings of calmness, serenity, and professionalism.
Color Wheel: The color wheel is a circular diagram that shows how colors relate to each other. It's an essential tool for designers because it helps them to select color combinations.
Analogous Color Schemes: These color schemes create cohesive and soothing experiences. They have analogous colors, which are adjacent to each other in the color wheel.
Complementary Color Schemes: These color schemes create high contrast and visual impact. Their colors are located on the opposite ends of the color wheel, relative to each other.
Triadic Color Scheme: This color scheme has vibrant colors. They are made from colors that are approximately equidistant from each other. If they are connected, they form an equilateral triangle on the color wheel.
Monochromatic Color Scheme: For this color scheme, all the colors are derived from the same base color by adjusting its lightness, darkness, and saturation. This evokes a feeling of unity and harmony while still creating contrast.

Different Ways to Work with Colors in CSS
Named Colors: These colors are predefined color names recognized by browsers. Examples include blue, darkred, lightgreen.
rgb() Function: RGB stands for Red, Green, and Blue — the primary colors of light. These three colors are combined in different intensities to create a wide range of colors. the rgb() function allows you to define colors using the RGB color model.
p {
color: rgb(255, 0, 0);
}
rgba() Function: This function adds a fourth value, alpha, that controls the transparency of the color. If not provided, the alpha value defaults to 1.
div {
background-color: rgba(0, 0, 255, 0.5);
}
hsl() Function: HSL stands for Hue, Saturation, and Lightness — three key components that define a color.
p {
color: hsl(120, 100%, 50%);
}
hsla() Function: This function adds a fourth value, alpha, that controls the opacity of the color.
div {
background-color: hsla(0, 100%, 50%, 0.5);
}
Hexadecimal: A hex code (short for hexadecimal code) is a six-character string used to represent colors in the RGB color model. The "hex" refers to the base-16 numbering system, which uses digits 0 to 9 and letters A to F.
h1 {
color: #FF5733; /_ A reddish-orange color _/
}

p {
background-color: #4CAF50; /_ A shade of green _/
}
Linear and Radial Gradients
Linear Gradients: These gradients create a gradual blend between colors along a straight line. You can control the direction of this line using keywords like to top, to right, to bottom right, or angles like 45deg. You can use any valid CSS color and as many color stops as you would like.
.linear-gradient {
background: linear-gradient(45deg, red, #33FF11, rgba(100, 100, 255, 0.5));
height: 40vh;
}
Radial Gradients: These gradients create circular or elliptical gradients that radiate from a central point.
.radial-gradient {
background: radial-gradient(circle, red, blue);
height: 40vh;
}
