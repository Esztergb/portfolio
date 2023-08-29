import React from 'react'
import ProfilePic from "../ProfilePic";
import Introduction from "../Introduction";
import About from "../About";
import Services from "../Services";
import ProgressBar from "../ProgressBar";

function Home() {
  return (
    <div
      className="ml-[90px]  
      grid grid-cols-1 md:grid-cols-3
      "
    >
      <div className="col-span-2 p-5 mt-[90px]">
        <Introduction />
        <About />
        <Services />
      </div>
      <div className="hidden md:block">
        <ProgressBar />
        <ProfilePic />
      </div>
    </div>
  );
}

export default Home