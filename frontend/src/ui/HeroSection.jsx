import { useTranslation } from "react-i18next";
import Btn from "./Btn";
import SearchBox from "./SearchBox";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="px-4 pt-4 bg-[#f7f7fb] pb-3 md:pb-10">
      <div
        className="relative h-110 md:h-120 xl:h-137.5 rounded-3xl overflow-visible bg-cover bg-center px-6 pt-8"
        style={{
          backgroundImage: "url('/hero-img.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>

        <div className="relative z-10 md:px-10 md:py-5">
          <Btn className="text-white bg-white/20 backdrop-blur-md text-sm px-3 py-2 rounded-lg border border-white/20">
            {t("trustedBy")}
          </Btn>

          <div className="mt-8 text-white text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight">
            <p>{t("FindYourPerfect")}</p>
            <p className="text-orange-400">{t("StudentHome")}</p>
            <p>{t("inLondon")}</p>
          </div>

          <p className="text-sm lg:text-md xl:text-lg mt-4 leading-5 text-gray-200 font-medium max-w-xl mb-5 sm:mb-8 md:mb-2">
            {t("description")}
          </p>
        </div>

        <SearchBox />
      </div>
    </section>
  );
}
