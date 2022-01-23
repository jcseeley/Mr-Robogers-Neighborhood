# Mr. Roboger's Neighborhood

#### By Jase Seeley

#### Talk to Mr. Roboger by inputting a number. 

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

This page was designed to allow you to chat with Mr. Roboger. Type a number into the field, click submit, and receive a calculated response. Won't you be his neighbor? 

## Setup/Installation Requirements

* Visit https://jcseeley.github.io/Mr-Robogers-Neighborhood
* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open the index.html file in your browser.

## Tests

- Describe: mrRoboger(num)

Test: "It should return "0" if input is 0."

Code:
const num = 0
mrRoboger(0)

Expected Output: "0"


- Describe: mrRoboger(num)

Test: "It should return "Won't you be my neighbor?" if string includes '3'"

Code: 
const num = 3
mrRoboger(3);

Expected Output: "Won't you be my neighbor?"


- Describe: mrRoboger(num)

Test: "It should return "Boop!" if string includes '2' and not '3'."

Code:
const num = 2
mrRoboger(2)

Expected Output "Boop!"


- Describe mrRoboger(num)

Test: "It should return "Beep!" if string includes '1' and not '2' or '3'."

Code:
const num = 1
mrRoboger(1)

Expected output: "Beep!"


- Describe: mrRoboger(num)

Test: "It should return '"0", "Beep!", "Boop!", "Won't you be my neighbor?", 4' if input is '4'.

Code:
const num = 4
mrRoboger(4)

Expected Output: '"0", "Beep!", "Boop!", "Won't you be my neighbor?", 4'


## Known Bugs

* No known bugs at this time.

## License

MIT

Copyright (c) 2022 Jase Seeley