import { RiMenu2Line } from "react-icons/ri";


const Header = () => {
  return (
    <div className="px-6 sm:px-8 md:px-16 py-6 lg:pl-28  xl:pl-12  flex shadow-md z-10 font-extrabold font-giloryBold items-center justify-evenly max-lg:justify-between fixed bg-white w-full">
      <img src="./logo.svg" className="h-10 lg:-ml-16  " alt="calendly_logo" />
      <div className="flex  text-base lg:gap-4 xl:gap-8  text-[##332f44] max-lg:hidden">
        <span>Individuals</span>
        <span>Teams</span>
        <span>Enterprise</span>
        <span>Product</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>
      <div className="flex items-center  gap-4">
        <span className=" max-sm:hidden ">Log In</span>
        <div>
          <button className="bg-blue1 px-4  max-sm:hidden  py-3 rounded-3xl text-sm text-white">
            Get started
          </button>
        </div>
        <div className="lg:hidden"><RiMenu2Line size={40} /></div>
      </div>
     
    </div>
  );
};
export default Header;
