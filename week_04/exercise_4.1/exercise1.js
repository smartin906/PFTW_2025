// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
//put a h1 element inside of it
//create a new element
const heading = document.createElement('h1');
heading.innerHTML ='hello class! It is a snowy day!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    // console.log('heading was clicked!');
    document.body.style.backgroundColor = 'cyan';
}