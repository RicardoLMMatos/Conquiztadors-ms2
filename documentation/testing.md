# Testing

Return back to [README.md](https://github.com/RicardoLMMatos/Conquiztadors-ms2/blob/main/README.md)

---

### Table of Contents

* [Code validation](#Code-validation)
* [Functional Testing](#functional-testing)
    * [Home Page](#Home-page)
    * [Questions page](#Questions-page)
    * [Score page](#Score-page)
* [Broswer Compatibility](#Broswer-Compatibility)
* [Device Compatability and Responsiveness Testing](#device-compatability-and-responsiveness-testing)
* [Accessibility and Performance](#accessibility-and-performance)
* [Debugging and issues](#Debugging-and-issues)
* [About my testing](#About-my-testing-file)

---

## Code validation

As well as using online validating tools to rest my code I have also extensively manually 
searched All my files for any errors, after fixing any errors found I then used the online tools.

To validate my code using online validators I have used the recomended online validators:

* [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.
* [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.
* [Javascript validator JSHint](https://jshint.com/) to validate all of my Javascript files.


### HTML

The html code passed the validation with no errors.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Findex.html) | [screenshot](/documentation/documentation%20images/html-validation.png) | No errors or warnings |
| Questions | [W3C](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+http%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Fquestions-page1.html%3Fquiz%3Dscience%26trivia_api%3Dtrue) | [screenshot](/documentation/documentation%20images/html-questions-validation.png) | Warnings are about used empty headings, the reason they are empty is that they are used to inject text using Javascript |


### CSS

The HTML code passed the validation with no errors.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | [screenshot](/documentation/documentation%20images/css-validayion.png) | No errors found, warnings are due to fontawsome vendor extensions|


### Javascript

The Javascript code passed the validation with no errors.
Theres also no errors showing on the browswer console.

| Page | Screenshot | Notes |
| --- | --- | --- |
| Main js file | [screenshot](/documentation/documentation%20images/js-validation.png) | No errors found|
| API js file | [screenshot](/documentation/documentation%20images/api.js-validation.png) | No errors found|

---

## Functional Testing

 * ### Home page
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Subjects buttoms links | ok
    Subjects buttoms hover effect | ok
    hover effect on all links | ok
    Navigation links to relevant pages | ok
    Social media icons in the footer link to the relevant social media and open in new tab | ok

 * ### Questions page 
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Subject message changes acording to subject | ok
    Questions and answers are injected | ok
    Questions are randomized | ok
    Correct number of questions is shown | ok
    Answers buttons submit answers | ok
    hover effect on all links | ok
    Goes to score page after ten questions | ok
 
 * ### Score page 
    Test | Result
    ---|:---:
    Page responsiveness | ok
    Score functions works correctly | ok
    Score message is shown according to score | ok
    Quit button kinks to home page| ok

---

## Broswer Compatibility

I have teste the site on four diferent broswers, Google chrome, Firefox developer edition, opera and Microsoft Edge.
The site is consistant on all browswers with no visual or performance changes.


| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome  | [screenshot](/documentation/documentation%20images/chrome-screen.png) | Works as expected      |
| Firefox | [screenshot](/documentation/documentation%20images/firefox-screen.png) | Works as expected |
| Edge    | [screenshot](/documentation/documentation%20images/edge-screen.png) | Works as expected   |
| Opera   | [screenshot](/documentation/documentation%20images/opera-screen.png) | Works as expected   |


---


## Device Compatability and Responsiveness Testing

The website was tested using Google Chrome Developer Tools and real devices to check for responsiveness.

#### Google chrome tools tested devices:
* iPhone SE
* iPhone XR
* iPhone 12 Pro
* Pixel 5
* Samsung Galaxy S8+
* Samsung Galaxy S20 Ultra
* iPad Air
* iPad Mini
* Surface Pro 7
* Surface Duo
* Galaxy Fold
* Samsung Galaxy A51
* Nest Hub
* Nest Hub Max

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (DevTools) | [screenshot](/documentation/documentation%20images/mob-chrometools.png) | Works as expected |
| Tablet (DevTools) | [screenshot](/documentation/documentation%20images/tab-chrometools.png) | Works as expected |

#### Other devices tested:

| Device | Screenshot | Notes |
| --- | --- | --- |
| iPhone 14 | [screenshot](/documentation/documentation%20images/iphone-home.jpg) | Works as expected |
| Samsung s21 | [screenshot](/documentation/documentation%20images/s21-home.jpg)| Works as expected |
| Samsung s10 plus | [screenshot](/documentation/documentation%20images/s10-home.jpg) | Works as expected |
| 4K Monitor | [screenshot](/documentation/documentation%20images/full-screen.png) | Works as expected |

---

## Accessibility and Performance

The [Google Chrome LightHouse](https://developer.chrome.com/docs/lighthouse) was used to do check the website performance and accessibility.
#### Results

 * Afer resizing some images the Lighthouse audit results are pretty good with a bit of performance drop on mobile, I believe this is due to javascript injecting most of the text using .innerHTML.

  |                       **Home page desktop score**                                  |                           **Home page mobile score**                                     |
  |        :----------------------------------------------------------:                |        :-------------------------------------------------------------------:             |
  | ![Home page desktop score](/documentation/documentation%20images/lighthouse-home-desk.png)  | ![Home page mobile score](/documentation/documentation%20images/lighthouse-home-mob.png)      |
  |                      **Questions page score**                                     |                          **Questions page mobile score**                                        |
  |  ![Questions desktop score](/documentation/documentation%20images/lighthouse-questions-desk.png)| ![Questions mobile score](/documentation/documentation%20images/lighthouse-questions-mob.png)         |
               
 ---

 ## User Experience testing

 #### Using the same User Experience expectations as the one on the readme.me file I have checked if the finished product was matching the expectations.

 ### Website owner Goals: 

  * I want new and existing users to play my quiz game.
     - The game have been deployed and is available to everybody to play it. 
  * I want players to find how the game works easily.
     - The rules are on the home page and are easy to understand.
     - [Rules](/documentation/documentation%20images/user-rules.png)
  * I want the quiz game to be both fun and educational.
     - There are six diferent subjects to choose from both fun and educational.
     - [Subjects](/documentation/documentation%20images/user-subjects.png)
  * I want my webpage to work as it should at all times.
     - Intensive testing has been done to assure that the site works as it should.
  * I want users to enjoy the game and return to play it again. 
     - The game has been built thinking about diferent types of users, offering enough subjects for everyone's liking with easy to medium dificulty questions so it is enjoyable and makes the users return.

### First Time Visitor Goals:
 
  * I want to easily find out how the game works.
     - The rules are easy to read and are on the home page, the subjects are on the home page and are easy to identify, the game starts as soon as the user picks the subjects.
     - [Home screen](/documentation/documentation%20images/desk-home.png)
  * I want to be able to start a game quickly without having to go through lots of steps.
     - Same as above.
     - [Home screen](/documentation/documentation%20images/desk-home.png)
  * I want to be able to pick a subject of my liking.
     - The game offers six diferent subjects.
     - [Subjects](/documentation/documentation%20images/user-subjects.png)
  * I want to quickly return to the subjects page at any time if I wish.
     - There is a quit button at the bottom of the questions page that takes the user back to the home screen.
    - [Questions page](/documentation/documentation%20images/desktop-questions.png)
  * I want to get my score at the end and get a message that relates to it.
    - I have created three diferent messages for three diferent types of score making it more personal and fun to the user.
    - [Lower score](/documentation/documentation%20images/score.png) 
    - [Medium score](/documentation/documentation%20images/med-score.png)
    - [Max score](/documentation/documentation%20images/max-score.png)
  * I want to quickly find the links to social media pages.
    - The links for social media are at the bottom of the home page and they are very easy to find due to their bright colours.
    - [Home screen](/documentation/documentation%20images/desk-home.png)

### Returning and frequent Visitor Goals:

   * I want to be able to start a game quickly without having to go through lots of steps.
     - The rules are easy to read and are on the home page, the subjects are on the home page and are easy to identify, the game starts as soon as the user picks the subjects.
     - [Home screen](/documentation/documentation%20images/desk-home.png)
   * I want to have different subjects to choose from.
     - There are six diferent subjects to choose from both fun and educational.
     - [Subjects](/documentation/documentation%20images/user-subjects.png)
   * I want the game experience to be consistent every time I play the game.
     - Intensive testing has been done to assure that the site works as it should.
   * I want to get random questions on all subjects.
     - I have created a function to shuffle the questions from the api so that the user gets randomised questions at all times.
     - [Array shuffle](/documentation/documentation%20images/array-shuffle.png)
   * I want to quickly find the links to social media pages.
     - The links for social media are at the bottom of the home page and they are very easy to find due to their bright colours.
     - [Home screen](/documentation/documentation%20images/desk-home.png)


   ---

## Debugging and issues
 
* Variables - stored key elements and data inside variables 
 This is so that I could console.log these to inspect the data and debug

* Functions - key pieces of functionality were added to functions
 This keeps the code maintainable
 This allows for testing

* Bug found - Click next function
  This has an index passed to it that grabs the next question 
  console.log was used so that I could check if the correct question was being loaded
  this also helped fix a click bug 
* Bug found - the next question code was being activated when clicking outside a button
 this was happening because the event listener is attached to the parent element and the next question was being called when clicking on the UL
 console.log was used to output the event target
 you could then work out that the ul click was calling the next question function 
 the fix was to put the next question function inside the  if (event.target && event.target.nodeName == "BUTTON") if statement
 this means the user must click a button (answer) for the next question function to be called (this loads the next question)

* bug found - there was an issue where the answers were not being injected into the DOM
 I used a console.log inside the for loop that is responsible for injecting the list items
 After this nothing was being logged to the console, the issue was the for loop
 After reviewing the for loop, the .length was missing from the currentAnswers.length part of the for loop
 After adding .length to currentAnswers the data was being logged to the console and the answers were being injected to the DOM


* Issue found - Fetch function for the Trivia API
-the question or answers were not being inected in the DOM when the injectQuestion function was being called 
Console.log was used inside the injectQuestion function - responsible for injecting the questions and answers into the DOM - and this was logging a promise to the console
So, the global variable questionsSet was not being updated with the correct data from inside the .then function
After doing a bit of research, I found that this https://stackoverflow.com/questions/39021870/fetch-returns-promise-instead-of-actual-data-even-after-using-then
"The way promises works mean you'll need to handle the responseJSON inside the handler for then(). Due to the asynchronous nature of requests the outer code will already have returned by the time the promise resolves."
So, to fix this I had to move the injectQuestion function inside the .then function, the inject question function then injected the question and answers into the DOM

* Bug found - (just before submition) In the subject message at the top of the questions page text was all lower case and with symbols, I believe the issue is cause by the subjects html element getting it's innerHTML from the api.
To fix it I have used " subject.innerHTML = capitalizeFirstLetter(quiz.replace(/_/g, " "))" use Capitals, remove "_" and add a space between words.

#### Unfixed bugs

* When validating questions page HTML with W3C Warnings are about used empty headings, the reason they are empty is that they are used to inject text using Javascript.
[screenshot](/documentation/documentation%20images/questions-validator-warnings.png)

---

## About my testing file

I have chosen to take manual testing for this project and I am aware of both BDD and TDD testing methods, the reason I chose BDD or Behaviour driven development is that I wanted to focus on learning as much of the Javascrpit language as I could in the given time.
I have extensively manualy tested my software and in the future I intend to use TDD with BDD.

[Back to top](#Testing)

[Back to README.md](https://github.com/RicardoLMMatos/Conquiztadors-ms2/blob/main/README.md)


