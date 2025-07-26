"use client";
import React from "react";
import Image from "next/image";
import { BookType } from "../data/books";
import useBookForm from "../hooks/useBookForm";

interface BookModalProps {
  book: BookType | null;
  onClose: () => void;
  onSave: (updatedBook: BookType) => void;
  onDelete: (id: number) => void;
}

const BookModal: React.FC<BookModalProps> = ({
  book,
  onClose,
  onSave,
  onDelete,
}) => {
  const {
    editedBook,
    isEditing,
    handleChange,
    handleHexChange,
    handleImageUpload,
    handleSave,
    setIsEditing,
    resetChanges,
  } = useBookForm(book as BookType, onSave);

  if (!book) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 overflow-y-auto scrollbar-hide p-5"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-800 shadow-xl rounded-lg w-[90vw] max-w-3xl p-8 flex flex-col mt-[20vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:text-gray-300"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Edit / Cancel Button */}
        {!isEditing ? (
          <button
            className="absolute top-3 left-2 text-blue-600 hover:text-blue-800 dark:text-blue-400"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        ) : (
          <button
            className="absolute top-2 left-2 text-red-600 hover:text-red-800 dark:text-red-400"
            onClick={resetChanges}
          >
            Cancel
          </button>
        )}

        {/* Delete Button */}
        <button
          className="absolute bottom-2 right-2 text-red-600 hover:text-red-800 dark:text-red-400"
          onClick={() => onDelete(book.id)}
        >
          🗑 Delete
        </button>

        {/* Open Book Effect */}
        <div className="relative w-full flex flex-col sm:flex-row bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
          {/* 📖 Left Page (Title, Author, Image) */}
          <div className="relative w-full sm:w-1/2 p-6 bg-bone dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="title"
                  value={editedBook.title}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder="Book Title"
                />
                <input
                  type="text"
                  name="author"
                  value={editedBook.author || ""}
                  onChange={handleChange}
                  className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
                  placeholder="Author Name"
                />

                {/* Image Upload */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 mb-4 border rounded dark:bg-gray-700 dark:text-white"
                />

                {/* Color Picker */}
                <input
                  type="color"
                  name="color"
                  value={editedBook.color}
                  onChange={handleHexChange}
                  className="w-full h-10 p-1 mb-4 border rounded dark:bg-gray-700 dark:text-white"
                />
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-gunmetal dark:text-white mb-4">
                  {book.title}
                </h2>
                <p className="text-lg text-delft-blue dark:text-gray-300 mb-4">
                  by {book.author || "Unknown Author"}
                </p>
                {book.image ? (
                  <Image
                    src={book.image}
                    alt={`${book.title} cover`}
                    width={200}
                    height={300}
                    className="w-full h-auto rounded-md shadow-md"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-300 dark:bg-gray-600 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400">
                    No Image
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Save Button */}
        {isEditing && (
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default BookModal;
