import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './views/home.jsx'
function App() {
  

  return (
    <div>
      {/* nav goes here */}
      <NavLink to="./">Home</NavLink> 
      <NavLink to="/about">About</NavLink>

      {/* routes go here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes here */}
      </Routes>

    </div>
  )
}

export default App
