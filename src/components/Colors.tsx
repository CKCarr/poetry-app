import React from "react";

const colors = [
  { name: "Gunmetal", hex: "#30343F" },
  { name: "Ghost White", hex: "#FAFAFF" },
  { name: "Periwinkle", hex: "#E4D9FF" },
  { name: "Delft Blue", hex: "#273469" },
  { name: "Space Cadet", hex: "#1E2749" },
  { name: "Wenge", hex: "#705D56" },
  { name: "Cool-gray", hex: "#9097C0" },
  { name: "Powder-blue", hex: "#A7BBEC" },
  { name: "Anti-Flash white", hex: "#EEEEEE" },
  { name: "Bone", hex: "#ECE2D0" },
  { name: "Ultra Violet", hex: "#6C698D" },
  { name: "Timberwolf", hex: "#D4D2D5" },
  { name: "Silver", hex: "#BFAFA6" },
  { name: "Beaver", hex: "#AA968A" },
  { name: "Dim gray", hex: "#6E6A6F" },
];

export default function ColorPallette() {
  return (
    <div className="w-full flex flex-wrap justify-center gap-4 p-6 bg-gray-100 dark:bg-gray-900">
      {colors.map((color) => (
        <div key={color.hex} className="flex flex-col items-center">
          <div
            className="w-24 h-24 rounded shadow-md"
            style={{ backgroundColor: color.hex }}
          />
          <p className="mt-2 text-sm text-gray-800 dark:text-gray-300">
            {color.name}
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {color.hex}
          </p>
        </div>
      ))}
    </div>
  );
}
