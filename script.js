// document.addEventListener('DOMContentLoaded', () => {
//     const startGameButton = document.getElementById('startGame');
//     const selectCategoryButton = document.getElementById('selectCategory');
//     const submitPlayer1AnswerButton = document.getElementById('submitPlayer1Answer');
//     const submitPlayer2AnswerButton = document.getElementById('submitPlayer2Answer');
//     const restartGameButton = document.getElementById('restartGame');

//     const setupSection = document.getElementById('setup');
//     const categorySelectionSection = document.getElementById('categorySelection');
//     const questionSection = document.getElementById('questionSection');
//     const endGameSection = document.getElementById('endGame');

//     const player1Input = document.getElementById('player1');
//     const player2Input = document.getElementById('player2');
//     const categorySelect = document.getElementById('category');
//     const questionDisplay = document.getElementById('question');
//     const player1AnswerSection = document.getElementById('player1AnswerSection');
//     const player2AnswerSection = document.getElementById('player2AnswerSection');

//     const player1ScoreDisplay = document.getElementById('score1');
//     const player2ScoreDisplay = document.getElementById('score2');
//     const winnerDisplay = document.getElementById('winner');

//     let player1Name, player2Name;
//     let player1Score = 0;
//     let player2Score = 0;
//     let currentPlayer = 1;
//     let currentQuestions = [];
//     let currentQuestionIndex = 0;

//     const apiUrl = 'https://the-trivia-api.com/api/questions';

//     startGameButton.addEventListener('click', startGame);
//     selectCategoryButton.addEventListener('click', selectCategory);
//     submitPlayer1AnswerButton.addEventListener('click', () => submitAnswer(1));
//     submitPlayer2AnswerButton.addEventListener('click', () => submitAnswer(2));
//     restartGameButton.addEventListener('click', () => location.reload());

//     function startGame() {
//         player1Name = player1Input.value;
//         player2Name = player2Input.value;

//         if (player1Name && player2Name) {
//             setupSection.classList.add('hidden');
//             showCategorySelection();
//         } else {
//             alert('Please enter names for both players.');
//         }
//     }

//     function showCategorySelection() {
//         categorySelectionSection.classList.remove('hidden');
//         fetchCategories();
//     }

//     function fetchCategories() {
//         fetch(apiUrl + '?limit=10')
//             .then(response => response.json())
//             .then(data => {
//                 const categories = [...new Set(data.map(question => question.category))];
//                 categorySelect.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join('');
//             });
//     }

//     function selectCategory() {
//         const selectedCategory = categorySelect.value;
//         categorySelectionSection.classList.add('hidden');
//         fetchQuestions(selectedCategory);
//     }

//     function fetchQuestions(category) {
//         fetch(`${apiUrl}?categories=${encodeURIComponent(category)}&limit=6`)
//             .then(response => response.json())
//             .then(data => {
//                 currentQuestions = data;
//                 currentQuestionIndex = 0;
//                 questionSection.classList.remove('hidden');
//                 setNextQuestion();
//             });
//     }

//     function setNextQuestion() {
//         resetState();
//         if (currentQuestionIndex < currentQuestions.length) {
//             showQuestion(currentQuestions[currentQuestionIndex]);
//         } else {
//             endGame();
//         }
//     }

//     function showQuestion(question) {
//         questionDisplay.innerText = question.question;

//         if (currentPlayer === 1) {
//             player1AnswerSection.classList.remove('hidden');
//         } else {
//             player2AnswerSection.classList.remove('hidden');
//         }
//     }

//     function submitAnswer(player) {
//         const playerAnswer = player === 1 ? document.getElementById('player1Answer').value : document.getElementById('player2Answer').value;
//         const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

//         if (playerAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//             if (player === 1) {
//                 player1Score += 10;
//                 player1ScoreDisplay.innerText = player1Score;
//             } else {
//                 player2Score += 10;
//                 player2ScoreDisplay.innerText = player2Score;
//             }
//         }

//         currentQuestionIndex++;
//         currentPlayer = currentPlayer === 1 ? 2 : 1;

//         if (player === 1) {
//             player1AnswerSection.classList.add('hidden');
//         } else {
//             player2AnswerSection.classList.add('hidden');
//         }

//         setNextQuestion();
//     }

//     function resetState() {
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     }

//     function endGame() {
//         questionSection.classList.add('hidden');
//         endGameSection.classList.remove('hidden');

