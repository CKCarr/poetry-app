"use client";

import { useState } from "react";
import { BookType } from "../data/books";
import Bookshelf from "./Bookshelf";
import BookModal from "./BookModal";

interface BookManagerProps {
  books: BookType[];
  onSaveBook: (book: BookType) => void;
  onDeleteBook: (id: number) => void;
}

export default function BookManager({
  books,
  onSaveBook,
  onDeleteBook,
}: BookManagerProps) {
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);
  const selectedBook =
    books.find((book) => book.id === selectedBookId) ?? null;

  return (
    <>
      <Bookshelf
        books={books}
        onSelectBook={(book) => setSelectedBookId(book.id)}
      />

      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBookId(null)}
          onSave={(updatedBook) => {
            onSaveBook(updatedBook);
            setSelectedBookId(null);
          }}
          onDelete={(id) => {
            onDeleteBook(id);
            setSelectedBookId(null);
          }}
        />
      )}
    </>
  );
}