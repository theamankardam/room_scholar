import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="w-full bg-[#051636] flex items-center justify-between  py-1 md:py-2 sm:px-2 md:px-3 lg:px-2 xl:px-4 2xl:px-6 text-gray-300 border-b border-orange-400 shadow-2xl">
      <Logo />
      <div className="hidden lg:flex items-center gap-6 xl:gap-10 2xl:gap-12 text-lg 2xl:text-xl text-gray-300 ">
        <button className="flex items-center gap-1 hover:text-orange-400 transition-colors duration-300">
          {t("properties")}
          <span className=" pt-1">
            <MdOutlineKeyboardArrowDown />
          </span>
        </button>

        <button className="flex items-center gap-1 hover:text-orange-400 transition-colors duration-300 ">
          {t("destination")}
          <span className=" pt-1">
            <MdOutlineKeyboardArrowDown />
          </span>
        </button>

        <button>{t("blog")}</button>
        <button>{t("about")}</button>
        <button>{t("contact")}</button>
      </div>

      <div className="flex items-center gap-6 sm:gap-8 lg:gap-4 pr-6  font-bold lg:font-medium">
        <LanguageSwitcher />

        <div className="hidden lg:flex text-2xl font-extralight"> | </div>
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 text-md xl:text-lg text-white">
          <button className="flex items-center justify-between gap-2 sm:gap-4 px-3 py-1 rounded-lg  border border-white cursor-pointer hover:bg-white hover:text-[#051636] hover:shadow-lg">
           {t("login")}
          </button>
          <button className="flex items-center justify-between gap-2 sm:gap-4 px-3 py-1 rounded-lg  bg-orange-600 cursor-pointer hover:bg-orange-700 hover:shadow-lg hover:scale-105">
           {t("enquireNow")}
          </button>
        </div>
        <div className="text-2xl sm:text-3xl lg:hidden ">
          <RxHamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
