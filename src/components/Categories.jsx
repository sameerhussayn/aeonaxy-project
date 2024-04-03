import { categories, intergrations } from "../utils/data";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <div className="max-xl:px-8 xl:w-5/6  grid grid-cols-12 h-auto mx-auto py-20">
      <div className="col-span-3 md:col-span-2 max-md:hidden">
        <h3 className="font-giloryBold text-regal-blue text-2xl  lg:text-3xl">Categories</h3>
        <div className="flex flex-col mt-8">
            {categories.map(category => (
                <span  className={`py-3 lg:py-4  px-4 font-semibold rounded-md text-regal-blue text-lg  ${category == 'Popular' ? 'bg-blue1 text-white' : 'hover:bg-slate-100'}`} key={category}>{category}</span>
            ))}
        </div>
      </div>
      <div className="col-span-12  md:col-span-10 lg:col-span-10  pl-4   ">
       <span >Viewing:</span>  <span className="font-bold" >15 Popular</span>
       <div className="flex flex-wrap gap-4 max-xl:justify-evenly  lg:gap-8 pt-10 ">
            { intergrations.map(ele => (
                <CategoryCard key={ele.title} title={ele.title} imgUrl={ele.imgUrl} tagLine={ele.tagLine}/>
            ))}
       </div>
      </div>
    </div>
  );
};
export default Categories;
