import React from "react";
import { BookType } from "../data/books";

interface BookProps {
  book: BookType;
  onClick: () => void;
}

const Book: React.FC<BookProps> = ({ book, onClick }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-end text-center text-sm font-semibold text-white shadow-md border-4 border-dim-gray cursor-pointer transition-transform hover:scale-105"
      style={{
        backgroundColor: book.color,
        width: `clamp(5rem, 16vw, 5rem)`, // Responsive width
        height: `clamp(8rem, 24vh, 14rem)`, // Responsive height
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
        // clipPath: "polygon(0% 8%, 100% 8%, 100% 100%, 0% 100%)",
      }}
      onClick={onClick} // Open book modal on click
    >
      <div className="absolute inset-y-0 left-1 w-[2px] bg-anti-flash-white opacity-50"></div>
      <span className="p-5 mb-12 ">{book.title}</span>{" "}
      {/* Hide title on mobile */}
      <div className="absolute inset-y-0 right-1 w-[2px] bg-anti-flash-white opacity-50"></div>
    </div>
  );
};

export default Book;
