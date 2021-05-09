# My-Team: 10 Object-Oriented Programming: Team Profile Generator

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Installation

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
Sample HTML Image: <img width="962" alt="Screen Shot 2021-05-09 at 3 47 15 PM" src="https://user-images.githubusercontent.com/79215638/117585685-b96d2480-b0e1-11eb-8bd3-ce938c9b0902.png">

Tests CLI Run Image: ![ TestRun](https://user-images.githubusercontent.com/79215638/117585546-0e5c6b00-b0e1-11eb-99b8-489bfb0763f2.png)
Link to walkthrough video:
https://drive.google.com/file/d/1GrDvPpyK1TkKIjbScLEI8lcdspREhZGF/view?usp=sharing

## Credits
Introduction to Testing in Javascript with Jest: https://www.youtube.com/watch?v=FgnxcUQ5vho
Jest Crash Course - Unit Testing in JavaScript: https://www.youtube.com/watch?v=7r4xVDI2vho
Learn How To Generate HTML Content With JavaScript By Creating a Card: https://www.youtube.com/watch?v=NboWXuhlqvQ
Object-oriented Programming in JavaScript: Made Super Simple | Mosh: https://www.youtube.com/watch?v=PFmuCDHHpwk
https://www.geeksforgeeks.org/node-js-fs-writefilesync-method/
https://nodejs.org/api/fs.html#fs_synchronous_example
https://nodejs.org/api/path.html#path_path_join_paths
https://nodejs.dev/learn/update-all-the-nodejs-dependencies-to-their-latest-version
The Professional Readme Guide

## License
MIT License

Copyright (c) [2021] [Shanisha Mitchell]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```