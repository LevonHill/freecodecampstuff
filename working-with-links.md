//In these lecture videos, ou wil learn about links, the target atribute, different link states, ansolute, and relative paths, and more.


// What are the different target Attribute Types, and how do they work?

The important attribute tells the browser where to open the URL for that anchor element. There are four important possible values for this attribute , '_self' ,'__blank' , '_parent' ,' _top'
1st. _self - is the default value this opens a link in the current browsing context, in most cases this will be the current tab or window.
2nd. _blank - This opens the link in a new browsing context, typically will open in a new tab.
3rd. _Parent - This opens a link in the parent of the current context,for exampple if your website has an iframe a parent target in that iframe would open inside your websites tab or window not in the embeded frame
4th. _top -  which opens a link in the top most browsing context, parent of the parent , link will alwasy open in the full window.


//What is the difference between absolute and relative paths? Path is a string that specifies the location of a file or directory in a file system. In web development paths are devs link to resources like images, stylesheets, scripts and other pages, there are abs or relative and both are essential when specifiying file locations within a file system.

Asbsolute path - is a complete link to a resource it starts from the root directory and includes every other directory and finally the file name and extension, the root directory refers to the top -level directory of folder in a hierarchy . abs includes the following protocols, " http://" , "https://" , "file://" and more however, what if the the resource you want to link to using the absolute path is on your local machine.....

Relative path - specifies the location of a file relative to the directory of the current file it does not include the protocol or the domain name making it shorter and more flexible for internal links within the same website. So lets imaging we have a html page with a link on the page in the same working directory , this allows us to simply get the file name .

//Which one should you use and when ? Use absolute paths when linking to a resource hosted on an external website and use absolut paths when you need the link to a page or a resource to work consistently regardless of the document location withtin the site.  FOR RELATIVE PATHS USE IT hwne linking to  resources within the same website. also use if you want to keep your code cleaner and easier to maintain during development. And during loal testing to ensure links work without an internet connection.