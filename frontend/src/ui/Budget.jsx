import { useTranslation } from "react-i18next";
export default function Budget() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {t("budgetPerWeek")}
      </label>

      <select className="px-4 py-3 h-13 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700 appearance-none cursor-pointer">
        <option>Any Budget</option>
        <option>£100 - £150</option>
        <option>£150 - £200</option>
        <option>£200 - £250</option>
        <option>£250 - £300</option>
        <option>£300+</option>
      </select>
    </div>
  );
}
