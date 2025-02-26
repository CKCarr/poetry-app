import React from "react";
import { BookType } from "@/data/books";

interface BookProps {
  book: BookType;
  onClick: () => void;
}
export default function Book({ book, onClick }: BookProps) {
  const { title, color, author } = book;
  return (
    <div
      className="relative flex flex-col items-center justify-end text-center text-xs font-semibold text-white shadow-md border border-gray-800 border-r-rounded-md m-1"
      style={{
        backgroundColor: color,
        width: `clamp(4rem, 12vw, 6rem)`, // Responsive book width
        height: `clamp(8rem, 24vh, 16rem)`, // Responsive book height
        borderTopLeftRadius: "2px",
        borderBottomLeftRadius: "2px",
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "12px",
      }}
      onClick={onClick}
    >
      {/* Left & Right Inner Border Lines */}
      <div className="absolute inset-y-0 left-1 w-[2px] bg-silver opacity-50"></div>
      <div className="absolute inset-y-0 right-1 w-[2px] bg-white opacity-50"></div>

      <span className="p-3 mb-1">{title}</span>
      <span className="p-3 mb-1">{author}</span>
    </div>
  );
}
