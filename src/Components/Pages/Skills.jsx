import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../Shared/data";

export default function Skills() {
  return (
    <div className="container px-5 py-10 mx-auto">
      <div className="text-center mb-10 mt-[70px]">
        <h1 className="sm:text-4xl text-3xl font-medium text-black mb-4">
          Skills &amp; Technologies
        </h1>
        <ChipIcon className="w-10 inline-block mb-4 text-pink-500" />
        <a
          href="./Resume.pdf"
          className="text-pink-500 font-semibold underline hover:text-purple-900 hover:scale-110 block mt-2 text-lg"
        >
          {" "}
          RESUME
        </a>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
          <div key={skill} className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font font-medium text-pink-400">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
