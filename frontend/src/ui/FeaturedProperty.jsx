
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import { IoMdArrowRoundForward } from "react-icons/io";

export default  function FeaturedProperty(){
    return <div className="px-10 xl:px-14 py-5">
        <div className="flex items-center justify-between">
          <p className="text-lg lg:text-xl xl:text-2xl font-semibold">
            Featured Properties
          </p>
          <button className="flex items-center gap-1 text-sm lg:text-md xl:text-lg <IoMdArrowRoundForward /> font-semibold text-orange-500">
            View all <span className="hidden md:flex">properties</span>{" "}
            <IoMdArrowRoundForward />
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <FeaturedPropertyCard />
          <FeaturedPropertyCard />
          <FeaturedPropertyCard />
          <FeaturedPropertyCard />
        </div>
      </div>
}