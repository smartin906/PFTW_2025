import { Routes, Route } from 'react-router-dom'
import { Home } from './views/Home';
import { Song } from './views/Song';
import './App.css'
import musicData from './assets/music-list.json'

function App() {

  return (
    <>
      {/* navigation starts here */}
      
      {/* navigation ends here */}

      {/* routing starts here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<Song data={musicData} />} />
      </Routes>
      {/* routing ends here */}
    </>
  )
}

export default App
