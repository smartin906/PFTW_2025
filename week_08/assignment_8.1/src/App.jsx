import './App.css';
import { useState } from 'react';

function App() {
  const [selectedCamelid, setSelectedCamelid] = useState(null);

  function showCamelid(type) {
    const camelid = {
      alpaca: <img src="./img/alpaca.jpeg" alt="Alpaca" />,
      llama: <img src="./img/llama.jpeg" alt="Llama" />
    };
    setSelectedCamelid(camelid[type]);
  }

  return (
    <>
      <div>
        <h1>Choose Your Camelid</h1>
        <button onClick={() => showCamelid('alpaca')}>Alpaca</button>
        <button onClick={() => showCamelid('llama')}>Llama</button>
        <div>
          {selectedCamelid}
        </div>
      </div>
    </>
  );
}

export default App;