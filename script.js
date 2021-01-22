// create variables to match my classes from the html
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

// these are vars that I can use below in my function to store answers and score

let currentQuestion = {}
// set to boolean for if statement later
let acceptingAnswers = true
//score start at zero
let score = 0
// counter for random func 
let questionCounter = 0
// blank index
let availableQuestions = []

let questions = [
    {
        question: "Who was Luke's father?",
        choice1: "Chewbacca",
        choice2: "Count Dooku",
        choice3: "Darth Vader",
        choice4: "Uncle Owen",
        answer:  3,
    },
    {
        question: "Which Jedi Master was hiding on the Dagobah System?",
        choice1: "Boba Fett",
        choice2: "Yoda",
        choice3: "Lando Calrissian",
        choice4: "Obi-Wan Kenobi",
        answer:  2,
    },
    {
        question: "What powered the Death Star's superlaser?",
        choice1: "Kyber Crystals",
        choice2: "The Force",
        choice3: "The Schwartz",
        choice4: "Kryptonite", 
        answer:  1,
    },
    {
        question: "How many suns can you see from Tatooine", 
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "500",
        answer:  2,
        },
    {
        question: "Which order did Palpatine execute to put an end to the Jedi?",
        choice1: "Order Out",
        choice2: "Animal Style", 
        choice3: "Order 1738",
        choice4: "Order 66",
        answer:  4,
        },
   {    question: "What species inhabits the forest-moon of Endor?", 
        choice1: "Wookies",
        choice2: "Jawas",
        choice3: "Ewoks",
        choice4: "Wampas",
        answer:  3,
        },
   {    question: "Who did Anakin betray to save Palpatine?", 
        choice1: "Mace Windu",
        choice2: "Ashoka Tano",
        choice3: "Qui-Gon Jinn",
        choice4: "Yoda",
        answer:  1,
        },
   {    question: "Where did Luke and Obi-Wan meet Han Solo and Chewie?", 
        choice1: "Mos Davos",
        choice2: "Mos Vargas",
        choice3: "Mos Def",
        choice4: "Mos Eisley",
        answer:  4,
        },         
   {    question: "What planet do Wookies come from?", 
        choice1: "Kamino",
        choice2: "Kashyyk",
        choice3: "Mustafar",
        choice4: "Yavin IV",
        answer:  2,
        },
   {    question: "Who shot first?", 
        choice1: "Greedo",
        choice2: "Han Solo",
        choice3: "Lone Star",
        choice4: "Lando",
        answer:  2,
        },
   {    question: "What planet were the clonetroopers made on?", 
        choice1: "Yavin IV",
        choice2: "Endor",
        choice3: "Starkiller Base",
        choice4: "Kamino",
        answer:  4,
        },
   {    question: "How old was Yoda when he died? (whoops! spoilers!", 
        choice1: "20 years old",
        choice2: "77 years old",
        choice3: "900 years old",
        choice4: "300 years old",
        answer:  3,
        },
    {   question: "How many languages can C-3P0 speak?", 
        choice1: "9",
        choice2: "9,000",
        choice3: "3 million",
        choice4: "Over 6 million",
        answer:  4,
        },
    {   question: "Who built C-3P0?", 
        choice1: "Anakin Skywalker",
        choice2: "Han Solo",
        choice3: "Luke Skywalker",
        choice4: "Lando Calrissian",
        answer:  1,
        }, 
    {   question: "Who is Luke and Leia's mother?", 
        choice1: "Maz Kanata",
        choice2: "Padmé Amidala",
        choice3: "Jyn Erso",
        choice4: "Sabine Wren",
        answer:  2,
        },
    {   question: "Who is supreme leader of the First Order?", 
        choice1: "Kylo Ren",
        choice2: "Snoke",
        choice3: "Darth Sidious",
        choice4: "Chancellor Palpatine",
        answer:  2,
        },  
    {   question: "Who was Count Dooku's padawan?", 
        choice1: "Obi-Wan Kenobi",
        choice2: "Syfo Dyas",
        choice3: "Ben Solo",
        choice4: "Qui-Gon Jinn",
        answer:  4,
        },   
    {   question: "What planet acts as base for the Empire in their beginnings?", 
        choice1: "Coruscant",
        choice2: "Mustafar",
        choice3: "Hoth",
        choice4: "Naboo",
        answer:  2,
        },  
    {   question: "What race of beings does Jar-Jar Binks belong to?", 
        choice1: "Gungans",
        choice2: "Mon Calamari",
        choice3: "Togruta",
        choice4: "Jawa",
        answer:  1,
        },
    {   question: "Which Jedi balances both sides of the force?", 
        choice1: "Rey",
        choice2: "Ben Solo",
        choice3: "Luke Skywalker",
        choice4: "Princess Leia",
        answer:  1,
        },
    ]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 20

// function to run quiz 

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        
        return window.location.assign('gameover.html')
    }

    // this is incrementing my questions with the process bar 
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    // calculates current question number with percentage
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    // this is how I will get my questions to cycle at random

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    // removes previous question with new ones
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}
  //iterate choices again
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        // indicate correct or incorrcet by changing element color
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        // apply the score if correct answer chosen
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()


        }, 1000)


    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()