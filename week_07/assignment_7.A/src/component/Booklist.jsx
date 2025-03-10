// import Books from "./component/books.jsx"

// export function Booklist ({title, villain, image, objective, outcome}) {
//     return (
//     <div className="book-list">
//         {Books.map((book, index) => (
//             <Card key={index}
//             title={book.title}
//             villain={book.villain}
//             image={book.image}
//             objective={book.objective}
//             outcome={book.outcome} 

//         ))}
//     </div>
//     )
// export default Booklist

import books from "./component/books.jsx"

export function CardList({items}) {
    return (
        <div className="card-list">
            {items.map((item, index) =>
                <Card key={index}
                title={item.title}
                
            )}
        </div>
    )
}