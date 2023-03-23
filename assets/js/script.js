document.addEventListener("DOMContentLoaded", function() {
// All coments were made by me to make me understand what is going on and to make sence of what I'm doing

//Globals
//The question heading
const question = document.getElementById("question");
//The answer list
const answers = document.getElementById("answers");
//The subject heading
const subject = document.getElementById("subject");
// The progress heading 
const progress = document.getElementById("progress");
// The total score heading
const total = document.getElementById("total");
// the progress heading 
const restart = document.getElementById("restart")
// The score
let score = 0;

// The question set variable
let questionsSet = [];
});




//Questions

//  The sience question set array
questionsSet.push({
    question: 'What is the smallest unit of matter?',
    correctAnswer: 0,
    answers: [
        'Atom',
        'Molecule',
        'Element',
        'Compound'
    ]
}, {
    question: 'What type of energy is associated with the movement of atoms and molecules?',
    correctAnswer: 2,
    answers: [
        'Thermal energy',
        'Electrical energy',
        'Kinetic energy',
        'Potential energy'
    ]
}, {
    question: 'What is the process by which plants convert carbon dioxide and water into glucose?',
    correctAnswer: 1,
    answers: [
        'Cellular respiration',
        'Photosynthesis',
        'Digestion',
        'Fermentation'
    ]
}, {
    question: 'What is the study of the structure, function, and interactions of living organisms called?',
    correctAnswer: 3,
    answers: [
        'Chemistry',
        'Physics',
        'Geology',
        'Biology'
    ]
}, {
    question: 'What is the process by which a substance changes from a solid to a gas without going through the liquid state?',
    correctAnswer: 2,
    answers: [
        'Evaporation',
        'Melting',
        'Sublimation',
        'Condensation'
    ]
}, {
    question: 'What is the force that causes objects to fall to the ground?',
    correctAnswer: 1,
    answers: [
        'Friction',
        'Gravity',
        'Inertia',
        'Momentum'
    ]
}, {
    question: 'What is the measure of the amount of matter in an object?',
    correctAnswer: 3,
    answers: [
        'Volume',
        'Density',
        'Weight',
        'Mass'
    ]
}, {
    question: 'What type of wave does not require a medium to travel through?',
    correctAnswer: 0,
    answers: [
        'Electromagnetic wave',
        'Sound wave',
        'Water wave',
        'Seismic wave'
    ]
}, {
    question: 'What is the branch of science that studies the Earth, including its composition, structure, and processes?',
    correctAnswer: 2,
    answers: [
        'Astronomy',
        'Chemistry',
        'Geology',
        'Biology'
    ]
}, {
    question: 'What is the unit of measurement for electric current?',
    correctAnswer: 1,
    answers: [
        'Ohm',
        'Ampere',
        'Volt',
        'Watt'
    ]
}

);

 //  The history question set array
 questionsSet.push({
    question: 'Who was the first president of the United States?',
    correctAnswer: 2,
    answers: [
        'John Adams',
        'Thomas Jefferson',
        'George Washington',
        'James Madison'
    ]
}, {
    question: 'In what year did World War II end?',
    correctAnswer: 0,
    answers: [
        '1945',
        '1941',
        '1950',
        '1943'
    ]
}, {
    question: 'Who was the leader of the Soviet Union during the Cuban Missile Crisis?',
    correctAnswer: 3,
    answers: [
        'Leonid Brezhnev',
        'Nikita Khrushchev',
        'Mikhail Gorbachev',
        'Joseph Stalin'
    ]
}, {
    question: 'What was the name of the ship that Charles Darwin sailed on during his voyage to the Galapagos Islands?',
    correctAnswer: 1,
    answers: [
        'The HMS Endeavour',
        'The HMS Beagle',
        'The HMS Bounty',
        'The HMS Victory'
    ]
}, {
    question: 'In what year did the United States declare its independence from Great Britain?',
    correctAnswer: 0,
    answers: [
        '1776',
        '1789',
        '1812',
        '1861'
    ]
}, {
    question: 'Who was the first emperor of Rome?',
    correctAnswer: 2,
    answers: [
        'Julius Caesar',
        'Augustus',
        'Nero',
        'Hadrian'
    ]
}, {
    question: 'What was the name of the document that ended World War I?',
    correctAnswer: 3,
    answers: [
        'The Treaty of Versailles',
        'The Treaty of Brest-Litovsk',
        'The Treaty of Tordesillas',
        'The Treaty of Paris'
    ]
}, {
    question: 'What ancient civilization built the Machu Picchu complex?',
    correctAnswer: 1,
    answers: [
        'The Maya',
        'The Inca',
        'The Aztecs',
        'The Egyptians'
    ]
}, {
    question: 'Who was the first female prime minister of the United Kingdom?',
    correctAnswer: 0,
    answers: [
        'Margaret Thatcher',
        'Angela Merkel',
        'Indira Gandhi',
        'Theresa May'
    ]
}, {
    question: 'What was the name of the general who led the Confederate Army during the American Civil War?',
    correctAnswer: 3,
    answers: [
        'Ulysses S. Grant',
        'Robert E. Lee',
        'William Tecumseh Sherman',
        'Thomas "Stonewall" Jackson'
    ]
});

