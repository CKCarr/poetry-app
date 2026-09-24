"use client";

import { useState } from "react";
import Hero from "@/components/poetryHero";
import Footer from "@/components/Footer";
import BookManager from "@/components/BookManager";
import Navbar from "@/components/Navbar";
import BookList, { BookType } from "@/data/books";

export default function Home() {
  const [books, setBooks] = useState<BookType[]>(BookList);

  const addBook = (newBook: BookType) => {
    setBooks((current) => [...current, newBook]);
  };

  const saveBook = (updatedBook: BookType) => {
    setBooks((current) =>
      current.map((book) =>
        book.id === updatedBook.id ? updatedBook : book
      )
    );
  };

  const deleteBook = (id: number) => {
    setBooks((current) => current.filter((book) => book.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onSave={addBook} />
      <Hero />
      <main className="flex-grow flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BookManager
          books={books}
          onSaveBook={saveBook}
          onDeleteBook={deleteBook}
        />
      </main>
      <Footer />
    </div>
  );
}