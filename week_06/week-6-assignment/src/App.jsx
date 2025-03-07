import './App.css'

function App() {
  const llamaFacts = [
    'Llamas are very social animals and live with others as a herd.',
    'The wool produced by a llama is very soft and lanolin-free.',
    'Llamas are intelligent and can learn simple tasks after a few repetitions.',
    'When using a pack, llamas can carry about 25% to 30% of their body weight for several miles.',
    'Llamas are herbivores and have a complex, three-compartment stomach that allows them to efficiently digest roughage.',
    'Llamas can be trained as a guard animal for livestock.',
  ]

  const llamaFact = false;

  return (
    <>
      <div>
        <h1>Stuff I know about llamas</h1>
        <h2>and you should too.</h2>        
        <ul>
          <li>{llamaFacts[0]}</li>
          <li>{llamaFacts[1]}</li>
          <li>{llamaFacts[2]}</li>
          <li>{llamaFacts[3]}</li>
          <li>{llamaFacts[4]}</li>
          <li>{llamaFact ? 'Llamas can be trained as a guard animal for livestock.' : 'Llamas are not good guard animals.'}</li>
          </ul>
      </div>
    </>
  )
}

export default App
