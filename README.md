# Conquiztadors-ms2


![ScreenShot](/assets/documentation/documentation%20images/mockup.png)

You can check the website here [ConQuiztadors](https://ricardolmmatos.github.io/Conquiztadors-ms2/)

---

## Table of Contents

- [**Introduction**](#About)
  - [Client Goals](#Website-owner-Goals)
  - [User Goals](#First-Time-Visitor-Goals)
- [**Structure**](#Structure)
  - [Home page](#Home-page)
  - [Questions page](#Questions-page)
  - [Score-page](#Score-page)
- [**Design**](#Design)
  - [Colour Scheme](#ColourScheme)
  - [Typography](#Typography)
  - [The logo](#The-logo)
  - [Imagery](#Imagery)
  - [Wireframes](#Wireframes)
- [**Technologies Used**](#technologies-used)
- [**Testing**](#testing)
- [**Future Implementations**](#Future-Implementations)
- [**Deployment**](#deployment)
- [**Credits**](#credits)

---

## About

ConQuiztadors is a quiz game for my Code Institute Full-stack developer ms2 project.
The idea of making a quiz game to this project was bacause I wanted to created something very interactive and that I personaly like which is quiz games.

I have tried to make this game very interactive, the users will have the chance to choose between six subjects, each subject has ten randomised  questions for which I have used an API to fetch. [The trivia API](https://the-trivia-api.com/).
On each answer the user will get a red or green light when clicking the chosen answer (red for wrong and green for right answer) and the user will also get a message after pressing the button with right or wrong text.
At the end of each round the user will get the score and a personalised message for three types of score; less than five, between six and nine or ten out of ten correct answers.

---


## User Experience (UX)

 ### Website owner Goals: 

  * I want new new and existing users to play my quiz game.
  * I want players to find how the game works easily.
  * I want the quiz game to be both fun and educational.
  * I want my webpage to work as it should at all times.
  * I want users to enjoy the game and return to play it again. 

### First Time Visitor Goals:
 
  * I want to easily find how the game works.
  * I want to be able to start a game quickly without having to go through lots of steps.
  * I want to be able to pick a subject of my liking.
  * I want to quickly return to the subjects page at any time if I wish.
  * I want to get my score at the end and get a message that relates to it.
  * I want to quickly find the links to social media pages.

### Returning and frequent Visitor Goals:

   * I want to be able to start a game quickly without having to go through lots of steps.
   * I want to have diferent subjects to choose from.
   * I want the game experience to be consistant every time I play the game. 
   * I want to get random questions on all subjects.
   * I want to quickly find the links to social media pages.

   ---

   ## Structure ##

 ### The website consists of three pages (home page, questions page and score) 

### Home Page

 The home page consists of five sections:

 * Hero section with the ConQuiztadors logo.
 * A welcome message. 
 * A rules message.
 * Subjects buttons.
 * Social media links.

 ![Home page](/documentation/documentation%20images/desk-home.png)

### Questions page

 The questions page consists of four sections:

 * Subject at the top.
 * The questions progression. 
 * The question area.
 * The answers area.

 ![Gallery page](/documentation/documentation%20images/desktop-questions.png)

 ### Score page 

 The score page consists of four answers:

 * Subject at the top.
 * The score are where the score is shown in 0/0 (correct answers out of total questions).
 * A personalised message based on the score (there are three types of message).
 * A play again button linked to the home screen.

 ![Score page](/documentation/documentation%20images/score.png) 

 | Medium score                                                         | Highest score                                                           |
| ---------------------------------------------------------------------  | ------------------------------------------------------------------------- |
| ![medium score](/documentation/documentation%20images/med-score.png) | ![high score](/documentation/documentation%20images/max-score.png)  |


 ---

 ## Design

### Colour Scheme

For the colours wanted the game to feel fun and relaxing so I choose warm, bright, complementary and contrasting colours.

![ScreenShot](/documentation/documentation%20images/colours-palette.png)


## The logo

The logo was designed by my daughter Lara using photopea (https://www.photopea.com/) as she wanted to be involved. 

![ScreenShot](/assets/images/conquiztadors-logo.webp)

Colours used for the logo:

![ScreenShot](/documentation/documentation%20images/palette.png)

---

### Typography

For the fonts, again I wanted something that would match the theme and fun so I chose the "Alkatra" font with a fallback of sans-serif.
[Font on Google fonts](https://fonts.google.com/specimen/Alkatra?query=alkatra)

![ScreenShot](/documentation/documentation%20images/font.png)

---

### Imagery

For this project only two images were used, the logo which was already mentioned above and the background image. The background image is a frame capture of a video I was intending to use but I then changed my mind as it was going to consume more resources. The video is free to use and it is from (https://www.videvo.net)
I looked for an image that would fit the colours and the subject and I believe this image fits in perfectly.

Background image :

![SreenShot](/images/DiscoLights2Videvo-image.webp)

---

### Wireframes


I have used Balsamic wireframe software to create my initial wireframes, for desktop, laptop, tablet and mobile.
The finished product came very close to the initial concept.

| Desktop Homepage                                                          | Desktop Questions page                                                           |
| ---------------------------------------------------------------------  | ------------------------------------------------------------------------- |
| ![Index page wireframe](/documentation/documentation%20images/desk-home-wire.png) | ![Questions page wireframe](/documentation/documentation%20images/desk-questions-wire.png)  |

| Mobile homepage                                                           | Mobile questions page                                                            |
| ---------------------------------------------------------------------  | ------------------------------------------------------------------------- |
| ![Index page wireframe](/documentation/documentation%20images/mob-home-wire.png)     | ![questions page wireframe](/documentation/documentation%20images/mob-questions-wire.png)      |

 * [Desktop home page wire](/documentation/documentation%20images/desk-home-wire.png)
 * [Desktop questions page wireframe](/documentation/documentation%20images/desk-questions-wire.png)
 * [Desktop score page wireframe](/documentation/documentation%20images/desk-score-wire.png)
 * [Tablet home page wireframe](/documentation/documentation%20images/tab-home-wire.png)
 * [Tablet questions page wireframe](/documentation/documentation%20images/tab-questions-wire.png)
 * [Tablet score page wireframe](/documentation/documentation%20images/tab-score-wire.png)
 * [Mobile home page wireframe](/documentation/documentation%20images/mob-home-wire.png)
 * [Mobile questions page wireframe](/documentation/documentation%20images/mob-questions-wire.png)
 * [Mobile score page wireframe](/documentation/documentation%20images/mob-score-wire.png)

---

## Languages used

* [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
* [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
* [Javascript](https://www.javascript.com) used for user interaction on the site.

## Libraries and programs used
* [The Trivia API](https://the-trivia-api.com/) - This is the API used to get the questions and answers
* [Balsamiq](https://balsamiq.com) - wireframes
* [Photopea](https://www.photopea.com/) - to design the logo
* [Convertio](https://convertio.co/jpeg-webp/) - to convert images to webp
* [VScode](https://code.visualstudio.com) - code editing
* [GIT](https://git-scm.com/), [GitHub](https://github.com/) - tracking, storing, hosting project
* [Chrome DevTools](https://developer.chrome.com/docs/devtools) - inspecting and debugging code
* [Tinypng](https://tinypng.com/) - resize images
* [Google fonts](https://fonts.google.com/) - Used to import the main font
* [Font Awesome](https://fontawesome.com/) - Used to add social media icons
* [Responsive Design Checker](https://responsivedesignchecker.com/) - To test the web pages on various screen sizes

---

## Testing
See [TESTING.md]

---

## Future Implementations

In the future I would like to add:
 * A way for the user to input a username at the beggining of the game and get a highscores board at the end of the quiz game.
 * More subjects.
 * Diferent game types, such as rounds with time limits.

---

## Deployment

The Live link is [QonQuiztadors](https://ricardolmmatos.github.io/Conquiztadors-ms2/index.html)

#### To deploy the project:
1. In the [GitHub repository](https://github.com/), navigate to the *Settings* tab.
2. Once in Settings, navigate to the *Pages* tab on the left hand side.
3. In the *Build and deployment* section under *Branch*, select the **master** branch and click *Save*.
4. Once the master branch has been selected, the page will be automatically refreshed and a display indicates the successful deployment and the link to the address.

#### To run the website on a local machine:
1. Go to the [Conquiztadors repo](https://github.com/RicardoLMMatos/Conquiztadors-ms2)
2. Click on the green *Code* button and *Download ZIP*
3. Extract the ZIP file on your local machine
4. Run the *index.html* file in a browser

#### To clone the repo:
1. Go to the [Conquiztadors repo](https://github.com/RicardoLMMatos/Conquiztadors-ms2)
2. Click the *Code* button to the right of the screen and copy the *HTTPs* link there
3. Open a GitBash terminal and navigate to the directory where you want to locate the clone
4. Type `git clone` and paste the copied *HTTPs* link, press the *Enter* key to begin the clone process

---

## Credits

### Media Content

* [The Trivia API](https://the-trivia-api.com/) - This is the API used to get the questions and answers
* [Google Fonts](https://fonts.google.com) - fonts
* [FontAwesome](https://fontawesome.com) - icons
* [La Torre restaurant](https://www.latorrerestaurant.com/) - gallery images
* [Pixabay](https://pixabay.com) - free Images
* [Photopea](https://www.photopea.com/) - to design the logo
* [Fontawsome](https://fontawesome.com/) - icons
* [Gimp](https://www.gimp.org/) -favicon
* [Coolors](https://coolors.co/) - colour pallete

## Code
 All my code was written by me based on what I have learned from [CodeInstitute Full Stack Developer Course](https://codeinstitute.net/ie/full-stack-software-development-diploma/) and multiple online sources such as [W3schools](https://www.w3schools.com/), [the Net Ninja](https://www.youtube.com/c/TheNetNinja?app=desktop) and some more I just clicked by.


[Back to top](#contents)






