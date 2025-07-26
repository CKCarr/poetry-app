import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className=" w-full bg-ultra-violet text-ghost-white p-6 border-b-4 border-gunmetal place-items-center">
      <h1 className="text-3xl text-periwinkle mb-2">Welcome to Poetry Shelf</h1>
      <p className="text-ghost-white text-lg text-white mb-4 ">
        Your personal poetic journey begins here.
      </p>
      <div className="mt-4 relative overflow-hidden rounded-md shadow-md  ">
        <Image
          src={"/images/ink-quill.webp"}
          alt="Uploaded Cover"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <p className="text-ghost-white text-white mt-4 text-center">
        Reading poems or writing your own, your own personal Poetry BookShelf.
      </p>
    </div>
  );
}
