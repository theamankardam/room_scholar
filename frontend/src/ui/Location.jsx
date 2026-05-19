import { useTranslation } from "react-i18next";
export default function Location() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        {t("location")}
      </label>

      <select className="px-4 py-3 h-13 rounded-xl border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700">
        <option>Select Location</option>
        <option>London</option>
        <option>Canada</option>
        <option>Europe</option>
        <option>Australia</option>
      </select>
    </div>
  );
}
