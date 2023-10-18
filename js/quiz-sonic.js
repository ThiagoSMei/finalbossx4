function darkMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
  var element = document.getElementById("main-sec");
  element.classList.add("dark-mode");
  element.classList.remove("light-mode");
  var element = document.getElementById("second-sec");
  element.classList.add("dark-mode");
  element.classList.remove("light-mode");
}

function lightMode() {
  var element = document.body;
  var content = document.getElementById("DarkModetext");
  element.className = "light-mode";
  var element = document.getElementById("main-sec");
  element.classList.add("light-mode");
  element.classList.remove("dark-mode");
  var element = document.getElementById("second-sec");
  element.classList.add("light-mode");
  element.classList.remove("dark-mode");
  
}

/* Questions */

const $startGameButton = document.querySelector(".starter")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

const $musicOne = document.querySelector(".audio1")
const $musicTwo = document.querySelector(".audio2")
const $musicThree = document.querySelector(".audio3")
const $musicFour = document.querySelector(".audio4")
const $musicFive = document.querySelector(".audio5")
const $musicSix = document.querySelector(".audio6")
const $musicSeven = document.querySelector(".audio7")
const $musicEight = document.querySelector(".audio8")
const $musicNine = document.querySelector(".audio9")
const $musicTen = document.querySelector(".audio10")
const $musicEleven = document.querySelector(".audio11")
const $musicTwelven = document.querySelector(".audio12")
const $musicThirteen = document.querySelector(".audio13")
const $musicFourteen = document.querySelector(".audio14")
const $musicFifteen = document.querySelector(".audio15")
const $musicSixteen = document.querySelector(".audio16")
const $musicSeventeen = document.querySelector(".audio17")
const $musicEighteen = document.querySelector(".audio18")
const $musicNineteen = document.querySelector(".audio19")
const $musicTwenty = document.querySelector(".audio20")

$startGameButton.addEventListener("click", startQuiz)
$nextQuestionButton.addEventListener("click", displayNextQuestion)
$nextQuestionButton.addEventListener("click", displayNextSong)

var musica = 0

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
  $startGameButton.classList.add("hide")
  $musicOne.classList.remove("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()

  if(questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("btn-quiz", "answer")
    newAnswer.textContent = answer.text 
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAnswer)

    newAnswer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  $nextQuestionButton.classList.add("hide")
  
}

function musicCounter() {
  musica = musica + 1
}

function displayNextSong() {
  
  if (musica === 0) {
    $musicOne.classList.add("hide")
    $musicTwo.classList.remove("hide")
  }
  if (musica === 1) {
    $musicTwo.classList.add("hide")
    $musicThree.classList.remove("hide")
  }
  if (musica === 2) {
    $musicThree.classList.add("hide")
    $musicFour.classList.remove("hide")
  }
  if (musica === 3) {
    $musicFour.classList.add("hide")
    $musicFive.classList.remove("hide")
  }
  if (musica === 4) {
    $musicFive.classList.add("hide")
    $musicSix.classList.remove("hide")
  }
  if (musica === 5) {
    $musicSix.classList.add("hide")
    $musicSeven.classList.remove("hide")
  }
  if (musica === 6) {
    $musicSeven.classList.add("hide")
    $musicEight.classList.remove("hide")
  }
  if (musica === 7) {
    $musicEight.classList.add("hide")
    $musicNine.classList.remove("hide")
  }
  if (musica === 8) {
    $musicNine.classList.add("hide")
    $musicTen.classList.remove("hide")
  }
  if (musica === 9) {
    $musicTen.classList.add("hide")
    $musicEleven.classList.remove("hide")
  }
  if (musica === 10) {
    $musicEleven.classList.add("hide")
    $musicTwelven.classList.remove("hide")
  }
  if (musica === 11) {
    $musicTwelven.classList.add("hide")
    $musicThirteen.classList.remove("hide")
  }
  if (musica === 12) {
    $musicThirteen.classList.add("hide")
    $musicFourteen.classList.remove("hide")
  }
  if (musica === 13) {
    $musicFourteen.classList.add("hide")
    $musicFifteen.classList.remove("hide")
  }
  if (musica === 14) {
    $musicFifteen.classList.add("hide")
    $musicSixteen.classList.remove("hide")
  }
  if (musica === 15) {
    $musicSixteen.classList.add("hide")
    $musicSeventeen.classList.remove("hide")
  }
  if (musica === 16) {
    $musicSeventeen.classList.add("hide")
    $musicEighteen.classList.remove("hide")
  }
  if (musica === 17) {
    $musicEighteen.classList.add("hide")
    $musicNineteen.classList.remove("hide")
  }
  if (musica === 18) {
    $musicNineteen.classList.add("hide")
    $musicTwenty.classList.remove("hide")
  }
  
  
  musicCounter()

}

