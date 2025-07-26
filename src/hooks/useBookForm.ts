import { useState } from "react";
import { BookType } from "../data/books";

const useBookForm = (
  book: BookType,
  onSave: (updatedBook: BookType) => void
) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBook, setEditedBook] = useState<BookType>({ ...book });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | textarea>) => {
    setEditedBook((prevBook) => ({
      ...prevBook,
      [e.target.name]: e.target.value,
    }));
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedBook((prevBook) => ({
      ...prevBook,
      color: e.target.value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedBook((prevBook) => ({
          ...prevBook,
          image: reader.result as string, // Convert image to base64
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(editedBook);
    setIsEditing(false);
  };

  const resetChanges = () => {
    setEditedBook({ ...book });
    setIsEditing(false);
  };

  return {
    editedBook,
    isEditing,
    handleChange,
    handleHexChange,
    handleImageUpload,
    handleSave,
    setIsEditing,
    resetChanges,
  };
};

export default useBookForm;
