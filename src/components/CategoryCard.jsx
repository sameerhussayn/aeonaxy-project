import { GoArrowRight } from "react-icons/go";

const CategoryCard = ({title, imgUrl, tagLine }) => {
    // console.log('fi' + title)
  return (
    <div className="border p-8 rounded-3xl  flex flex-col lg:min-h-96 w-full sm:w-2/5 lg:w-[30%] justify-between cursor-pointer group">
        <div className="flex flex-col gap-6">
        <div>        <img src={imgUrl} width={50} alt={title + 'logo'} />
</div>
        <h2 className="text-2xl font-bold text-regal-blue">{title}</h2>
        <p className="text-lg lg:leading-6 xl:leading-9 text-color2">{tagLine}</p>
        </div>
        <div className="flex items-center gap-2 text-lg font-semibold w-full group-hover:text-blue1 group-hover:gap-3">
        <span>Learn more</span>
            <span><GoArrowRight /></span>
        </div>
    </div>
  )
}
export default CategoryCard