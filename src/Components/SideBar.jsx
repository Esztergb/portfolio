import React from 'react'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="w-[90px] h-screen border-r-[1px] fixed flex flex-col justify-around items-center shadow dark:bg-gray-800">
      <Link
        to="/"
        className="-rotate-90 tracking-widest mt-20 text-black cursor-pointer hover:text-pink-500 hover:scale-110"
      >
        HOMEPAGE
      </Link>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <a href="https://github.com/Esztergb" target="blank">
          <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out text-pink-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/eszter-barbuscia-638ab763/"
          target="blank"
        >
          <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out text-pink-600" />
        </a>
      </div>
    </div>
  );
}

export default SideBar 