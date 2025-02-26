import React from "react";

export default function Hero() {
  return (
    <div className=" w-full bg-ultra-violet text-ghost-white p-6 border-b-4 border-gunmetal place-items-center">
      <h1 className="text-2xl text-periwinkle mb-2">Welcome to My Poetry</h1>
      <p className="text-delft-blue text-white mb-4 ">
        A poetic journey begins here.
      </p>
      <button className="bg-space-cadet text-ghost-white px-8 py-2 rounded hover:bg-delft-blue">
        Read More
      </button>
    </div>
  );
}
