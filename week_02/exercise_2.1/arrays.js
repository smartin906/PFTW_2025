// //variable but has multiple slots
// const myArr = ['bob', 'marysue', 'peggy', 'denise'];
// const myOtherArray = new Array();
// // .push adds item to array
// myOtherArray.push('debbie');
// myOtherArray.push('bettie lou');
// // // myArr.pop(); // .pop removes last item
// // myArr.shift(); // removes first item
// // myArr.unshift(); // adds item to the beginning of array

// console.log(myArr);
// console.log(myOtherArray);
// console.log(myOtherArray[0]); // read single item
// console.log(myArr[1]);
// console.log(myArr.indexOf('marysue'));// identifies where in the array the value is located
// const marysueIdx = myArr.indexOf('marysue');
// console.log(marysueIdx); // if not found console will display -1, if found real index number will display
// if (marysueIdx > -1) {
//     console.log(myArr[marysueIdx]);
// }
// myArr.splice(marysueIdx, 0, 'dottie'); //mutations here
// console.log(myArr);
// console.log(myArr.length);
// // math.random() for a random number 0 and 1
// // math.round() rounds it to the nearest whole number
// // myArr.length gets the last index number of array
// const randomNumber = Math.round(Math.random() * (myArr.length - 1));
// console.log(myArr[randomNumber]);

const myFilms = ["Dune", " Apocolypse Now" , " Lock, Stock and Two Smoking Barrels"," The Duelist"];

window.alert("Here's a few of my favorite films; " + myFilms);

var userFilm = window.prompt("What is one of your favorite films?");

myFilms.push(userFilm);

window.alert("here's my films and yours!" + myFilms.toString());