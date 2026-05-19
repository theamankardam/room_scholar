import { useTranslation } from "react-i18next";
export default function Move({ move }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{t(move)}</label>

      <div className="h-13 border border-gray-300 rounded-xl px-4 bg-white flex items-center focus-within:ring-2 focus-within:ring-purple-500">
        <input
          type="date"
          className="outline-none text-gray-700 w-full bg-transparent"
        />
      </div>
    </div>
  );
}
