const BookingContainer = () => {
  return (
        <div >
        <img src="/clearoff.jfif" alt=""  className="max-sm:h-96 absolute sm:h-[60%] md:h-[35%] lg:h-[60%] xl:h-[60%] 2xl:h-[50%]  object-cover w-full"/>
            <div className="relative  flex flex-col justify-center  gap-6  text-white items-center h-96 lg:gap-10">
            <h2 className=" px-12 text-center font-giloryBold text-3xl lg:text-6xl " >Easy access for easy bookings</h2>
            <h3 className=" px-16  text-center lg:text-xl  ">Share your Calendly link right from your browser, so you can schedule meeting <br className="max-md:hidden" /> without the back-and-forth</h3>
            <div className=" font-semibold flex max-lg:flex-col w-1/3 max-sm:w-full items-center gap-4 ">
                <button className="py-3 lg:py-6 w-11/12 px-10 bg-blue1 rounded-full ">Start for free</button>
                <button className="py-3 lg:py-6  w-11/12 px-10  rounded-full border-2 ">Talk with Sales</button>
            </div>
            </div>
        </div>
  )
}
export default BookingContainer