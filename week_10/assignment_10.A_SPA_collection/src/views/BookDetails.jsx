import { useParams } from 'react-router-dom'; // Import useParams to get the book ID from the URL
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import clsx from 'clsx';
import "./BookDetails.css"; // Import CSS for styling

export function BookDetails({data}) {
    const { id } = useParams(); // Get the parameters from the URL
    console.log("params", id); // Log the parameters to the console
    const selectedBook = data.find((book) => book.id === id); // Find the book with the matching ID
    console.log("selectedBook", selectedBook); // Log the selected book to the console
    return (
        <>
        <div className='bookdetails'>
        <h1 className='bookdetails_h1'>{selectedBook.title}</h1>

            <img src={selectedBook.image} alt={selectedBook.title} />   
        <div className='bookdetails_text'>
            <p><strong>Villain:</strong> {selectedBook.villain}</p>
            <p><strong>Objective:</strong> {selectedBook.objective}</p>
            <p><strong>Outcome:</strong> {selectedBook.outcome}</p>
        </div>
        </div>
        </>
    );
}
BookDetails.PropTypes = {
    data: PropTypes.array
};
export default BookDetails;