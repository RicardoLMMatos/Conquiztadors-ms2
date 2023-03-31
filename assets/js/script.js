document.addEventListener("DOMContentLoaded", function () {
  // All coments were made by me to make me understand what is going on and to make sence of what I'm doing

  //Globals
  //The question heading
  const question = document.getElementById("question");

  // The quit button variable
  const quit = document.getElementById("quit");

  //The answer list
  const answers = document.getElementById("answers");

  //The subject heading
  const subject = document.getElementById("subject");

  // The progress heading 
  const progress = document.getElementById("progress");

  // The total score heading
  const total = document.getElementById("total");

  // The progress heading 
  const restart = document.getElementById("restart");

  // The score
  let score = 0;

  //Get the value of the "quiz" in eg "https://example.com/?quiz=science"
  let quiz = false; //"quiz"

  // The trivia api variable
  let trivia_api = false;

  // The question set variable
  let questionsSet = [];

  // Holds the questions, answers and the correct answer
  // This "const params = new Proxy" is something I did not learn in the course but I found it on the internet and I am trying to understand better, but I  it works like this, it gets the value of the quiz in the url and stores it in the variable quiz
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  // Store the quiz value inside the quiz variable
  quiz = params.quiz;

  // Store the trivia api value inside the trivia api variable (true)
  trivia_api = params.trivia_api;

  //If the quiz is science,add the science questions to the  question set and so on
  //I have used chatgpt to created the questions and answer
  if (params && quiz) {
    subject.innerHTML = quiz;
  }

  //Function to shuffle the arrays
  //This will randomise the order of the questions and answers                                  
  function arrayShuffle(array) {
    return array.sort((a, b) => 0.5 - Math.random());
  }
  // fetch request from: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  /*
    To extract the JSON body content from the Response object, 
    we use the json() method, 
    which returns a second promise that resolves with the result of parsing the response body text as JSON.
  */

  function displayQuestions(data) {

    for (let i = 0; i < data.length; i++) {

      let answers = [];
      const {
        question,
        correctAnswer,
        incorrectAnswers
      } = data[i];
      answers.push(correctAnswer, ...incorrectAnswers);
      answers = arrayShuffle(answers);
      const correctAnswerIndex = answers.indexOf(correctAnswer);
      questionsSet.push({
        question: question,
        correctAnswer: correctAnswerIndex,
        answers: answers
      });
    }
    injectQuestion(0, questionsSet);
  }


  //  The fetch function that fetches the trivia api quiz data
  fetch(`https://the-trivia-api.com/api/questions?limit=10&categories=${quiz}&difficulty=easy`)
    .then(res => {
      return res.json();
    })
    .then(json => {
      displayQuestions(json);

    })
    .catch(error => {
      alert('there was an error fetching the trivia api questions, please try refreshing your browser or trying again later.');
    });


  // This function injects the quiz messages to the DOM
  function checkScoreProgress(index, length) {

    if (index > length - 1) {
      progress.innerHTML = "";
      if (score == length) {
        total.innerHTML = `Congratulations, You are a quiz legend!! <br><br> Your score is: ${score} out of ${length}`;
      } else if (score >= 6 && score != 10) {
        total.innerHTML = `Congratulations, You have done great!! <br><br> Your Score is: ${score} out of ${length}`;
      } else if (score <= 5) {
        total.innerHTML = `Your Score is: ${score} out of ${length} <br><br> <a href="questions-page1.html?quiz=${quiz}"> Click here to give this subject another try!</a>`;
      } else {
        total.innerHTML = `Score: ${score} out of ${length}`;
      }

      restart.className = "question-button is-active";
      question.className = "question is-hidden";
      quit.className = "quit-btn is-hidden";

      return false;
      //End of quiz
      //Show the score
      //Show the restart button
    } else {
      return true;
    }

  }

  // Injects the questions into the DOM
  function injectQuestion(index, questions) {

    const questionsSetLength = questions.length;

    // Resets the questions and answers
    question.innerHTML = "";
    answers.innerHTML = "";

    //Set the index
    //Which question set to show
    const questionIndex = index !== undefined ? index : 0;
    //Check where we are in the quiz, the progress
    const check = checkScoreProgress(questionIndex, questionsSetLength);
    if (!check) {
      return;
    }
    //Set the current question set from the index 
    const currentQuestion = questions[questionIndex];
    //Set the current answer from the answer set
    const correctAnswer = currentQuestion.correctAnswer;
    //Set the answers from the current question set
    let currentAnswers = currentQuestion.answers;

    //Shuffle the answers
    //currentAnswers = arrayShufle(currectAnswers)
    //Set the question heading
    question.innerHTML = currentQuestion.question;
    //Set the data index attribute
    answers.setAttribute("data-index", index);

    //Set the progress heading
    //This will show the current question and the total number of questions
    //Current question is set by the index above +1 (beacuse the arrays start at 0)
    progress.innerHTML = `Question ${questionIndex+1} out of ${questionsSetLength}`;

    //The list items array
    let listItems = [];
    // Loop through the answers and create a li button for each on of them
    for (let i = 0; i < currentAnswers.length; i++) {

      //set the current answer from the answers array
      const current = currentAnswers[i];

      //Create the li and the button
      const li = document.createElement("li");
      const button = document.createElement("button");
      //Set the button text to the current answer
      button.innerHTML = current;

      //If the index of the current answer is the same as the current answer
      // Examples:
      // if the correct answer is the first item in the array (0), then set the data attribute to true
      // if the correct answer is the second item in the array (1), then set the data attribute to true
      // if the correct answer is the fourth item in the array (3), then set the data attribute to tru
      if (i == correctAnswer) {
        button.setAttribute("data-correct", true);
      } else {
        button.setAttribute("data-correct", false);
      }

      //set the button class 
      button.className = "question-button";
      //append the button to the list
      li.appendChild(button);
      listItems.push(li);
      //Append the li to the answers list
      //answers.appendChild(li)
    }

    //Shuffle the list items
    listItems = arrayShuffle(listItems);

    //Loop through the shuffled list and append them to the answers list
    for (let i = 0; i < listItems.length; i++) {
      answers.appendChild(listItems[i]);
    }
  }

  // Function to show the next question set
  function nextQuestion(index) {
    // the question set to show is set by the index (0, 1, 2, 3, etc.)
    const dataIndex = index !== undefined ? ++index : 0;
    injectQuestion(dataIndex, questionsSet);
    // The function to add the click event to the answers list
    clickEvent();
  }


  // This function is called when the user clicks the answers UL

  function clickNext(event) {

    //Check if the target is a button
    // Need to check this because the click event is added to the answers ul
    if (event.target && event.target.nodeName == "BUTTON") {
      answers.removeEventListener("click", clickNext);
      const element = event.target;
      const isCorrect = element.getAttribute("data-correct");
      console.log(isCorrect);
      //If vthe data attribute is true, then add the is-active class(right answer)
      if (isCorrect == "true") {
        element.className = "question-button is-active";
        score++;
      } else {
        //Else is wrong answer, add in-active class
        element.className = "question-button in-active";
      }
      //Set a timeout so that the user can see if the answer is correct or not
      //Then load in the next question via the data indes attribute
      setTimeout(function () {
        const dataIndex = answers.getAttribute("data-index");
        nextQuestion(dataIndex);
      }, 1000);
    }
  }
  // Function to add the click event to the answers list
  function clickEvent() {
    answers.addEventListener("click", clickNext);
  }
  clickEvent();
});