//         let winner = 'It\'s a tie!';
//         if (player1Score > player2Score) {
//             winner = `${player1Name} wins!`;
//         } else if (player2Score > player1Score) {
//             winner = `${player2Name} wins!`;
//         }

//         winnerDisplay.innerText = winner;
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const apiUrl = 'https://the-trivia-api.com/api/questions';

//     const player1NameInput = document.getElementById('player1-name');
//     const player2NameInput = document.getElementById('player2-name');
//     const startGameBtn = document.getElementById('start-game-btn');
//     const categorySelect = document.getElementById('category');
//     const selectCategoryBtn = document.getElementById('select-category-btn');
//     const questionContainer = document.getElementById('question-container');
//     const questionElement = document.getElementById('question');
//     const answersElement = document.getElementById('answers');
//     const nextQuestionBtn = document.getElementById('next-question-btn');
//     const scoreboard = document.getElementById('scoreboard');
//     const player1ScoreElement = document.getElementById('player1-score');
//     const player2ScoreElement = document.getElementById('player2-score');
//     const postQuestionOptions = document.getElementById('post-question-options');
//     const selectAnotherCategoryBtn = document.getElementById('select-another-category-btn');
//     const endGameBtn = document.getElementById('end-game-btn');
//     const gameEnd = document.getElementById('game-end');
//     const finalScores = document.getElementById('final-scores');
//     const restartGameBtn = document.getElementById('restart-game-btn');

//     let player1Name, player2Name;
//     let currentPlayer = 1;
//     let player1Score = 0;
//     let player2Score = 0;
//     let categories = [];
//     let currentCategory;
//     let currentQuestions = [];
//     let questionIndex = 0;

//     startGameBtn.addEventListener('click', startGame);

//     function startGame() {
//         player1Name = player1NameInput.value.trim();
//         player2Name = player2NameInput.value.trim();

//         if (player1Name && player2Name) {
//             setupGame();
//         } else {
//             alert('Please enter names for both players.');
//         }
//     }

//     function setupGame() {
//         document.getElementById('player-setup').classList.add('hidden');
//         document.getElementById('category-selection').classList.remove('hidden');
//         fetchCategories();
//     }

//     function fetchCategories() {
//         fetch(apiUrl + '?limit=10')
//             .then(response => response.json())
//             .then(data => {
//                 categories = [...new Set(data.map(question => question.category))];
//                 renderCategories();
//             });
//     }

//     function renderCategories() {
//         categorySelect.innerHTML = categories.map(category => `<option value="${category}">${category}</option>`).join('');
//         selectCategoryBtn.addEventListener('click', selectCategory);
//     }

//     function selectCategory() {
//         currentCategory = categorySelect.value;
//         document.getElementById('category-selection').classList.add('hidden');
//         fetchQuestions();
//     }

//     function fetchQuestions() {
//         fetch(`${apiUrl}?categories=${encodeURIComponent(currentCategory)}&limit=6`)
//             .then(response => response.json())
//             .then(data => {
//                 currentQuestions = data;
//                 questionIndex = 0;
//                 displayNextQuestion();
//             });
//     }

//     function displayNextQuestion() {
//         resetQuestionState();
//         if (questionIndex < currentQuestions.length) {
//             const question = currentQuestions[questionIndex];
//             questionElement.innerText = question.question;
//             question.answers.forEach(answer => {
//                 const button = document.createElement('button');
//                 button.innerText = answer;
//                 button.classList.add('answer-btn');
//                 button.addEventListener('click', () => selectAnswer(answer));
//                 answersElement.appendChild(button);
//             });
//         } else {
//             endCategory();
//         }
//     }

//     function resetQuestionState() {
//         questionElement.innerText = '';
//         answersElement.innerHTML = '';
//         nextQuestionBtn.classList.add('hidden');
//     }

//     function selectAnswer(selectedAnswer) {
//         const correctAnswer = currentQuestions[questionIndex].correctAnswer;
//         const isCorrect = selectedAnswer === correctAnswer;

//         if (currentPlayer === 1) {
//             player1Score += isCorrect ? getQuestionPoints(currentQuestions[questionIndex]) : 0;
//             player1ScoreElement.innerText = `Player 1: ${player1Score}`;
//         } else {
//             player2Score += isCorrect ? getQuestionPoints(currentQuestions[questionIndex]) : 0;
//             player2ScoreElement.innerText = `Player 2: ${player2Score}`;
//         }

