import { useState } from 'react'
import './App.css'
import UsComponent from './UsComponent.jsx'

function App() {
const [headline, setHeadline] = useState('Merica states');
const [usStates, setUsStates] = useState([
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii']);
function deleteState(stateName) {
  const updatedArray = usStates.filter((state) => {
    return state !== stateName
  });
  setUsStates(updatedArray);
}
function focusState(stateName) {
  setHeadline(`You are now focused on ${stateName}`);
}

  return (
    <>
      <div>
       <h1>{headline}</h1>
       {usStates.map((myState) => {
        return <UsComponent
          key={myState}
          deleteFn={deleteState}
          focusFn={focusState}
          stateName={myState} />
       })}
      </div>
    </>
  )
}

export default App
