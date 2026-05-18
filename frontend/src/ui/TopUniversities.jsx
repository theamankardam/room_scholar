import { useTranslation } from "react-i18next";

export default function TopUniversities(){
      const { t } = useTranslation();
    return  <section className="px-4 md:px-8 lg:px-14 pt-45 sm:pt-1 md:pt-40 lg:pt-1  bg-[#f7f7fb]">

  {/* Heading */}
  <div className="text-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B3B]">
        {t("trustedByTopStudents")}
    </h2>
  </div>

  {/* Universities */}
  <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">

    {/* UCL */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/ucl.png"
        alt="UCL"
        className="h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />

      <p className="mt-3 text-sm text-gray-500">
        University College London
      </p>
    </div>

    {/* Kings College */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/kings.png"
        alt="Kings College"
        className="h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />

      <p className="mt-3 text-sm text-gray-500">
        King's College London
      </p>
    </div>

    {/* LSE */}
    <div className="flex flex-col items-center text-center">
      <img
        src="/lse.png"
        alt="LSE"
        className="h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />

      <p className="mt-3 text-sm text-gray-500">
        London School of Economics
      </p>
    </div>

    {/* Imperial */}
    <div className="flex  md:hidden lg:flex flex-col items-center text-center">
      <img
        src="/imperial.png"
        alt="Imperial College"
        className="h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />

      <p className="mt-3 text-sm text-gray-500">
        Imperial College London
      </p>
    </div>

    {/* Edinburgh */}
    <div className=" hidden lg:flex flex-col items-center text-center">
      <img
        src="/edinburgh.png"
        alt="Edinburgh"
        className="h-12 object-contain  hover:grayscale-0 transition-all duration-300"
      />

      <p className="mt-3 text-sm text-gray-500">
        The University of Edinburgh
      </p>
    </div>

  </div>

</section>

}