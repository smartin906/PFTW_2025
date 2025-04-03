import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home';
import { Alpaca } from './views/Alpaca';
import { Llamas } from './views/Llamas';

function App() {

  return (
    <>
      {/* Navigation Starts Here> */}
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Alpaca'>Alpaca</Link></li>
        <li><Link to='/Llamas'>Llama</Link></li>
      </ul>
      {/* Navigation Ends Here */}

      {/* Routes Starts Here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alpaca" element={<Alpaca />} />
        <Route path="/llamas" element={<Llamas />} />
      </Routes>
    </>
  )
}

export default App
