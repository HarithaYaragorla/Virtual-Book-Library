import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ books, onSelectBook }) => {
    return (
        <div>
            <h2>Book List</h2>
            <div className="book-list">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                        <Link to={`/book/${book.id}`} onClick={() => onSelectBook(book)}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