//         questionIndex++;
//         currentPlayer = currentPlayer === 1 ? 2 : 1;

//         if (questionIndex < currentQuestions.length) {
//             displayNextQuestion();
//         } else {
//             postQuestionOptions.classList.remove('hidden');
//         }
//     }

//     function getQuestionPoints(question) {
//         switch (question.difficulty) {
//             case 'easy':
//                 return 10;
//             case 'medium':
//                 return 15;
//             case 'hard':
//                 return 20;
//             default:
//                 return 0;
//         }
//     }

//     function endCategory() {
//         postQuestionOptions.classList.remove('hidden');
//         questionContainer.classList.add('hidden');
//     }

//     selectAnotherCategoryBtn.addEventListener('click', () => {
//         postQuestionOptions.classList.add('hidden');
//         document.getElementById('category-selection').classList.remove('hidden');
//     });

//     endGameBtn.addEventListener('click', endGame);

//     function endGame() {
//         gameEnd.classList.remove('hidden');
//         postQuestionOptions.classList.add('hidden');
//         scoreboard.classList.add('hidden');

//         const winner = player1Score > player2Score ? player1Name : (player2Score > player1Score ? player2Name : 'It


// const apiUrl = 'https://opentdb.com/api.php?amount=6&type=boolean';
// let player1Name, player2Name;
// let currentPlayer = 1;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value;
//     player2Name = document.getElementById('player2Name').value;
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}&category=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             questions = data.results;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correct_answer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     currentQuestionIndex++;
//     showQuestion();
//     updateScores();
// }

// function getPoints(difficulty) {
//     switch (difficulty) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';
//     const winner = scores.player1 > scores.player2 ? player1Name : player2Name;
//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentPlayer = 1;
//     currentQuestionIndex = 0;
// }



// const apiUrl = 'https://opentdb.com/api.php?amount=6&type=boolean';
// let player1Name, player2Name;
// let currentPlayer = 1;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value;
//     player2Name = document.getElementById('player2Name').value;
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}&category=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             questions = data.results;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correct_answer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     currentQuestionIndex++;
//     updateScores();
//     showQuestion(); // Update this to show the next question after updating scores
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';
//     const winner = scores.player1 > scores.player2 ? player1Name : player2Name;
//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentPlayer = 1;
//     currentQuestionIndex = 0;
// }



// const apiUrl = 'https://opentdb.com/api.php?amount=6&type=boolean';
// let player1Name, player2Name;
// let currentPlayer = 1;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value;
//     player2Name = document.getElementById('player2Name').value;
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}&category=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             questions = data.results;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correct_answer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     currentQuestionIndex++;
//     updateScores();
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentPlayer = 1;
//     currentQuestionIndex = 0;
// }



// const apiUrl = 'https://opentdb.com/api.php?amount=6&type=boolean';
// let player1Name, player2Name;
// let currentPlayer = 1;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value;
//     player2Name = document.getElementById('player2Name').value;
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}&category=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             questions = data.results;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correct_answer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores(); // Update scores after each question
//     currentQuestionIndex++;
//     showQuestion(); // Show next question or end game
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentPlayer = 1;
//     currentQuestionIndex = 0;
// }



// / const apiUrl='https://the-trivia-api.com/v2/questions'
// const apiUrl = 'https://opentdb.com/api.php?amount=6&type=boolean';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}&category=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             questions = data.results;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correct_answer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores(); // Update scores after each question
//     currentQuestionIndex++;
//     showQuestion(); // Show next question or end game
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
// }


// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             questions = data;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
// }




// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}?category=${category}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data); // Check API response structure in console
//             questions = data; // Assuming the API response directly provides an array of questions
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
// }



// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}?category=${category}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data); // Check API response structure in console
//             questions = data.questions; // Assuming the API response directly provides an array of questions
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
// }



// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     fetch(`${apiUrl}?category=${category}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data); // Check API response structure in console
//             questions = data.questions; // Assuming the API response directly provides an array of questions
//             if (questions.length === 0) {
//                 throw new Error('No questions available for selected category');
//             }
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
// }


// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     const fetchUrl = `${apiUrl}?category=${category}`;
    
//     fetch(fetchUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data); // Check API response structure in console
//             questions = data.questions; // Assuming the API response directly provides an array of questions
//             if (questions.length === 0) {
//                 throw new Error('No questions available for selected category');
//             }
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
// }






// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     const fetchUrl = `${apiUrl}?category=${category}`;
    
//     fetch(fetchUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('API Response:', data); // Check API response structure in console
//             if (!data || !data.questions || data.questions.length === 0) {
//                 throw new Error('No questions available for selected category');
//             }
//             questions = data.questions;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     if (isPlayer1Correct) {
//         scores.player1 += getPoints(question.difficulty);
//     }
//     if (isPlayer2Correct) {
//         scores.player2 += getPoints(question.difficulty);
//     }

//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
// }


// let currentCategory = '';
//         let currentDifficulty = '';
//         let currentQuestions = [];
//         let currentQuestionIndex = 0;
//         let player1 = '';
//         let player2 = '';
//         let player1Score = 0;
//         let player2Score = 0;

//         function startGame() {
//             player1 = document.getElementById('player1').value;
//             player2 = document.getElementById('player2').value;
//             updatePlaceholders();
//             document.getElementById('player-input').style.display = 'none';
//             fetchCategories();
//         }

//         function updatePlaceholders() {
//             document.getElementById('player1-answer').placeholder = ${player1}'s Answer;
//             document.getElementById('player2-answer').placeholder = ${player2}'s Answer;
//         }

//         function fetchCategories() {
//             const apiUrl = https://the-trivia-api.com/v2/categories;
//             fetch(apiUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     const categoriesContainer = document.getElementById('categories-container');
//                     categoriesContainer.innerHTML = '';
//                     for (let category in data) {
//                         const button = document.createElement('button');
//                         button.innerText = capitalizeFirstLetter(category);
//                         button.onclick = () => selectCategory(category);
//                         categoriesContainer.appendChild(button);
//                     }
//                     document.getElementById('category-selection').style.display = 'block';
//                 })
//                 .catch(error => {
//                     console.error('Error fetching categories:', error);
//                     alert('Failed to fetch categories. Please try again later.');
//                 });
//         }

//         function selectCategory(category) {
//             currentCategory = category;
//             document.getElementById('category-selection').style.display = 'none';
//             document.getElementById('difficulty-selection').style.display = 'block';
//         }

//         function selectDifficulty(difficulty) {
//             currentDifficulty = difficulty;
//             document.getElementById('difficulty-selection').style.display = 'none';
//             document.getElementById('question-area').style.display = 'block';
//             document.getElementById('category-title').innerText = ${capitalizeFirstLetter(currentDifficulty)} ${capitalizeFirstLetter(currentCategory)} Questions;
//             fetchQuestions();
//         }

//         function fetchQuestions() {
//             const apiUrl = https://the-trivia-api.com/v2/questions?categories=${currentCategory}&limit=6&difficulty=${currentDifficulty};
//             console.log(Fetching questions from: ${apiUrl});
//             fetch(apiUrl)
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log('Fetched questions:', data); // Debugging: Log the fetched questions
//                     currentQuestions = data;
//                     currentQuestionIndex = 0;
//                     showQuestion();
//                 })
//                 .catch(error => {
//                     console.error('Error fetching questions:', error);
//                     alert('Failed to fetch questions. Please try again later.');
//                 });
//         }

//         function showQuestion() {
//             if (currentQuestionIndex < currentQuestions.length) {
//                 const currentQuestion = currentQuestions[currentQuestionIndex].question;
//                 document.getElementById('question').innerText = currentQuestion.text;
//                 document.getElementById('player1-answer').value = '';
//                 document.getElementById('player2-answer').value = '';
//                 document.getElementById('feedback').innerText = '';
//             } else {
//                 document.getElementById('question').innerText = "Game Over!";
//                 document.getElementById('feedback').innerText = '';
//             }
//         }

//         function submitAnswers() {
//             const player1Answer = document.getElementById('player1-answer').value;
//             const player2Answer = document.getElementById('player2-answer').value;
//             const correctAnswer = currentQuestions[currentQuestionIndex].correctAnswer;

//             let feedback = '';
//             if (player1Answer.toLowerCase() === correctAnswer.toLowerCase()) {
//                 feedback += `${player1} got it right! `;
//                 player1Score++;
//             } else {
//                 feedback += `${player1} got it wrong. `;
//             }

//             if (player2Answer.toLowerCase() === correctAnswer.toLowerCase()) {
//                 feedback += ${player2} got it right!;
//                 player2Score++;
//             } else {
//                 feedback += ${player2} got it wrong.;
//             }

