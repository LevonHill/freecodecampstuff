<!-- @format -->

In these lecture videos, you will learn how to work with media assests like the audio and video elements,

//What are replaced elements and what are some examples? A replaced element is an element whose content is determinded by an external resource rather than by css itself, css is used to add styles to the webpagem a few examples of replaced elements include the image , iframe and video elements, with replaced elements you can control the position or layout of an element but your css cant direclty modify the content of that element...

//what are common ways to optimize media assets? There are three tools to consider when using media such as images on your pages, opimizing media , size, format, compression.
sizes- whne you are building a website you'll often style images ti display in a specific size for exmaple you may have an image display at a 640x480 res, 640 represents the width , while 480 is the height in pixels, now if you serve an image that is 1920x1080, but are styling it to be much smaller you're requiring yous users to download un needed data , a smaller res is a smaller file size, the best format is webp , or aiv, you could also run compression algorithnms on your images, its basically used to reduce size for files and data., Dont try it with jpeg its a lossless format meaning whne you compress some data is lost and quality goes down...

// what are the different types of image licenses and how do they work? Images are considered 'intellectual property'- protected by copyright regulations.... ,MOST OFTEN belonging to the creator,by default images are released as all rights reserved the creator or publisher sometimes holds all rights, so you can use it in your webpage unless ,you normally have to do 1 if the 3, obtain written permission purchase a license from creator, or Incorporate the mage in a way it falls under 'FAIR USE'

//WHAT ARE svgs and when should you use them?
PNG AND JPG are considered raster formats , this means its pixel based with the data trakcing the color value in each value, the down sides to these images are that they dont upsccale well, if you make it bigger than its limit , it degrades quality. Now svg is a different kind of images, its 'scalable a vector graphic' it tracks data based on paths and equations to plot points lines and curves, what this means is that it can be scaleed to any size without impacting the quality , svgs specifically have the added benefit of storing data in XML , this means you can use them directly in your code as raw html, with the svg element, it means you could change the color of the image 'icons' is a common use case. font asweome a good place and scale perfectly..!!

//what are the roles of the html audio and video elements, and how do they work?
The audio and video elements allow you to add sound and vid content to your html document. The audio element suppoprts popular audio formats like , mp3, wav, ogg, the vid formats support, mp4 , ogg, webm. To include audio in your page, use '<audio src=' ' controls > src will point to audio file, the controls atribute enables users to manage audio playback , like adjusting volume and pausing or resuming playback , the controls attribute is a boolean attribute that can be added to an element to enable built-in. Playback controls , if emitted no controls will be shown .

//How do you embed video onto your page using the iframe element?First what exactly is the iframe element? Well iframe stands for 'inline frame' - its is an inline element used to embed other HTML content directly withitn an HTML page.
