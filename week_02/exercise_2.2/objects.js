// // objects how to create
// const stevesCar = {
//     color: "black",
//     pistons: 4, 
// };
// console.log(stevesCar);

// //mutate -- add a property
// stevesCar.fuelInjection = true;
// console.log(stevesCar);
// stevesCar[ "4-wheel-drive" ] = true; 
// console.log(stevesCar);

// //display single item with dot
// console.log( "Steves car is", stevesCar.color);
// console.log( "is it 4 wheel drive?", stevesCar["4-wheel-drive"]);

// //using toString (works with arrays too)
// console.log(stevesCar.toString());
// const myCars = ["rav", "pilot", "Juke"];
// console.log(myCars.toString());

// //mutate -- removing a property
// delete stevesCar.pistons;
// console.log("steves car without pistons", stevesCar);

// //merging two objects together
// const basicJuke = {
//     wheels: 4,
//     color: 'red',
//     doors: 4,
//     make: 'nissan'
// };
// const newJuke = Object.assign({}, basicJuke, stevesCar);
// console.log("new juke", newJuke);

// //object in arrays
// const cars = [
//     { make: 'nissan', model: 'rogue', color: 'orange' },
//     { make: 'nissan', model: 'altima', color: 'blue'},
//     { make: 'dodge', model: 'viper', color: 'blue'},
//     { make: 'VW', model: 'beetle', color: 'pink'},
//     { make: 'chevy', model: 'blazer', color: 'black'},
//     { make: 'dodge', model: 'charger', color: 'green'},
// ];
// // console.log('index 1 of car color', cars[0].make);
// console.log('make is', cars[0].make);
// const randomIdx = Math.round(Math.random() * cars.length -1);
// console.log('my car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);

const myGames = [
    { title: 'chutes and ladders', type: 'board game', numberOfPlayers: 'two to four', rating: 'beginner', description: 'a childs game' },
    { title: 'battleship', type: 'tabletop game', numberOfPlayers: 'two', rating: 'novice', description: 'a naval strategy game' },
    { title: 'uno', type: 'card game', numberOfPlayers: 'two to eight', rating: 'advanced', description: 'a strategic card game that races to zero' },
];

let userAnswer = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game");

// window.alert(myGames[userAnswer]);

// const randomIdx = Math.round(Math.random() * myGames.length -1);
window.alert('You selected ' + myGames[userAnswer -1].title + ', ' + myGames[userAnswer -1].description + '. ' + ' It is a ' + myGames[userAnswer -1].type + ' enjoyed by ' + myGames[userAnswer -1].numberOfPlayers + ' players.');