//             document.getElementById('feedback').innerText = feedback;
//             updateScore();
//         }

//         function nextQuestion() {
//             currentQuestionIndex++;
//             showQuestion();
//         }

//         function updateScore() {
//             document.getElementById('score').innerText = ${player1}: ${player1Score} - ${player2}: ${player2Score};
//         }

//         function capitalizeFirstLetter(string) {
//             return string.charAt(0).toUpperCase() + string.slice(1);
//         }



// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     const fetchUrl = `${apiUrl}?categories=${category}&limit=10`;
    
//     fetch(fetchUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('API Response:', data); // Check API response structure in console
//             if (!data || data.length === 0) {
//                 throw new Error('No questions available for selected category');
//             }
//             questions = data;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question.text;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     let feedback = '';
//     if (isPlayer1Correct) {
//         feedback += `${player1Name} got it right! `;
//         scores.player1 += getPoints(question.difficulty);
//     } else {
//         feedback += `${player1Name} got it wrong. `;
//     }

//     if (isPlayer2Correct) {
//         feedback += `${player2Name} got it right!`;
//         scores.player2 += getPoints(question.difficulty);
//     } else {
//         feedback += `${player2Name} got it wrong.`;
//     }

//     document.getElementById('feedback').innerText = feedback;
//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
//     questions = [];
//     document.getElementById('feedback').innerText = '';
// }

// function nextQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         endGame();
//     }
// }



// const apiUrl = 'https://the-trivia-api.com/v2/questions';
// let player1Name, player2Name;
// let currentQuestionIndex = 0;
// let questions = [];
// let scores = { player1: 0, player2: 0 };

// function startGame() {
//     player1Name = document.getElementById('player1Name').value.trim();
//     player2Name = document.getElementById('player2Name').value.trim();
    
//     if (!player1Name || !player2Name) {
//         alert('Please enter names for both players.');
//         return;
//     }
    
//     document.getElementById('playerSetup').style.display = 'none';
//     document.getElementById('categorySelection').style.display = 'block';
// }

// function fetchQuestions() {
//     const category = document.getElementById('categoryList').value;
//     const fetchUrl = `${apiUrl}?categories=${category}&limit=10`;
    
//     fetch(fetchUrl)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('API Response:', data); // Check API response structure in console
//             if (!data || data.length === 0) {
//                 throw new Error('No questions available for selected category');
//             }
//             questions = data;
//             document.getElementById('categorySelection').style.display = 'none';
//             document.getElementById('questionSection').style.display = 'block';
//             showQuestion();
//         })
//         .catch(error => {
//             console.error('Error fetching questions:', error);
//             alert('Error fetching questions. Please try again later.');
//         });
// }

// function showQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         const question = questions[currentQuestionIndex];
//         document.getElementById('questionText').innerText = question.question.text;
//         document.getElementById('player1Answer').value = '';
//         document.getElementById('player2Answer').value = '';
//         document.getElementById('feedback').innerText = '';
//     } else {
//         endGame();
//     }
// }

// function checkAnswers() {
//     const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
//     const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
//     const question = questions[currentQuestionIndex];

//     if (!player1Answer || !player2Answer) {
//         alert('Please provide answers for both players.');
//         return;
//     }

//     const correctAnswer = question.correctAnswer.toLowerCase();
//     const isPlayer1Correct = player1Answer === correctAnswer;
//     const isPlayer2Correct = player2Answer === correctAnswer;

//     let feedback = '';
//     if (isPlayer1Correct) {
//         feedback += `${player1Name} got it right! `;
//         scores.player1 += getPoints(question.difficulty);
//     } else {
//         feedback += `${player1Name} got it wrong. `;
//     }

//     if (isPlayer2Correct) {
//         feedback += `${player2Name} got it right!`;
//         scores.player2 += getPoints(question.difficulty);
//     } else {
//         feedback += `${player2Name} got it wrong.`;
//     }

//     document.getElementById('feedback').innerText = feedback;
//     updateScores();
//     currentQuestionIndex++;
//     showQuestion();
// }

// function getPoints(difficulty) {
//     switch (difficulty.toLowerCase()) {
//         case 'easy': return 10;
//         case 'medium': return 15;
//         case 'hard': return 20;
//         default: return 0;
//     }
// }

// function updateScores() {
//     document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
//     document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
// }

