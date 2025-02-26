"use client";
import React, { useState } from "react";
import books, { BookType } from "../data/books";
import Book from "../components/Book";
import Shelf from "../components/Shelf";
import BookModal from "./BookModal";

const Bookshelf: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

  const booksPerRow = Math.ceil(books.length / 7); // Ensure rows have an even number of books
  const shelves = Array.from({ length: 6 }, (_, index) => {
    const start = index * booksPerRow;
    const end = start + booksPerRow;
    return books.slice(start, end);
  });

  return (
    <div className="flex flex-col items-center p-8 w-full bg-silver dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        USERNAME Poetry Bookshelf
      </h1>

      {/* Bookshelf Top Edge */}
      <div className="w-full max-w-5xl h-6 bg-gray-700 dark:bg-gray-600 rounded-t-md mb-1"></div>

      {/* Bookshelf Main Section */}
      <div className="relative w-full max-w-5xl bg-gray-300 dark:bg-gray-700 shadow-lg rounded-md border border-gray-600 p-4">
        <div className="absolute inset-y-0 left-1 w-[10px] bg-gray-700 opacity-50"></div>
        <div className="absolute inset-y-0 right-1 w-[10px] bg-gray-700 opacity-50"></div>

        {/* Map Shelves */}
        {shelves.map((shelfBooks, shelfIndex) => (
          <Shelf key={shelfIndex}>
            {shelfBooks.map((book, bookIndex) => (
              <Book
                key={bookIndex}
                book={book}
                onClick={() => setSelectedBook(book)} // open book modal on click
              />
            ))}
          </Shelf>
        ))}
      </div>

      {/* Bookshelf Base */}
      <div className="w-full max-w-5xl h-6 bg-gray-700 dark:bg-gray-600 rounded-t-md mt-1"></div>
      {/* Book Modal (Appears when book is selected) */}
      <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
    </div>
  );
};

export default Bookshelf;
