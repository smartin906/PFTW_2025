// window.alert("hello")
// // let for variables that will change 
// let myName = "Steven"; // defined
// window.alert(myName)

// const lastName = "Martin"; // const for vars that don't change
// window.alert(lastName);
// // third and oldest way -- don't use unless absolutely sure
// var oldSchoolVariable = "Howdy";

// // commands have at last two parts -- the command itself
// // and the parentheses that accept any sort of information
// console.log(myName + " " + lastName) // concatenation
// console.log('')

// // boolean - true or false;
// let amIFunny = false;
// // console.log(amIFunny);
// // console.log(amIFunny + lastName);

// // conditions
// //three parts to "if" conditions -- keyword "if" + parentheses with condition + curly brackets with what to do
// if(myNumber === 16) {
//     console.log("it is 16");
// }
// //three equals signs equal strict equal - same value, same data type
// //two equal signs is loose equal - calculate to same value - do not use!
// if(myName > 10) {
//     console.log("bigger than 10!")
// }   else {
//     console.log("less than 10")
// }

// const favColor = window.prompt("what's your favorite color?");
// if()favColor !== "black") {
//     window.alert("too bad, so sad");
// } else {
//     window.alert("haha! lame");
// }

let circleX = 0;
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    fill("red");
    circle(circleX, 20, 20);
    if(circleX < 400) {
        circleX = circleX + 10
    } else {
        circleX = 0
    }
    circleX = circleX + 5;
  }
  