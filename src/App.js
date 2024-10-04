import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookDetails from './components/BookDetails';
import MyLibrary from './components/MyLibrary';
import bookData from './books.json';
import './App.css';

function App() {
  const [myLibrary, setMyLibrary] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const addToLibrary = (book) => {
    if (!myLibrary.find(item => item.id === book.id)) {
      setMyLibrary([...myLibrary, book]);
    }
  };

  const removeFromLibrary = (bookId) => {
    setMyLibrary(myLibrary.filter(book => book.id !== bookId));
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home books={bookData.books} onSelectBook={setSelectedBook} />} />
        <Route path="/book/:id" element={<BookDetails book={selectedBook} addToLibrary={addToLibrary} />} />
        <Route path="/my-library" element={<MyLibrary myLibrary={myLibrary} removeFromLibrary={removeFromLibrary} />} />
      </Routes>
    </div>
  );
}

export default App;
