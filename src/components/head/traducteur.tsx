import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang); // change la langue immédiatement
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-gray-600/90 text-white rounded-2xl text-xs md:text-base outline-0 px-3 py-1"
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  );
}
