import { useState } from 'react';
import { nanoid } from 'nanoid';
import Card from '../components/Card'; // Card is used in the JSX below
import BookData from '../assets/BookData.json'; // Import BookData
import NewBookForm from '../components/form'; // Import NewBookForm
const Home = () => {
    const [headline, setHeadline] = useState(BookData[0]?.title || "Welcome!"); // Initialize headline with the first book title or default
    const [bondBooks, setBondBooks] = useState(BookData); // Initialize bondBooks with the books from BookData.json

    function onSubmit(data) { // This function is called when the form is submitted
  console.log("Form submitted", data);
  // data is an object with the form values
  const newBook = {
    ...data,
    id: nanoid(),
  };
  setBondBooks([...bondBooks, newBook]);
}
function deleteBook(id) {
  console.log("delete", id);
  const updatedArray = bondBooks.filter((bondBooks) => {
    return bondBooks.id !== id;
  })
  setBondBooks(updatedArray);
}

function focusBook(title) {
  console.log("Focusing", title);
  const updateHeadline = bondBooks.find((bondBooks) => {
    return bondBooks.title === title;
  });
  setHeadline(`Ah, ${updateHeadline.title} is a great book!`);
}

// This function duplicates a book entry by finding the book with the given ID,
// creating a copy of it with a new unique ID, and adding it to the bondBooks array.
function duplicateBook(id) {
  console.log("Duplicating", id);
  const matchingBook = bondBooks.find((bondBooks) => {
    return bondBooks.id === id;
  });
  setBondBooks([...bondBooks, { ...matchingBook, id: nanoid() }]);
}
return (
    <>
        <div className="card-list">
            {bondBooks.map((bondBooks) => {
            return (
                <Card key={bondBooks.id}
                deleteFn={deleteBook}
                focusFn={focusBook}
                duplicateFn={duplicateBook}
                {...bondBooks} />
            )
            })}
            <div>
                <NewBookForm
                  addBookFn={onSubmit} />
            </div>
        </div>
    </>
    );
};
export default Home;
{/* // This code defines a functional component called Home that manages a list of books. */}