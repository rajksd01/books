import React from "react";
import BookList from "./BookList";
import BookCreate from "./BookCreate";
import { useState } from "react";

function App() {
  // creating state here because app.js is the lowest parent to all the element that requires this piece of state.
  const [books, setBooks] = useState([]);
  // a delete function to delete books passing down to booklist and then to bookshow as we will display the delete option on book show component.
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  // a create function to create books
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 1000), title },
    ];
    setBooks(updatedBooks);
  };
  // function to update the book from Bookedit component
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookCreate onBookCreate={createBook} />
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </div>
  );
}

export default App;
