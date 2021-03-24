# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Saif Awan

Time spent: 5 hours spent in total

Link to project: https://glitch.com/edit/#!/adorable-spurious-skunk

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Input form that allows the player to choose the pattern length!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://i.imgur.com/Twa5oTG.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   StackOverflow + 
   W3schools/Javascript|HTML|CSS

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   Most of this assignment was following along and trying to understand the code that was provided. I challenged myself by figuring out the
   guess function without peaking at the solution. My approach to logic problems like this is to write out the entire logic with the conditional
   statements but leave full sentences in the conditions at first. Example:
   
   if(is turn over){
   
   if(is this the last turn){}
   
   else{}
   }
   
   else{ // increment guessCounter}
   
   Then I worked through the framework from the top down by putting a proper conditonal and then making the proper body for the conditonals
   based on the functions that were provided. I ran tests as I went along to make sure the function was working, like after completing
   the "is guess correct" logic I tested the game to see if the incorrect answer would give the correct alert. I ran into some roadblocks
   in this section when I was adding an optional input button for pattern length. I wanted to make it possible for the user to start the program
   without inputting the pattern size and have program use a default value when nothing is inputted. I searched up some solutions for this issue
   but couldn't find anything that worked so I just tried multiple different conditionals at line 122 and used the console error to see if I would
   get the right program behavior. Trial and error is very handy!

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
  
   One thing that kept coming to mind when I was completing the exercise is do I have to come up with this type of code from scratch? How much of
   the web development environment is collaborative? How often does someone have to make a full-stack product by themselves?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc).
   Be specific. (recommended 100 - 300 words)
   
   I wanted to make the buttons fit together in a circle like the Simon Says game had them. I also wanted to add a full toggle menu where the player
   could change pattern size, button count, time between clues, increasing pace etc. I also wanted to add a feature where the buttons would
   shuffle between each clue. I would've tried a few of these for the application but I found out about the SITE program late and only had a week
   to work on it and it was in the middle of midterm week.

## License

    Copyright [Saif Awan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
