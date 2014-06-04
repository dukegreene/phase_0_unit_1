#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS - Supported in Elements tab on left, and Styles tab to the right (within the elements tab). The currently selected page element is inspected (right click and select ' inspect element' to zero in on a new element, or use the magnifying glass tool). HTML and style elements can be edited individually by double-clicking and changing text, and new content can be added by choosing 'edit as HTML' after right clicking the HTML or clicking the '+' symbol in the top right corner of the Styles tab.
  * Javascript Debugging - Under the Console tab. Console accepts Javascript commands. This can be used to create custom methods, print messages to console, or list elements in their entirety.
  * Performance Optimization - Use Network tab to view page elements and see the order they loaded. You can see which elements depend on others and which take longest to load using this view. To see more specific info and make changes, download the PageSpeed tool from Chrome web store and click PageSpeed tab to run. After analyzing page load, PageSpeed gives a prioritized list of changes that would reduce page load time, and users can click the suggested changes for a brief explanation and links to learn more. (On the page for this quiz, the top suggestion is to minimize request size so an HTTP request can fit into a single packet...whatever that means.)

* What's the quick key for your OS to spawn the Dev Tools inspector?
  Command-Option-I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) - #0b0f11
  * Tweak the background color to white. [X]
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px. [X]
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead. [X]
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/

  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.) Image link: http://imgur.com/nynJd1o

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain. -
It's not text! It's an image file, hosted at http://postmachina.com/images/home_bg.gif. I could change the opacity of the image as a whole, but not the colors of a specific part of the image.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? The Times Square photo in the Featured Events slideshow.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is. - I used the Network tab, cleared out the cache with the icon in the top left, hit refresh, and then sorted all results by size, descending order. The biggest image was 316KB and is linked here: http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated? - Image optimization is the low hanging fruit. By losslessly compressing the images, ticketswizard.com could knock 885.9KiB off the load.

