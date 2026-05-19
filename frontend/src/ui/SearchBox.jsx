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
