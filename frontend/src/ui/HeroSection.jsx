import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="px-4 pt-4 bg-[#f7f7fb] pb-32 md:pb-10 xl:pb-32">
      {/* HERO IMAGE */}
      <div
        className="relative h-[550px] rounded-3xl overflow-visible bg-cover bg-center px-6 pt-8"
        style={{
          backgroundImage: "url('/hero-img.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

        {/* Content */}
        <div className="relative z-10 md:px-10 md:py-5">
          <button className="text-white bg-white/20 backdrop-blur-md text-sm px-3 py-2 rounded-lg border border-white/20">
            {t("trustedBy")}
          </button>

          <div className="mt-4 text-white text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
            <p>{t("FindYourPerfect")}</p>

            <p className="text-orange-400">{t("StudentHome")}</p>

            <p>{t("inLondon")}</p>
          </div>

          <p className="text-sm lg:text-md xl:text-lg mt-4 leading-5 text-gray-200 font-medium max-w-xl mb-3">
            {t("description")}
          </p>
        </div>

        {/* SEARCH BOX */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-45]  md:bottom-[13] xl:bottom-[-70px] w-[90%] z-20">
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              {/* Location */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t("location")}
                </label>

                <select className="px-4 py-3 h-[52px] rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700">
                  <option>Select Location</option>
                  <option>London</option>
                  <option>Canada</option>
                  <option>Europe</option>
                  <option>Australia</option>
                </select>
              </div>

              {/* Move In */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t("moveIn")}
                </label>

                <div className="h-[52px] border border-gray-300 rounded-xl px-4 bg-white flex items-center focus-within:ring-2 focus-within:ring-purple-500">
                  <input
                    type="date"
                    className="outline-none text-gray-700 w-full bg-transparent"
                  />
                </div>
              </div>

              {/* Move Out */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t("moveOut")}
                </label>

                <div className="h-[52px] border border-gray-300 rounded-xl px-4 bg-white flex items-center focus-within:ring-2 focus-within:ring-purple-500">
                  <input
                    type="date"
                    className="outline-none text-gray-700 w-full bg-transparent"
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t("budgetPerWeek")}
                </label>

                <select className="px-4 py-3 h-[52px] rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 appearance-none cursor-pointer">
                  <option>Any Budget</option>
                  <option>£100 - £150</option>
                  <option>£150 - £200</option>
                  <option>£200 - £250</option>
                  <option>£250 - £300</option>
                  <option>£300+</option>
                </select>
              </div>

              {/* Search Button (aligned properly) */}
              <div className="flex flex-col">
                <label className="text-sm font-medium opacity-0">Search</label>

                <button className="h-[52px] bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white font-semibold px-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2">
                  <FiSearch className="text-lg" />
                  <span>{t("search")}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