// function endGame() {
//     document.getElementById('questionSection').style.display = 'none';
//     document.getElementById('gameOver').style.display = 'block';

//     let winner;
//     if (scores.player1 > scores.player2) {
//         winner = player1Name;
//     } else if (scores.player2 > scores.player1) {
//         winner = player2Name;
//     } else {
//         winner = 'It\'s a tie!';
//     }

//     const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
//     document.getElementById('resultMessage').innerText = message;
// }

// function restartGame() {
//     document.getElementById('gameOver').style.display = 'none';
//     document.getElementById('playerSetup').style.display = 'block';
//     scores = { player1: 0, player2: 0 };
//     currentQuestionIndex = 0;
//     updateScores();
//     questions = [];
//     document.getElementById('feedback').innerText = '';
// }

// function nextQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         endGame();
//     }
// }



const apiUrl = 'https://the-trivia-api.com/v2/questions';
let player1Name, player2Name;
let currentQuestionIndex = 0;
let questions = [];
let scores = { player1: 0, player2: 0 };

function startGame() {
    player1Name = document.getElementById('player1Name').value.trim();
    player2Name = document.getElementById('player2Name').value.trim();
    
    if (!player1Name || !player2Name) {
        alert('Please enter names for both players.');
        return;
    }
    
    document.getElementById('playerSetup').style.display = 'none';
    document.getElementById('categorySelection').style.display = 'block';
}

function fetchQuestions() {
    const category = document.getElementById('categoryList').value;
    const fetchUrl = `${apiUrl}?categories=${category}&limit=10`;
    
    fetch(fetchUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('API Response:', data); // Check API response structure in console
            if (!data || data.length === 0) {
                throw new Error('No questions available for selected category');
            }
            questions = data;
            document.getElementById('categorySelection').style.display = 'none';
            document.getElementById('questionSection').style.display = 'block';
            showQuestion();
        })
        .catch(error => {
            console.error('Error fetching questions:', error);
            alert('Error fetching questions. Please try again later.');
        });
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('questionText').innerText = question.question.text;
        document.getElementById('player1Answer').value = '';
        document.getElementById('player2Answer').value = '';
        document.getElementById('feedback').innerText = '';
    } else {
        endGame();
    }
}

function checkAnswers() {
    const player1Answer = document.getElementById('player1Answer').value.trim().toLowerCase();
    const player2Answer = document.getElementById('player2Answer').value.trim().toLowerCase();
    const question = questions[currentQuestionIndex];

    if (!player1Answer || !player2Answer) {
        alert('Please provide answers for both players.');
        return;
    }

    const correctAnswer = question.correctAnswer.toLowerCase();
    const isPlayer1Correct = player1Answer === correctAnswer;
    const isPlayer2Correct = player2Answer === correctAnswer;

    let feedback = '';
    if (isPlayer1Correct) {
        feedback += `${player1Name} got it right! `;
        scores.player1 += getPoints(question.difficulty);
    } else {
        feedback += `${player1Name} got it wrong. `;
    }

    if (isPlayer2Correct) {
        feedback += `${player2Name} got it right!`;
        scores.player2 += getPoints(question.difficulty);
    } else {
        feedback += `${player2Name} got it wrong.`;
    }

    document.getElementById('feedback').innerText = feedback;
    updateScores();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function getPoints(difficulty) {
    switch (difficulty.toLowerCase()) {
        case 'easy': return 10;
        case 'medium': return 15;
        case 'hard': return 20;
        default: return 0;
    }
}

function updateScores() {
    document.getElementById('player1Score').innerText = `Player 1 Score: ${scores.player1}`;
    document.getElementById('player2Score').innerText = `Player 2 Score: ${scores.player2}`;
}

function endGame() {
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('gameOver').style.display = 'block';

    let winner;
    if (scores.player1 > scores.player2) {
        winner = player1Name;
    } else if (scores.player2 > scores.player1) {
        winner = player2Name;
    } else {
        winner = 'It\'s a tie!';
    }

    const message = `${winner} wins with ${Math.max(scores.player1, scores.player2)} points!`;
    document.getElementById('resultMessage').innerText = message;
}

function restartGame() {
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('playerSetup').style.display = 'block';
    scores = { player1: 0, player2: 0 };
    currentQuestionIndex = 0;
    updateScores();
    questions = [];
    document.getElementById('feedback').innerText = '';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}



