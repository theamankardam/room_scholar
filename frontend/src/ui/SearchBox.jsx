import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Btn from "./Btn";


export default function SearchBox() {
  const { t } = useTranslation();
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45]  md:bottom-[13]  w-[90%] z-20 md:px-5 lg:px-2 xl:pl-0 xl:pr-40 2xl:px-02xl:pr-50">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus-within:border-orange-400 focus-within:ring-4 focus-within:ring-orange-100 transition-all duration-300 shadow-sm">
          {/* Search Icon */}
          <FiSearch className="text-2xl text-orange-500" />

          {/* Input */}
          <input
            type="text"
            placeholder="Search properties, cities, universities..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-[15px]"
          />

          {/* Button */}
          <Btn className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-4 py-2 text-sm rounded-xl font-semibold shadow-md hover:shadow-lg">
            {t("search")}
          </Btn>
        </div>
      </div>
    </>
  );
}

/*

import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Location from "./Location";
import Move from "./Move";
import Btn from "./Btn";
import Budget from "./Budget";

export default function SearchBox() {
  const { t } = useTranslation();
  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45]  md:bottom-[13] xl:-bottom-17.5 w-[90%] z-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <Location />
            <Move move="moveIn" />
            <Move move="moveOut" />
            <Budget />

            <div className="flex flex-col">
              <label className="text-sm font-medium opacity-0">Search</label>
              <Btn className="h-13 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold px-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2">
                <FiSearch className="text-lg" />
                <span>{t("search")}</span>
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



*/
