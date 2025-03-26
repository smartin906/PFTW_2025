import { useState } from 'react'


// function App() {
// const myNewObject = {
//   name: 'John',
//   age: "30"
// }
// //object destructuring
// const {name, age} = myNewObject
// console.log("here's my", name)
// console.log("here's my", age)

// //spread operator ...
// const myOtherObject = {
//   ...myNewObject,
//   location: 'Lagos'.toUpperCase()
// }
// console.log("here's my", myOtherObject)

// //overwriting a key in an object
// const myLastObject = {
//   ...myOtherObject,
//   name: 'Jane',
//   location: 'Abuja'.toUpperCase()
// }
// console.log("here's my", myLastObject)

// //merge a bunch of objects
// const myMergedObject = {
//   ...myNewObject,
//   ...myOtherObject,
//   ...myLastObject
// }
// console.log("here's my", myMergedObject)

// //array notation
// const myNameVar = 'age';
// console.log("here's my name:", myNewObject[myNameVar]);

//use state
const [firstName, setFirstName] = useState(" ");
const [lastName, setLastName] = useState(" ");
const [passwrd, setPasswrd] = useState(" ");
const [pets, setPets] = useState(true);

  return (
    <>
      <div>
        <h1>Forms, dude.</h1>
        <form>
          <fieldset>
            <label htmlFor="lastName</label>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default App
