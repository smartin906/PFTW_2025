import Camelid from './components/camelid'

function App() {
  const camelidData = [
    { name: 'llama',
      image: "./img/llama_01.jpg",
      trivia: 'Llamas are social animals and live with others in herds.'
    },
    { name: 'camel',
      image: "./img/camel_01.jpeg",
      trivia: 'Camels have three sets of eyelids and two rows of eyelashes to keep sand out of their eyes.'
    }
  ]
  return (
    <>
    <div>
      <Camelid name={camelidData[0].name} image={camelidData[0].image} trivia={camelidData[0].trivia}/>
      <Camelid name={camelidData[1].name} image={camelidData[1].image} trivia={camelidData[1].trivia}/>
    </div>

    </>
  )
}

export default App
