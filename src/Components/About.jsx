import Strings from "../Shared/Strings";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
function About() {
  return (
    <div className="mt-12 px-40 text-center flex flex-col items-center">
      <h2 className="text-[20px] font-bold">{Strings.ABOUT_HEADING}</h2>
      <BiSolidQuoteAltLeft
        className="bg-pink-500 p-3 text-[38px] rounded-full
        mt-6 text-white"
      />
      <p className="my-5 text-gray-400 text-[16px]">{Strings.ABOUT_ONE}</p>
      <p className="my-5 text-gray-400 text-[16px]">{Strings.ABOUT_TWO}</p>
      <p className="my-5 text-gray-400 text-[16px]">{Strings.ABOUT_THREE}</p>
      <p className="my-5 text-gray-400 text-[16px]">{Strings.ABOUT_FOUR}</p>
      <p className="my-5 text-gray-400 text-[16px]">{Strings.ABOUT_FIVE}</p>
      <BiSolidQuoteAltRight
        className="bg-pink-500 p-3 text-[38px] rounded-full
        mt-6 text-white"
      />
    </div>
  );
}

export default About;
