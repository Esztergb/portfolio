import React from "react";
// import "./App.css";

import { Link } from "react-router-dom";


function Header() {
  
  return (
    <div className="flex items-center fixed w-screen justify-between border-b-[1px] bg-white">
      <div className="w-[90px] h-[90px] bg-black flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>

      <div>
        {/* <nav> */}
        <ul className="hidden md:flex gap-14">
          <li>
            <Link
              to="/"
              className="text-black cursor-pointer 
                hover:underline font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              className="text-black cursor-pointer 
                hover:underline font-medium"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="text-black cursor-pointer 
                hover:underline font-medium"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="text-black cursor-pointer 
                hover:underline font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* </nav> */}
        {/* {menu.map((item) => (
          <div className="cursor-pointer hover:underline font-medium">
            <h2>{item.name}</h2>
          </div>
        ))} */}
      </div>

      <div className="w-[90px] h-[90px] bg-pink-500 flex justify-center items-center">
        <a href="mailto:gubiscom@yahoo.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Header;
