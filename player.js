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
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         endGame();
//     }
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
    const fetchUrl = `${apiUrl}?categories=${category}&limit=6`;
    
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

// function nextQuestion() {
//     if (currentQuestionIndex < questions.length) {
//         showQuestion();
//     } else {
//         endGame();
//     }
// }
