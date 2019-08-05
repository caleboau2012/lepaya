# Lepaya Assessment

## Pre-requisites

- npm
- NodeJS

## Set up instructions

- `cd` to the directory of your choice

- `git clone https://github.com/caleboau2012/lepaya`

- `cd lepaya`

- `npm i`

- `npm start`

## Demo

If all goes well, visit http://localhost:3000, you should see the game page.

You should see something like this
https://lepaya.herokuapp.com/

Feel free to change the difficulty levels.
Have fun.

## TODO

- **Converting history board to leaderboard:** This involves implementation of usernames and storing history data on the server rather than the client which in turn requires some form of storage like sqlite or mysql or mongo… on the server but I considered that beyond the scope of the assessment.
- **UI feedback for what cards have already been clicked:** Easy to implement and needed for a better gaing experience. Need more time to implement.
- **Break solution up into smaller components:**
- **Improve mobile responsiveness:** A game like this is most likely to be played on a mobile device. Tested this right now using chrome tools and the range selector disappeared. Works on safari though. Need more time to implement an alternative or a patch.
- **Improve UI appeal:** This game can be made even more beautiful. It’s a game after all :-).
- **Security:** The game can be easily hacked as the computation is mostly on the client side. Moreso, the numbers being generated from the backend allows for a user to sniff the request and get the response and thus score a high score. A solution to this would be an encryption that obfuscates the numbers.
- **Unit tests:** Unit tests would help certify the working status of the code. If given time, I’d write some tests to this effect.

## NOTES

https://docs.google.com/document/d/1IB5y2IPdrCcCMQaDrr6G1_wIJ7u3jVDEWqEd8Zs2ceE/edit?usp=sharing
