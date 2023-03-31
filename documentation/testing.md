# Testing

Return back to the [README.md](/README.md) file.

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
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Findex.html) | ![screenshot](/documentation/documentation%20images/html-validation.png) | Section lacks heading. Consider using h2-h6 elements |
| Questions | [W3C](https://validator.w3.org/nu/?useragent=Validator.nu%2FLV+http%3A%2F%2Fvalidator.w3.org%2Fservices&acceptlanguage=&doc=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Fquestions-page1.html%3Fquiz%3Dscience%26trivia_api%3Dtrue) | ![screenshot](/documentation/documentation%20images/html-questions-validation.png) | Warnings are about used empty headings, the reason they are empty is that they are used to inject text using Javascript |


### CSS

The HTML code passed the validation with no errors.

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fricardolmmatos.github.io%2FConquiztadors-ms2%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](/documentation/documentation%20images/css-validayion.png) | No errors found, warnings are due to fontawsome vendor extensions|

### Javascript

The Javascript code passed the validation with no errors.
Theres also no errors showing on the browswer console.

| Page | Screenshot | Notes |
| --- | --- | --- |
| Main js file | ![screenshot](/documentation/documentation%20images/js-validation.png) | No errors found|
| API js file | ![screenshot](/documentation/documentation%20images/api.js-validation.png) | No errors found|

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

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot]: /documentation/documentation%20images/chrome-screen.png | Works as expected |
| Firefox | ![screenshot]: /documentation/documentation%20images/firefox-screen.png | Works as expected |
| Edge | ![screenshot]: /documentation/documentation%20images/edge-screen.png | Works as expected |
| Opera | ![screenshot]: /documentation/documentation%20images/opera-screen.png | Works as expected |



    








