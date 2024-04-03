import { questions } from "../utils/data"

import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  return (
    <div className="lg:min-h-screen bg-bgColor flex items-center flex-col py-12 lg:py-32 gap-4 lg:gap-10   ">
        <h2 className="text-regal-blue text-3xl font-giloryBold  text-center lg:text-6xl" >Frequently Asked Questions</h2>
        <div className="text-center text-lg lg:text-xl font-semibold text-color2">
        <h3 className=" mb-2">Not Seeing what you are looking for?</h3>
        <h3 >Go to our <span className="text-blue1">help center</span></h3>
        </div>
        <div className="flex flex-col items-center">
            {questions.map( (question, index) => (
                <div key={index} className="lg:bg-white p-4 lg:p-6 border w-11/12 flex  justify-between items-center my-2 lg:my-4 lg:w-[120%] cursor-pointer ">
                    <span className="text-regal-blue font-giloryBold lg:text-2xl">{question}</span>
                    <span className="text-blue1"><FaPlus /></span>
                </div>
            ))}
        </div>
    </div>
  )
}
export default FAQ