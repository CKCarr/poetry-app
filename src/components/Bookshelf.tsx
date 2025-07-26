"use client";
import React, { useState, useEffect } from "react";
import BookList, { BookType } from "../data/books";
import Book from "../components/Book";
import Shelf from "../components/Shelf";
import BookModal from "./BookModal";

const Bookshelf: React.FC = () => {
  const [booksPerRow, setBooksPerRow] = useState<number>(5); // Default for large screens
  const [selectedBook, setSelectedBook] = useState<BookType | null>(null); // Track selected book

  // disable scrolling when modal is open
  useEffect(() => {
    if (selectedBook) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedBook]);

  // Dynamically update booksPerRow based on screen size
  useEffect(() => {
    const updateBooksPerRow = () => {
      const width = window.innerWidth;
      if (width < 640) setBooksPerRow(3); // Mobile: Show fewer books
      else if (width < 1024) setBooksPerRow(4); // Tablets: More books
      else setBooksPerRow(5); // Desktops: Full bookshelf
    };

    updateBooksPerRow(); // Run initially
    window.addEventListener("resize", updateBooksPerRow); // Listen for resize
    return () => window.removeEventListener("resize", updateBooksPerRow);
  }, []);

  // Automatically split books into rows
  const shelves: BookType[][] = [];
  for (let i = 0; i < BookList.length; i += booksPerRow) {
    shelves.push(BookList.slice(i, i + booksPerRow));
  }

  return (
    <div className="flex flex-col items-center p-8 w-full bg-timberwolf dark:bg-gray-800">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        My Poetry Bookshelf
      </h1>

      {/* Bookshelf Top Edge */}
      <div className="w-full max-w-5xl h-6 bg-gray-700 dark:bg-gray-600 rounded-t-md "></div>

      {/* Bookshelf Main Section */}
      <div className="relative w-full max-w-5xl bg-bone dark:bg-dim-gray shadow-lg  border border-gray-600 p-4">
        <div className="absolute inset-y-0 left-1 w-[10px] bg-gray-700 opacity-50"></div>
        <div className="absolute inset-y-0 right-1 w-[10px] bg-gray-700 opacity-50"></div>

        {/* Bookshelf Shelves */}
        {shelves.map((shelfBooks, shelfIndex) => (
          <Shelf key={shelfIndex}>
            {shelfBooks.map((book, bookIndex) => (
              <Book
                key={bookIndex}
                book={book}
                onClick={() => setSelectedBook(book)}
              />
            ))}
          </Shelf>
        ))}
      </div>

      {/* Bookshelf Base */}
      <div className="w-full max-w-5xl h-6 bg-gray-700 dark:bg-gray-600 rounded-t-md "></div>
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onSave={(book: BookType) => {
            // Implement save functionality here
            console.log("Book saved:", book);
          }}
        />
      )}
    </div>
  );
};

export default Bookshelf;
