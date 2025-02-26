import React from "react";
import Image from "next/image";
import { BookType } from "../data/books";

interface BookModalProps {
  book: BookType | null;
  onClose: () => void;
}

const BookModal: React.FC<BookModalProps> = ({ book, onClose }) => {
  if (!book) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto scrollbar-hide p-4">
      <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg w-[90vw] max-w-3xl p-8 flex">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-300"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Open Book Effect */}
        <div className="w-full  flex flex-col sm:flex-row bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
          {/* 📖 Left Page (Title, Author, Image) */}
          <div className="w-full sm:w-1/2 p-6 bg-bone dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600">
            <h2 className="text-3xl font-bold text-gunmetal dark:text-white mb-4">
              {book.title}
            </h2>
            <p className="text-lg text-delft-blue dark:text-gray-300 mb-4">
              by {book.author || "Unknown Author"}
            </p>

            {/* Optional Image (Poetry Book Cover) */}
            {book.image ? (
              <Image
                src={book.image}
                alt={`${book.title} cover`}
                width={200} // ✅ Set width
                height={300} // ✅ Set height
                className="w-full h-auto rounded-md shadow-md"
              />
            ) : (
              <div className="w-full h-40 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                No Image
              </div>
            )}
          </div>

          {/* 📖 Right Page (Poem Content) */}
          <div className="w-full sm:w-1/2 p-6 bg-ghost-white dark:bg-gray-900">
            <p className="whitespace-pre-line text-sm text-gunmetal dark:text-gray-300 leading-relaxed">
              {book.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
