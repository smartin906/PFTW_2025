import { useState } from 'react';
import './App.css';
import Card from './components/Card.jsx';


function App() {   
    const [headline, setHeadline] = useState('James Bond Books'); 
    const [bondBooks, setBondBooks] = useState([
  {
    title: "Casino Royale",
    villain: "Le Chiffre",
    objective: "Pay off his embarrassing debts to his SMERSH masters by winning the money at Casino Royale's baccarat table.",
    outcome: "Bond beats Le Chiffre at baccarat.",
    image: "./img/CasinoRoyaleCover.jpg"
  },
  {
    title: "Live and Let Die",
    villain: "Mr. Big (Buonaparte Ignace Gallia)",
    objective: "Smuggle and sell ancient gold coins to finance SMERSH operations.",
    outcome: "Bond kills Mr Big.",
    image: "./img/Live_and_Let_Die_first_edition_novel_cover.jpg"
  },
  {
    title: "Moonraker",
    villain: "Sir Hugo Drax (Graf Hugo von der Drache)",
    objective: "Destroy London with a nuclear missile, the eponymous Moonraker.",
    outcome: "Before the Moonraker is launched, Bond and Gala escape. Gala gives Bond the proper coordinates to reprogram the gyros and send the Moonraker into the sea.",
    image: "./img/MoonRakerFirst.jpg"
  },
  {
    title: "Diamonds Are Forever",
    villain: ["Jack Spang", ",", " ", "Seraffimo Spang"],
    objective: "Smuggle a large cache of diamonds worth millions of dollars from Africa to America to fund organisation.",
    outcome: "Smuggling operation is dismantled when all operatives are assassinated.",
    image: "./img/DiamondsAreForeverFirst.jpg"
  },
  {
    title: "From Russia with Love",
    villain: ["Rosa Klebb", ",", " ", "Donovan Grant"],
    objective: "Kill Bond in a humiliating sex scandal, kill MI6 cryptanalysts with a boobytrapped cipher machine.",
    outcome: "Bond kills SMERSH assassin Grant and foils the booby trap plot, but is nearly killed by Klebb with a poisoned shoe blade.",
    image: "./img/From_Russia_With_Love-Ian_Fleming-First_edition.jpg"
  },
  {
    title: "Dr. No",
    villain: "Dr. Julius No",
    objective: "Disrupt U.S.-guided missile tests.",
    outcome: "Dr. No is killed and the project is dismantled.",
    image: "./img/DrNoFirst.jpg"
  },
  {
    title: "Goldfinger",
    villain: "Auric Goldfinger",
    objective: "Steal the U.S. gold supply from Fort Knox to finance SMERSH.",
    outcome: "U.S. authorities are alerted by Bond.",
    image: "./img/Goldfinger-Ian_Fleming.jpg"
  },
]);
function deleteBook(bookTitle) {
  const updatedArray = bondBooks.filter((book) => {
    return book.title !== bookTitle
  });
  setBondBooks(updatedArray);
}

function focusBook(bookTitle) {
  setHeadline(`Ah, ${bookTitle}, a most excellent choice`);
}

function duplicateBook(bookTitle) {
  const book = bondBooks.find((book) => {
    return book.title === bookTitle;
  });
  if (book) {
    const updatedArray = [...bondBooks, { ...book, title: `${book.title}` }];
    setBondBooks(updatedArray);
  }
}

return (
  <>
    <h1>{headline}</h1>
    <div className="card-list">
      {bondBooks.map((item, index) => (
        <div key={index}>
          <Card
            title={item.title}
            image={item.image}
            villain={item.villain}
            objective={item.objective}
            outcome={item.outcome}
            deleteFn={deleteBook}
            focusFn={focusBook}
            duplicateFn={duplicateBook}
          />
        </div>
      ))}
    </div>
  </>
);
}
export default App;