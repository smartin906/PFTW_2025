import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name = 'Steven';
  const missouri = true;

  return (
    <>
      <div>
        <h1>what up, world!!</h1>
        <h2>My name is {name}</h2>
        <p>I live in {missouri ? 'Missouri' : 'someplace else'}</p>        
      </div>
        
    </>
  )
}

export default App
