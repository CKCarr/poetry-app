"use client";
import React, { useState, useEffect } from "react";
import BookList, { BookType } from "../data/books";
import Bookshelf from "./Bookshelf";
import BookModal from "./BookModal";
import PoetryForm from "./PoetryForm";

const BookManager: React.FC = () => {
  const [books, setBooks] = useState<BookType[]>(BookList);
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);
  const [isAdding, setIsAdding] = useState(false); // Manage Add Book Form

  // Disable scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedBook || isAdding ? "hidden" : "auto";
  }, [selectedBook, isAdding]);

  // Save (edit) a book
  const handleSaveBook = (updatedBook: BookType) => {
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
    setSelectedBook(null);
  };

  // Add a new book
  const handleAddBook = (newBook: BookType) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
    setIsAdding(false);
  };

  // Delete a book
  const deleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
    setSelectedBook(null);
  };

  return (
    <div className="flex flex-col items-center p-8 w-full bg-timberwolf dark:bg-gray-800">
      <button
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={() => setIsAdding(true)}
      >
        + Add New Book
      </button>

      <Bookshelf books={books} onSelectBook={setSelectedBook} />

      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onSave={handleSaveBook}
          onDelete={deleteBook}
        />
      )}

      {isAdding && (
        <PoetryForm
          closeForm={() => setIsAdding(false)}
          onSave={handleAddBook}
        />
      )}
    </div>
  );
};

export default BookManager;
