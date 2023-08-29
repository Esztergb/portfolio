import React from 'react'

function Introduction() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="h-[120px] border-r-[1px] mt-[-20px]" />
      <div className="w-[5px] h-[5px] rounded-full bg-purple-800"></div>
      <h2 className="mt-5 text-black font-medium text-[18px] tracking-widest">
        HELLO! MY NAME IS
      </h2>
      <h2 className="text-[60px] font-bold text-black tracking-widest mt-5">
        ESZTER
      </h2>
      <h2 className="text-[60px] font-bold text-black tracking-widest mt-5">
        BARBUSCIA
      </h2>
      <img
        src="./prof.jpeg"
        className="w-[160px] h-[160px] bg-pink-200 p-7 rounded-full mt-7"
      />
    </div>
  );
}

export default Introduction