import './App.css';
// import Card from './components/Card.jsx';
import CardList from './components/CardList.jsx';


function App() {
  const cardData = [
    { title: 'test test 1', villain: 'Content for card 1' },
    { title: 'rest 2', villain: 'dr. no!' },
    { title: 'best 3', villain: 'Content for card 3' },
  ];

  return (
    <div>
      <CardList items={cardData} />
    </div>
  );
}

export default App;