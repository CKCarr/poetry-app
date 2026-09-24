"use client";
import React, { useState } from "react";
import PoetryForm from "./PoetryForm";
import type { BookType } from "../data/books";

interface NavbarProps {
  onSave: (newBook: BookType) => void;
}

export default function Navbar({ onSave }: NavbarProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <nav className="w-full bg-ultra-violet text-ghost-white p-6 border-b-4 border-gunmetal flex justify-between items-center">
      {/* Logo / Title */}
      <h1 className="text-2xl text-periwinkle">📖 Poetry Shelf</h1>

      {/* Navbar Buttons */}
      <div className="flex gap-4">
        <button className="bg-space-cadet text-ghost-white px-4 py-2 rounded hover:bg-delft-blue">
          {/* TODO : READ poem button for search keyword & Author  */}
          Read Poems
        </button>

        {/* Open Poetry Form */}
        <button
          className="bg-gunmetal text-ghost-white px-4 py-2 rounded hover:bg-delft-blue"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Write a Poem"}
        </button>
      </div>

      {/* Poetry Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-start p-4 justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg w-[90vw] max-w-2xl p-6">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <PoetryForm closeForm={() => setShowForm(false)} onSave={onSave} />
          </div>
        </div>
      )}
    </nav>
  );
}
