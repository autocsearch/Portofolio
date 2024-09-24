"use client";

import { useState } from "react";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const dropDown = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="navbar bg-base-100 gap-5 hidden lg:flex justify-center ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex justify-center items-center gap-5 ">
          {/* -----  */}
          <div>
            <a href="#">Home</a>
          </div>
          {/* -----  */}
          <div>
            <a href="#">About me</a>
          </div>
          {/* -----  */}
          <div>
            <a href="#">Contact me</a>
          </div>
          {/* -----  */}
        </div>
      </div>

      {/* Phone mode */}
      <div className="navbar bg-base-100 gap-5 lg:hidden">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none ">
          <div className="relative inline-block text-left">
            {/* Button to trigger dropdown */}
            <button className="btn btn-square btn-ghost" onClick={dropDown}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>

            {/* Conditionally render dropdown menu */}
            {click && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-black-200 cursor-pointer">
                    <a href="#" className="text-black">
                      Home
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-200 cursor-pointer">
                    <a href="#" className="text-black">
                      About Me
                    </a>
                  </li>
                  <li className="px-4 py-2 hover:bg-black-200 cursor-pointer">
                    <a href="#" className="text-black">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
