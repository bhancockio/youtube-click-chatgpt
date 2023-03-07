import React from "react";

function Hero() {
  return (
    <div className="m-5 my-12 flex  w-full flex-col items-center">
      <div>Welcome to YouTube Click ChatGPT</div>
      <div className="my-8 flex w-full flex-row">
        <textarea
          className="w-full rounded-lg border-2 border-[#ff0000] p-2"
          placeholder="Enter your video description here..."
        />
        <div className="flex w-full">
          <div className="mx-auto flex w-4/5 flex-col">
            <p>Instructions...</p>
            <button>Generate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
