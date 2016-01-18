#best-i

## Installation
Clone the Git repository, then be sure to run `npm install` to make sure all packages have been installed. Then, run `gulp build` to initiate the build task, and view the site in your browser.

## Setup

At the beginning of this project, I decided on what tools and helpers would be be best used for the task. The architecture of the project may seem a bit more complex than desired, however this helped with organising the code and making it easy to find and change.

One thing I considered early on was using Gulp for task management while developing the code. This project includes tasks for styling, scripting, image optimisation, and building the static files. I thought I’d organise the compressed, production ready files, in a separate ‘build’ directory.

I decided to code the stylesheet in Sass, while using PostCSS to provide prefixes, polyfilling and minification. Since this is a static project, I also used UnCSS to strip away any unused selectors in the stylesheet. The stylesheet architecture was to help separate parts of the Sass code, such as configurations, mixing, functions, layouts and more.

Noticing there was a carousel in the project, I decided to use Owl Carousel 2 as well as jQuery for Javascript use, while relying of browserify to include all scripts in one file and minifying it using Uglify.

## Development

I laid out the page using valid HTML, with a very simple `head` for making it responsive, and linking the stylesheet. In the body, the entire page was wrapped in a `page` class, to keep it organised. The page was separated with a section acting as a masthead, with logo, navigation and intro copy, while the main content area features a very simple grid to suit the design, while another part of the main content uses Owl Carousel 2 for a simple 3 Column carousel.

I was mostly focused in making sure I got the design styled as desired, continuously referring back to the design document, overlaying the page and making sure most, if not all, elements of the design were correct. I wasn't too focused on making too much addition to the design, as I thought I'd use my experience to just keep as close to the original design as possible.

I also added hovers and transitions to the grid, and interactive elements. It's best to have some form of interaction so the user knows that element can be interacted with.

## Issues

This project has had some small issues, but I'm hoping these aren't too detrimental to the design in the time given. In one clear example, when the carousel moves to the next item, it has blurry text, which is possibly something to do with the animation of the carousel. Another glaring issue is in Safari, that the Expandable button SVG on hover turns black, and not white, which is a surprising bug.

Keeping it close to the design was very, very challenging. I considered it my top priority to make sure it matched the design, as closely as possible. I'm unsure if I managed to meet that expectation, but I made sure it was a close match.

## Improvements

One thing I would suggest is the addition of animations after the page is loaded; letting the intro text slide in on the left, and the top of the header and main content areas slide in, subtly, and vertically. I think it would add a gentle touch to the good design that it is already. Another suggestion would be to make a fading in animation of the introduction copy.

An improvement that could be useful is checking colour contrasts in the browser. It's possible the mixture of greys could lead to a clash in contrast, possibly making it harder for some users to see. Checking for contrast in various colour spectrums to make sure colourblind users can still use the design can be beneficial.

An addition, from a user point of view, would be to add arrows to the articles carousel. This makes it easier for the user to move the carousel along, gives them more accessibility in terms of going through the carousel, than watching it move along every few seconds.
