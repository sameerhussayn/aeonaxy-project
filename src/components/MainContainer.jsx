import { FiSearch } from "react-icons/fi";

const MainContainer = () => {
  return (
    <div className="bg-bgColor flex  items-center pt-28 lg:justify-evenly ">
      <div className=" flex flex-col gap-6 lg:gap-12 py-14  lg:h-[600px] max-lg:w-full pl-6  lg:pl-16">
        <div className="flex gap-2 lg:gap-4 font-giloryBold lg:text-lg">
          <span className=" font-extrabold text-blue1">Home</span>
          <span>/</span>
          <span className=" font-extrabold text-blue1">Product</span>
          <span>/</span>
          <span>Integrations</span>
        </div>
        <h3 className=" text-color2 font-semibold tracking-widest text-sm lg:text-base">
          APPS & INTEGRATIONS
        </h3>
        <h3 className="text-regal-blue text-4xl  lg:text-6xl font-giloryBold ">
          Integrate Calendly, <br /> boost productivity
        </h3>
        <h4 className="text-color2 text-lg lg:text-xl leading-9 max-md:w-3/4 ">
          Smart scheduling automation will change the way you – and your <br className="max-lg:hidden" />{" "}
          tools – work.
        </h4>
        <div className="w-[85%] lg:w-3/4 bg-white py-4  rounded-full shadow-2xl flex items-center gap-4">
          <div className="pl-6">
            <FiSearch size={25} color="blue1" />
          </div>
          {/* <input className="font-bold text-gray-400 text-lg"></input> */}
          <input
            type="text"
            className="font-bold lg:w-4/5 text-gray-400 text-lg outline-none  p-1"
            placeholder="Search for an integration"
          />
        </div>
      </div>
      <img src="./integrations.webp" className="w-[44%] max-lg:hidden" alt="" />
    </div>
  );
};
export default MainContainer;
