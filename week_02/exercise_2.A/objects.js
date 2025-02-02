const myQuestions = [
    { question: 'How many Earths could fit inside the Sun?', answer: 'One million' },
    { question: 'What planet has the tallest mountain in the solar system?', answer: 'Mars' },
    { question: 'How big is the milky way?', answer: 'about 100,000 light years across' },
    { question: 'How many planets are in the galaxy?', answer: 'about 100 billion!' },
    { question: 'Why is mars red?', answer: 'Iron oxide in the soil and rocks!' },
    { question: 'What planet has rings?', answer: 'Saturn!' },

];

const randomIdx = Math.round(Math.random() * myQuestions.length -1);

let userAnswer = window.prompt(myQuestions[randomIdx].question);

window.alert('you answered ' + userAnswer + '. The correct answer was ' + myQuestions[randomIdx].answer);

// let userAnswer = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

// window.alert('You selected ' + myGames[userAnswer -1].title + ', ' + myGames[userAnswer -1].description + '. ' + ' It is a ' + myGames[userAnswer -1].type + ' enjoyed by ' + myGames[userAnswer -1].numberOfPlayers + ' players.');