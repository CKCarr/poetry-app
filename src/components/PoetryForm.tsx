"use client";
import React, { useState } from "react";
import { BookType } from "../data/books";

interface PoetryFormProps {
  closeForm: () => void;
  onSave: (newBook: BookType) => void;
}

const PoetryForm: React.FC<PoetryFormProps> = ({ closeForm, onSave }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("CKCarr");
  const [color, setColor] = useState("#8d2133"); // Default color
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true); // ✅ Public by default
  const [image, setImage] = useState<string | null>(null); // Store image

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Convert image to Base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBook: BookType = {
      id: Date.now(), // Unique ID
      title,
      author,
      color,
      content,
      image: image || "/images/ink-quill.webp", // Default image if none uploaded
      isPublic,
    };

    onSave(newBook); // Save new book to state in BookManager
    closeForm(); // Close modal after submission
  };

  return (
    <div className=" p-4 bg-ghost-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gunmetal dark:text-white mb-4">
        📝 Write Your Poem
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Title Input */}
        <label className="text-delft-blue dark:text-gray-300">
          Poem Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter poem title"
          className="p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />

        {/* Poetry Content (Textarea) */}
        <label className="text-delft-blue dark:text-gray-300">Your Poem:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your poem here..."
          className="p-2 border rounded-md h-40 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />

        {/* ✅ Color Picker */}
        <label className="text-delft-blue dark:text-gray-300">
          Choose Book Color:
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-16 h-10 cursor-pointer border rounded-md"
        />

        {/* ✅ Image Upload */}
        <label className="text-delft-blue dark:text-gray-300">
          Upload Book Cover:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />

        {/* Display Image Preview */}
        {image && (
          <img
            src={image}
            alt="Uploaded Cover"
            className="w-40 h-auto mt-2 rounded-md shadow-md"
          />
        )}

        {/* ✅ Public/Private Toggle */}
        <label className="flex items-center gap-2 text-delft-blue dark:text-gray-300">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            className="w-5 h-5"
          />
          Make Public
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 bg-delft-blue text-white rounded-md hover:bg-space-cadet transition"
        >
          Submit Poem
        </button>
      </form>
    </div>
  );
};

export default PoetryForm;
