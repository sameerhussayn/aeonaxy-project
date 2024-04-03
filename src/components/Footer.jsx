import { IoChevronDownSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialYoutube } from "react-icons/sl";
import { footerLinks } from "../utils/data";

const Footer = () => {
  return (
    <div className="h-screen  grid grid-cols-12 px-10 lg:px-20 mt-20 pt-26">
      <div className="lg:col-span-2 col-span-4 flex flex-col gap-12 max-md:hidden ">
        <div>
        <h3 className="text-5xl font-giloryBold mb-3 ">Easy</h3>
        <span className="text-blue1 text-5xl font-giloryBold  ">ahead</span>
        </div>
        <h4 className="text-color2 text-xl font-semibold leading-9 ">
          We take the work out of connecting with others so you can accomplish
          more.
        </h4>
        <div className="w-full border-2 p-4 rounded-lg cursor-pointer  flex justify-between">
          <span className="font-giloryBold">English</span>
          <IoChevronDownSharp size={24} />
        </div>

        <div className="flex items-center cursor-pointer max-xl:flex-col ">
          <img src="/app_store.svg" className="w-32 " alt="" />
          <img src="play_store.png" className="w-32 " alt="" />
        </div>

        <div className="flex items-center gap-6 *:cursor-pointer">
          <FaTwitter size={30}/>
          <FaFacebookF  size={30} />
          <GrInstagram  size={30}/>
          <FaLinkedinIn  size={30}/>

          <SlSocialYoutube  size={30}/>
        </div>
        <span className="text-sm text-color2 font-semibold">Copyright Calendly 2022</span>
      </div>

      <div className="lg:col-span-10 col-span-12 md:col-span-8 max-sm:px-2 pl-10  md:pr-10  w-full ">
      <div className="flex flex-wrap  justify-center  ">
      {Object.keys(footerLinks).map((category) => (
        <div key={category} className=" max-sm:w-1/2 sm:w-1/3 md:w-1/2 px-2">
          <h3 className="font-giloryBold  text-3xl text-regal-blue ">{category}</h3>
          <ul>
            {footerLinks[category].map((link, index) => (
              <li key={index} className="text-regal-blue max-md:text-base text-lg max-md:my-3 my-6 cursor-pointer hover:underline">{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <span className="text-sm text-color2 font-semibold  text-right block ">Privacy&nbsp; / &nbsp; Terms and coditions</span>
      </div>
    </div>
  );
};
export default Footer;
