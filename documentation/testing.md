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
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Findex.html) | [screenshot](/documentation/documentation%20images/html-validation.png) | Section lacks heading. Consider using h2-h6 elements |
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

#### All bugs found before submition were fixed and I'm not aware of any existing bugs.

---

## About my testing file

I have chosen to take manual testing for this project and I am aware of both BDD and TDD testing methods, the reason I chose BDD or Behaviour driven development is that I wanted to focus on learning as much of the Javascrpit language as I could in the given time.
I have extensively manualy tested my software and in the future I intend to use TDD with BDD.

[Back to top](#Testing)

[Back to README.md](https://github.com/RicardoLMMatos/Conquiztadors-ms2/blob/main/README.md)