//  The question geography set array
questionsSet.push({
    question: 'What is the capital of Brazil?',
    correctAnswer: 1,
    answers: [
        'Rio de Janeiro',
        'Brasília',
        'São Paulo',
        'Belo Horizonte'
    ]
}, {
    question: 'Which African country has the largest population?',
    correctAnswer: 0,
    answers: [
        'Nigeria',
        'South Africa',
        'Egypt',
        'Ethiopia'
    ]
}, {
    question: 'What is the largest country in the world by land area?',
    correctAnswer: 2,
    answers: [
        'United States',
        'Russia',
        'Canada',
        'China'
    ]
}, {
    question: 'Which Asian country has the smallest land area?',
    correctAnswer: 3,
    answers: [
        'India',
        'China',
        'Indonesia',
        'Maldives'
    ]
}, {
    question: 'What is the largest ocean in the world?',
    correctAnswer: 1,
    answers: [
        'Arctic Ocean',
        'Pacific Ocean',
        'Atlantic Ocean',
        'Indian Ocean'
    ]
}, {
    question: 'What is the highest mountain in North America?',
    correctAnswer: 2,
    answers: [
        'Mount Denali',
        'Mount Saint Elias',
        'Mount McKinley',
        'Mount Logan'
    ]
}, {
    question: 'What is the official language of Pakistan?',
    correctAnswer: 0,
    answers: [
        'Urdu',
        'Pashto',
        'Punjabi',
        'Sindhi'
    ]
}, {
    question: 'What is the largest desert in the world?',
    correctAnswer: 3,
    answers: [
        'Gobi Desert',
        'Sahara Desert',
        'Kalahari Desert',
        'Antarctic Desert'
    ]
}, {
    question: 'Which European country is the smallest by land area?',
    correctAnswer: 1,
    answers: [
        'Vatican City',
        'Monaco',
        'San Marino',
        'Liechtenstein'
    ]
}, {
    question: 'What is the largest island in the world?',
    correctAnswer: 0,
    answers: [
        'Greenland',
        'Australia',
        'Madagascar',
        'Borneo'
    ]
});
//The maths questions array
questionsSet.push(
    {
        question: 'What is the square root of 81?',
        correctAnswer: 2,
        answers: [
          '9',
          '3',
          '√81',
          '81'
        ]
      },
      {
        question: 'What is the value of pi to two decimal places?',
        correctAnswer: 1,
        answers: [
          '3.14',
          '3.14159',
          '3.141',
          '3.142'
        ]
      },
      {
        question: 'What is the formula for the volume of a sphere?',
        correctAnswer: 3,
        answers: [
          'πr²',
          '2πr',
          'πd',
          '4/3πr³'
        ]
      },
      {
        question: 'What is the formula for the slope of a line?',
        correctAnswer: 0,
        answers: [
          'y2-y1/x2-x1',
          'x2-x1/y2-y1',
          'y1-y2/x1-x2',
          'x1-x2/y1-y2'
        ]
      },
      {
        question: 'What is the formula for the area of a triangle?',
        correctAnswer: 2,
        answers: [
          'lwh',
          'πr²',
          '1/2bh',
          'b²'
        ]
      },
      {
        question: 'What is the formula for the circumference of a circle?',
        correctAnswer: 1,
        answers: [
          '2πr',
          'πd',
          'πr²',
          '4πr'
        ]
      },
      {
        question: 'What is the value of the constant "e"?',
        correctAnswer: 3,
        answers: [
          '1.414',
          '2.718',
          '3.142',
          '2.71828'
        ]
      },
      {
        question: 'What is the formula for the area of a rectangle?',
        correctAnswer: 0,
        answers: [
          'lw',
          'l²',
          'w²',
          'lwh'
        ]
      },
      {
        question: 'What is the formula for the volume of a cylinder?',
        correctAnswer: 2,
        answers: [
          '2πr',
          'πd',
          'πr²h',
          '4/3πr³'
        ]
      },
      {
        question: 'What is the formula for the quadratic equation?',
        correctAnswer: 1,
        answers: [
          'y=mx+b',
          'x=(-b±√(b²-4ac))/2a',
          'y=ab^x',
          'y=√(x-a)+b'
        ]
    });

    //  The movies question set array
    questionsSet.push(
        {
            question: 'What is the highest grossing movie of all time?',
            correctAnswer: 2,
            answers: [
              'Avengers: Endgame',
              'Avatar',
              'Titanic',
              'Star Wars: The Force Awakens'
            ]
          },
          {
            question: 'Who directed the 1975 movie "Jaws"?',
            correctAnswer: 0,
            answers: [
              'Steven Spielberg',
              'Alfred Hitchcock',
              'Martin Scorsese',
              'Francis Ford Coppola'
            ]
          },
          {
            question: 'Which actor played the lead role in the "Harry Potter" movie series?',
            correctAnswer: 3,
            answers: [
              'Rupert Grint',
              'Tom Felton',
              'Matthew Lewis',
              'Daniel Radcliffe'
            ]
          },
          {
            question: 'What is the name of the iconic robot in the "Star Wars" franchise?',
            correctAnswer: 1,
            answers: [
              'C-3PO',
              'R2-D2',
              'BB-8',
              'HK-47'
            ]
          },
          {
            question: 'What is the name of the island where the dinosaurs are located in the movie "Jurassic Park"?',
            correctAnswer: 0,
            answers: [
              'Isla Nublar',
              'Isla Sorna',
              'Isla Muerta',
              'Isla Pena'
            ]
          },
          {
            question: 'What is the name of the character played by Tom Hanks in the movie "Forrest Gump"?',
            correctAnswer: 2,
            answers: [
              'Benjamin Button',
              'Forrest Gump Jr.',
              'Forrest Gump',
              'Forrest Junior'
            ]
          },
          {
            question: 'Which actress played the role of Katniss Everdeen in "The Hunger Games" movie series?',
            correctAnswer: 1,
            answers: [
              'Emma Stone',
              'Jennifer Lawrence',
              'Emma Watson',
              'Daisy Ridley'
            ]
          },
          {
            question: 'What is the name of the iconic villain in the "Star Wars" franchise, played by David Prowse and voiced by James Earl Jones?',
            correctAnswer: 3,
            answers: [
              'Darth Sidious',
              'Darth Maul',
              'Darth Vader',
              'Anakin Skywalker'
            ]
          },
          {
            question: 'What is the name of the actor who played James Bond in the movie "Casino Royale"?',
            correctAnswer: 0,
            answers: [
              'Daniel Craig',
              'Sean Connery',
              'Pierce Brosnan',
              'Roger Moore'
            ]
          },
          {
            question: 'What is the name of the company that created the genetically-engineered dinosaurs in the "Jurassic Park" franchise?',
            correctAnswer: 2,
            answers: [
              'InGen',
              'Masrani Corporation',
              'BioSyn',
              'Umbrella Corporation'
            ]
          }
    );
    //The gaming questions array
    questionsSet.push(
        {
            question: 'What is the name of the main character in "The Legend of Zelda" series?',
            correctAnswer: 0,
            answers: [
              'Link',
              'Zelda',
              'Ganondorf',
              'Navi'
            ]
          },
          {
            question: 'What is the name of the first commercially successful video game?',
            correctAnswer: 1,
            answers: [
              'Super Mario Bros.',
              'Pong',
              'Space Invaders',
              'Tetris'
            ]
          },
          {
            question: 'What is the name of the space marine protagonist in the "Doom" franchise?',
            correctAnswer: 3,
            answers: [
              'Duke Nukem',
              'B.J. Blazkowicz',
              'Master Chief',
              'Doomguy'
            ]
          },
          {
            question: 'What is the name of the popular sandbox game that allows players to build and create their own virtual worlds?',
            correctAnswer: 2,
            answers: [
              'World of Warcraft',
              'Minecraft',
              'Roblox',
              'Fortnite'
            ]
          },
          {
            question: 'What is the name of the iconic yellow character from the "Pac-Man" franchise?',
            correctAnswer: 1,
            answers: [
              'Blinky',
              'Pac-Man',
              'Inky',
              'Clyde'
            ]
          },
          {
            question: 'What is the name of the protagonist in the "Assassin\'s Creed" series?',
            correctAnswer: 2,
            answers: [
              'Ezio Auditore',
              'Altaïr Ibn-La\'Ahad',
              'Desmond Miles',
              'Bayek'
            ]
          },
          {
            question: 'What is the name of the iconic hedgehog character in the "Sonic the Hedgehog" franchise?',
            correctAnswer: 0,
            answers: [
              'Sonic',
              'Shadow',
              'Knuckles',
              'Tails'
            ]
          },
          {
            question: 'What is the name of the famous Italian plumber in the "Super Mario Bros." series?',
            correctAnswer: 3,
            answers: [
              'Yoshi',
              'Toad',
              'Luigi',
              'Mario'
            ]
          },
          {
            question: 'What is the name of the popular first-person shooter game that features a battle royale game mode?',
            correctAnswer: 1,
            answers: [
              'Call of Duty',
              'PlayerUnknown\'s Battlegrounds',
              'Counter-Strike: Global Offensive',
              'Overwatch'
            ]
          },
          {
            question: 'What is the name of the popular puzzle game that involves matching and clearing colorful candies?',
            correctAnswer: 2,
            answers: [
              'Bejeweled',
              'Candy Crush Soda Saga',
              'Candy Crush Saga',
              'Farm Heroes Saga'
            ]
          }
    );

    // Injects the questions into the DOM
    function injectQuestion(index) {
       
      // Resets the questions and answers
      question.innerHTML = "";
      answers.innerHTML = "";
      
      //Set the index
      //Which question set to show
      const questionIndex = index !== undefined ? index: 0;

      //Check where we are in the quiz, the progress
      const check = checkScoreProgress(questionIndex, questionSetLeght);
      if(!check) {
        return;
      }
      //Set the current question set from the index 
      const currentQuestion = questionsSet[questionIndex];
      //Set the current answer from the answer set
      const correctAnswer = currentQuestion.correctAnswer;
      //Set the answers from the current question set
      let currentAnswers = currentQuestion.question;
      //Shuffle the answers
      //currentAnswers = arrayShufle(currectAnswers)
      //Set the question heading
      question.innerHTML = currentQuestion.question;
      //Set the data index attribute
      answers.setAttribute("data-index", index);

      //The list items array
      let listItems [];


    }

