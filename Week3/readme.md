# A Web Page for word guess game

## A. Constructing a wireframe
I created a simple wireframe for the web page because the web page only needed a few elements for its overall structure. I designed two separate wireframes for the web page to make sure it is responsive and looks elegant on mobile devices. I changed my mind a couple of times before deciding on one frame that omits unnecessary block elements or headings or navigation bars as the web page is supposed to be a simple word guessing game that doesn’t require much navigation. Therefore, I decided to go with the structure that looks minimal but elegant.
![wireframe](https://github.com/dt1930/connections_labs2022/Week3/wireframe.png?raw=true)

## B. Coding the structure of the webpage/ writing html
My html was not heavy because the structure of the webpage had only a couple of elements. I used the wireframe to write html. I have tried to stick to the BEM convention for naming classes. The tags that have been used are div, h1, input, p, and section. The emoji that appears on the center is not an image, but it is text content loaded from a json file. Although the structure of the page looks effortless, I wanted users to just come to the site and without much hassle of navigation with clicking buttons or menus just go into the game by guessing words. My audience is any one who is familiar with the use of emojis in social media and wants to enjoy a word guessing game by thinking and reflecting on how a certain emoji is related to that word. It is meant for entertainment among friends, so it made sense to keep it user friendly, plain and simple.

## C. Working on the appearance of the webpage/ writing css
Writing CSS for the web page included providing the background, making the page responsive, resizing the elements, and formatting the headings. I used a light background to evoke a feeling of comfort in the users. The elements in the desktop version are arranged using flexbox with the flex direction row that changes to column when viewed in mobile devices. I have used the google font Caveat to maintain a personal tone. I felt this font suited the overall sense meant to be conveyed by the web page i.e. slightly informal, more connecting (it looks more like our handwriting than the perfect computer-produced text). I was deciding whether to give a background to the emoji or not. I ended up giving a background color that suits the background of the body and complements it. 

## D. Working on the functionality of the web page/ writing .js
I always wondered how my friends built dictionaries and other websites: where did they get so much data from? It was enlightening to know that the use of APIs makes that possible. I have used  a json file (https://raw.githubusercontent.com/amurani/unicode-emoji-list/master/full-emoji-list.json) to display the emojis on the web page. This json file contains emojis along with the keywords associated with them. The game basically works this way: an emoji is fetched from the json file, and the user has to guess the word associated with it. If the word matches any first four keywords associated with that emoji, a message “correct” is displayed. There is a time delay of 500 ms caused by the function ‘wait’ that I coded with some help from online resources. The function changeEmoji is called once the user gets the answer correct. There are a couple of issues that I was trying to solve but couldn’t succeed: the correct message is displayed for one emoji and remains there even after another emoji appears. I tried to remove it, but the whole message wasn’t didn’t show up for some reason (maybe it was quick). I am new to js, so I am still learning how to delay and sleep code for a while. 

## E. Debugging, revisions of code
I am not a creative person, so I struggled with the idea for the project. First, I decided to build a dictionary by using a dictionary api. I had almost completed the structure and css for the page, but I was not satisfied with the idea as I felt the project would be too boring. Since the course is about connections, I thought a dictionary, although interactive, isn’t connecting many people. Meanwhile, I thought of a word guessing game that was fun and more appealing to the users. I still don’t know if this aligns well with the definition of connections, but I am willing to make it more animated and interactive. For this particular code, I had to do a bit of work coding the javascript file, so it was a lot of debugging. Working in the console was helpful to see what went wrong at which step.

## F. Self-evaluation of the final result
I have self-evaluated my final product, the webpage by talking about some of the strengths and weaknesses from my perspective.
 ### 1. Strengths
      a. It is simple, easy to understand and use.
      b. It can be addictive if one is fond of emojis, so it’s appealing to users.
      c. It is accessible in terms of color combinations and usability.
      
  ### 2. Weaknesses
      a. The webpage isn’t complete because certain features like displaying the correct and incorrect message still needs work. 
      b. The webpage doesn’t function ahead if the user is unable to guess the word. I am still thinking about what I should do in case the user is out of guesses and wants to pass. 
      c. I am not sure if this is a weakness, but the web page has a limited user interface (only few elements and no navigation tools). I will continue working on that.

## G. Takeaways from the process
#### 1. I have learned DOM manipulation and working with the console for debugging.
#### 2. I have learned how to handle event listeners and how to incorporate event-driven interactions in the web page.
#### 3. I have learned how to fetch data from a json file into the web page and manipulate that data in javascript.

## H. Credits
#### 1.Professor Mathura Govindarajan
#### 2.Github account (Kevin Murani) for json file
#### 3.Stack Overflow

## I. Link of the final webpage :


