import React from 'react';

const MyLibrary = ({ myLibrary, removeFromLibrary }) => (
    <div className="my-library">
        <h2>My Library</h2>
        {myLibrary.length === 0 ? (
            <p>Your library is empty. Start adding books!</p>
        ) : (
            myLibrary.map(book => (
                <div key={book.id} className="my-library-item">
                    <h3>{book.title}</h3>
                    <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
                </div>
            ))
        )}
    </div>
);

export default MyLibrary;
