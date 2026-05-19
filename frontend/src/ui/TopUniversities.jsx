import { useTranslation } from "react-i18next";
import University from "./University";

export default function TopUniversities() {
  const { t } = useTranslation();
  return (
    <section className="px-4 md:px-8 lg:px-14 pt-45 sm:pt-1 md:pt-40 lg:pt-1  bg-[#f7f7fb]">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#0B1B3B]">
          {t("trustedByTopStudents")}
        </h2>
      </div>
      {/* Universities */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
        <University Uni="University College London" src="/ucl.png" alt="UCL" />
        <University
          Uni="King's College London"
          src="/kings.png"
          alt="Kings College"
        />
        <University Uni="London School of Economics" src="/lse.png" alt="LSE" />
        <University
          Uni="Imperial College London"
          src="/imperial.png"
          alt="Imperial College"
          className="flex  md:hidden lg:flex flex-col items-center text-center"
        />
        <University
          Uni=" The University of Edinburgh"
          src="/edinburgh.png"
          alt="Edinburgh"
          className="hidden lg:flex flex-col items-center text-center"
        />
      </div>
    </section>
  );
}