function selectAnswer(event) {
  const answerClicked = event.target

  if(answerClicked.dataset.correct) {
    score++
  }

  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }

    button.disabled = true
  })

  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++

}

function finishGame() {
  const totalQuestion = questions.length


    $questionsContainer.innerHTML = 
    `
      <p>
        Você acertou ${score} de ${questions.length} questões.
      </p>
      <button class="btn-quiz" onclick=window.location.reload()>Jogar Novamente</button>
    `
  }

const questions = [
  {
    question: "Eazy: Qual musica, de Sonic Heroes, é essa?",
    answers: [
      { text: "Gran Metropolis", correct: false},
      { text: "Rail Canyon", correct: false},
      { text: "Bullet Station", correct: true},
      { text: "Final Fortress", correct: false},
    ]
  },
  {
    question: "Eazy: Qual musica de Action Stage, de Sonic Adventure 2, é essa?",
    answers: [
      { text: "Crazy Gadget", correct: true},
      { text: "Final Chase", correct: false},
      { text: "Cannon's Core (Sonic)", correct: false},
      { text: "Final Rush", correct: false},
    ]
  },
  {
    question: "Eazy: Qual musica de Action Stage, de Sonic 3 & Knuckles, é essa?",
    answers: [
      { text: "Sandopolis Zone", correct: false},
      { text: "Mushroom Hill Zone", correct: false},
      { text: "Angel Island Zone (Act 2)", correct: false},
      { text: "Marble Garden Zone", correct: true},
    ]
  },
  {
    question: "Eazy: Qual musica de Action Stage, de Sonic Unleashed, é essa?",
    answers: [
      { text: "Jungle Joyride (Day)", correct: false},
      { text: "Cool Edge (Night)", correct: false},
      { text: "Savannah Citadel (Day)", correct: false},
      { text: "Dragon Road (Day)", correct: true},
    ]
  },
  {
    question: "Eazy: Qual musica de Action Stage, de Sonic and the Black Knight, é essa?",
    answers: [
      { text: "Knight's Passage", correct: true},
      { text: "Great Megalith", correct: false},
      { text: "Camelot Castle", correct: false},
      { text: "Faraway Avalon", correct: false},
    ]
  },

  {
    question: "Eazy: Qual musica de Action Stage, de Sonic Colors, é essa?",
    answers: [
      { text: "Terminal Velocity (Act 1)", correct: false},
      { text: "Tropical Resort (Act 2)", correct: true},
      { text: "Planet Wisp (Act 3)", correct: false},
      { text: "Asteroid Coaster (Act 3)", correct: false},
    ]
  },
  {
    question: "Eazy: Qual musica de Action Stage, de Sonic Mania, é essa?",
    answers: [
      { text: "Flying Battery Zone (Act 2)", correct: true},
      { text: "Oil Ocean Zone (Act 1)", correct: false},
      { text: "Press Garden Zone (Act 2)", correct: false},
      { text: "Lava Reef Zone (Act 1)", correct: false},
    ]
  },
  {
    question: "Medium: Qual musica de Boss Battle, de Sonic Heroes, é essa?",
    answers: [
      { text: "Robot Carnival", correct: false},
      { text: "Egg Emperror", correct: true},
      { text: "Egg Albatross", correct: false},
      { text: "Egg Halk", correct: false},
    ]
  },
  {
    question: "Medium: Essa musica tema do Tails, pertence a qual jogo?",
    answers: [
      { text: "Sonic Rivals", correct: false},
      { text: "Sonic 2", correct: false},
      { text: "Sonic Adventure", correct: true},
      { text: "Sonic Adventure 2", correct: false},
    ]
  },
  {
    question: "Medium: Essa musica de Special Stage, pertence a qual jogo?",
    answers: [
      { text: "Sonic 1", correct: false},
      { text: "Sonic 2", correct: false},
      { text: "Sonic 3 & Knuckles", correct: true},
      { text: "Sonic CD", correct: false},
    ]
  },
  {
    question: "Medium: Essa musica de fase de Cassino, pertence a qual jogo?",
    answers: [
      { text: "Cassino Night - Sonic 2", correct: true},
      { text: "Bingo Highway - Sonic Heroes", correct: false},
      { text: "Carnival Night - Sonic 3 & Knuckles", correct: false},
      { text: "Cassinopolis I - Sonic Adventure", correct: false},
    ]
  },
  {
    question: "Medium: Essa musica de menu, pertence a qual jogo?",
    answers: [
      { text: "Story Select - Sonic Adventure 2", correct: true},
      { text: "Game Select - Sonic Mega Collection", correct: false},
      { text: "Character Select - Sonic Adventure", correct: false},
      { text: "Menu Theme - Sonic The Hedgehog 2006", correct: false},
    ]
  },
  {
    question: "Medium: Essa musica abertura, pertence a qual jogo?",
    answers: [
      { text: "Knight Of the Wind - Sonic and the Black Knight", correct: false},
      { text: "You Can Do Anything - Sonic CD (JP)", correct: true},
      { text: "Sonic Boom - Sonic CD (EUA)", correct: false},
      { text: "Open Your Heart - Sonic Adventure", correct: false},
    ]
  },
  {
    question: "Medium: Qual é, essa musica tematica de Sonic Riders?",
    answers: [
      { text: "Super Sonic Speed - Sonic Riders", correct: false},
      { text: "Un-Gravitify - Zero Gravity", correct: false},
      { text: "Catch me if you Can - Zero Gravity", correct: false},
      { text: "Free - Free Riders", correct: true},
    ]
  },
  {
    question: "Medium: Qual é, essa musica de Batalha Final?",
    answers: [
      { text: "Big Arms - Sonic 3 & Knuckles", correct: true},
      { text: "I'm Here - Sonic Frontiers", correct: false},
      { text: "Death Egg - Sonic 2", correct: false},
      { text: "Solaris Phase II - Sonic The Hedgehog 2006", correct: false},
    ]
  },
  {
    question: "Hard: Que musica é essa? (1/5)",
    answers: [
      { text: "CyberSpace 1-4", correct: false},
      { text: "Chaos Island 2rd Mvt", correct: false},
      { text: "Kronos Island 5th Mvt", correct: true},
      { text: "CyberSpace 3-2", correct: false},
    ]
  },
  {
    question: "Hard: Que musica é essa? (2/5)",
    answers: [
      { text: "Dark Hollow - Sonic and the Black Knight", correct: false},
      { text: "Radical Train - Sonic the Hedgehog 2006", correct: false},
      { text: "Sweet Mountain Act 3 - Sonic Colors", correct: false},
      { text: "Prison Hall - Sonic Forces", correct: true},
    ]
  },
  {
    question: "Hard: Que musica é essa? (3/5)",
    answers: [
      { text: "Death Egg Zone - Sonic 3 & Knuckles", correct: false},
      { text: "Scrap Brain Zone - Sonic 1", correct: true},
      { text: "Mystic Cave (2 Player) - Sonic 2", correct: false},
      { text: "Final Zone - Sonic 1", correct: false},
    ]
  },
  {
    question: "Hard: Que musica é essa? (4/5)",
    answers: [
      { text: "Vs. Ultimate Emerl - Sonic Battle", correct: false},
      { text: "Gun Mobile Battle - Sonic Adventure 2", correct: true},
      { text: "Sonic vs. E-102 - Sonic Adventure", correct: false},
      { text: "Vs. Gawain - Sonic and the Black Knight", correct: false},
    ]
  },
  {
    question: "Hard: Que musica é essa? (5/5)",
    answers: [
      { text: "Rotatatron/Refreshinator Battle - Sonic Colors", correct: false},
      { text: "Network Terminal I - Sonic Forces", correct: false},
      { text: "CyberSpace 4-7 - Sonic Frontiers", correct: false},
      { text: "Metal Harbor - Sonic Adventure 2", correct: true},
    ]
  },
  
]

