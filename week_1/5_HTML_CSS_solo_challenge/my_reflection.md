## 5. [HTML/CSS Solo Challenge](5_HTML_CSS_solo_challenge/readme.md) Reflection

* What questions did you ask during this challnge? What resources did you find to help you answer them?  
* What concepts are you having trouble with, or did you just figure something out? If so, what?  
* Did you learn any new skills or tricks?
* How confident are you with each of the Learning Competencies for this challenge? 
* Which parts of the challenge did you enjoy?
* Which parts of the challenge did you find tedious?

I had a lot of questions regarding positioning and the box model. My most helpful resource was opening the local file in the browser and fiddling around with values, saving, refreshing the page and seeing what I had changed. That was a huge help for me in seeing the difference between margin and padding, which took some time to internalize. I also used Stack Overflow to try and unpack some positioning problems I ran into. One lightbulb moment I had was seeing the difference between text in my #footer (it sat behind #sidebar and #content) and text in #footer > p (it sat in front). 

My question re: positioning was "why the hell can't I get my footer to clear:both?" This question is also the concept I'm having trouble with. I just couldn't figure it out, and I had to rig the margin-bottoms on my sidebar and content divs to get my footer to stop showing up on top of them. Every resource I searched instructed me to enter the property:value pair I already had tried. I'm wondering whether setting an exact pixel height had something to do with it, but I honestly have no idea where the problem was. I even went back and checked the positioning lesson in Code Academy and couldn't tell where I deviated from the steps. (I know I didn't float my divs left *and* right, because I wanted my content centered, but the footer still should clear the left div when I tell it to; I tried float:left and float:both to no avail.

One thing that I figured out was how to center a picture by doing some basic subtraction and division from the enclosing div. So if the #sidebar is 200px with 10px of padding, an enclosed image 160px wide would need a 10px margin to center up. (160 plus 10px margin on each side equals 180, which is the div's workable space after padding. Am I getting that right?)

One skill I learned was mapping out the documents before adding content. I started with an html template snippet, then added my divs and named div ids, then blocked out the tags for the stuff I planned to place inside the divs. In CSS, I started out with "selector { }" for each selector I planned to edit. This helped me stay organized and avoid going off on tangents, and it kept me from losing track of my work in progress.

I am confident in my ability to work with style formatting, borders, pseudo code, and inline vs block displays. I am not confident with positioning yet. I feel like I should scrap my template for this project and start from scratch on future work so I can really lock down my footer problem and get more comfortable with conceptualizing what a margin/padding/fixed/absolute change will look like before I put it on the screen. 

And I used a lot of % widths in this assignment, but I'm not sure how to center things within those. In fact, I have a tenuous grasp on centering in general. I'm struggling with using margin:auto to center things in any context other than the full page. I manually shifted my quote image to the middle of #content but I wish I knew how to call a property:value on it and let it center automatically even if I decide to grow or shrink the #content width. 

With my confident skills, I can anticipate what the code will do before I check the browser. With my unconfident skills, I feel like I'm hacking around in the dark.

Even with all my struggles, I enjoyed the challenge overall. I loved seeing my work show up on the screen, and I spent extra time picking colors and rounding edges because I was proud of my new skills and I wanted to show them off. My favorite part was playing around with padding and margins until I got things to look how I saw them in my head. 

The most tedious part, by far, was banging my head against the wall over that #footer's clear:both and not getting anywhere. The second most tedious was working with the position:absolute caption and getting it to line up just right by adjusting a few pixels at a time. Third most tedious was figuring out how to center (or approximate centering) my header and images. I plan to use Inspector to examine some pages with styles I'd like to emulate, and see what they're doing that I'm not.