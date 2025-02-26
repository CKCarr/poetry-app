// components/Shelf.tsx
import React, { ReactNode } from "react";

interface ShelfProps {
  children: ReactNode;
}

const Shelf: React.FC<ShelfProps> = ({ children }) => {
  return (
    <div className="relative flex flex-row justify-center gap-3 mb-4 w-full">
      {/* Render Books */}
      {children}

      {/* Bottom Border as Shelf */}
      <div className="absolute bottom-[-4px] left-0 w-full h-4 bg-gray-700 dark:bg-gray-600 rounded-md"></div>
    </div>
  );
};

export default Shelf;
