import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home.jsx';
import BookDetails from './views/BookDetails.jsx';
import BookData from './assets/BookData.json'; // Import BookData


function App() {
    

return (
  <>
  <nav>
    <ul>
      {/* <li>
        <Link to="/">Home</Link>
      </li> */}
      {/* <li>
        <Link to="/bookDetails">Book Details</Link>
      </li> */}
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":id" element={<BookDetails data={BookData} />} />
  </Routes>
    
    
    
  </>
);
}
export default App;