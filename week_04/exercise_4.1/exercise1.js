// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
//put a h1 element inside of it
//create a new element
const heading = document.createElement('h1');
heading.innerHTML ='Yes, it is true! Llamas do spit but only do this when they are really upset and would like to warn away others. If you see their ears back and head up, back away!';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    // console.log('heading was clicked!');
    document.body.style.backgroundColor = 'cyan';
}