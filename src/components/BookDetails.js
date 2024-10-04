import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookDetails = ({ book, addToLibrary }) => {
    const navigate = useNavigate();

    if (!book) {
        return <p>Book not found.</p>;
    }

    const handleAddToLibrary = () => {
        addToLibrary(book);
        navigate('/my-library');
    };

    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Publication Year:</strong> {book.publication_year}</p>
            <button onClick={handleAddToLibrary}>Add to My Library</button>
        </div>
    );
};

export default BookDetails;
