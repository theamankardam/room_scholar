import { GrLanguage } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLanguage === "en" ? "zh" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="
        flex
        items-center
        gap-2

        px-3
        py-2

        rounded-xl

        border
        border-white/20

        bg-white/10
        backdrop-blur-md

        text-white

        hover:bg-white
        hover:text-[#051636]

        transition-all
        duration-300

        shadow-md

        cursor-pointer
      "
    >
      {/* ICON */}
      <GrLanguage className="text-lg" />

      {/* LANGUAGE */}
      <span className="text-sm font-medium uppercase tracking-wide">
        {currentLanguage === "en" ? "中文"  : "EN"}
      </span>

      {/* ARROW */}
      <MdOutlineKeyboardArrowDown className="text-lg" />
    </button>
  );
}