import { Sun, Moon } from "lucide-react";
import { toast } from "react-toastify";

function Header({ darkMode, setDarkMode, isEnglish, setIsEnglish }) {
  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
    toast.dark(
      darkMode ? "☀️ Light Mode activated" : "🌙 Dark Mode activated"
    );
  };

  const handleToggleLanguage = () => {
    setIsEnglish(!isEnglish);
    toast.info(
      isEnglish ? "🇹🇷 Türkçe’ye geçildi" : "🇬🇧 Switched to English"
    );
  };

  return (
    <header className="flex items-center justify-between px-36 py-5 text-base">
      {/* Logo */}
      <div className="flex items-center">
        <div
          style={{ backgroundColor: "var(--color-profile-bg)" }}
          className="text-2xl -ml-26 mt-7 w-15 h-15 rounded-full flex items-center justify-center"
        >
          <span className="text-[#807cb8] font-bold pl rotate-30">G</span>
        </div>
      </div>

      {/* Menü ve toggle */}
      <div className="flex flex-col items-end gap-7 text-sm text-secondary">
        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <div
            className="w-14 h-7 rounded-full flex items-center px-1 cursor-pointer bg-gray-400 dark:bg-gray-700 relative"
            onClick={handleToggleTheme}
          >
            {/* Kaydırıcı */}
            <div
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "translate-x-7 bg-gray-900"
                  : "translate-x-0 bg-yellow-400"
              }`}
            >
              {darkMode ? (
                <Moon className="w-3 h-3 text-white" />
              ) : (
                <Sun className="w-3 h-3 text-yellow-400" />
              )}
            </div>
          </div>
          <span className="uppercase text-xs font-medium ml-2">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>

          <span>|</span>

          {/* Dil Değiştir */}
          <div className="cursor-pointer" onClick={handleToggleLanguage}>
            <span className="text-[#3730A3] font-bold">
              {isEnglish ? "Türkçe" : "SWITCH "}
            </span>
            <span className="text-secondary">
              {isEnglish ? "’ye Geç" : "to English"}
            </span>
          </div>
        </div>

        {/* Alt Menü */}
        <div className="flex items-center gap-18">
          <a href="#skills" className="hover:text-primary">
            {isEnglish ? "Skills" : "Beceriler"}
          </a>
          <a href="#projects" className="hover:text-primary">
            {isEnglish ? "Projects" : "Projeler"}
          </a>
          <button className="bg-white px-6 py-2 border font-bold rounded-md text-[#3730A3] hover:bg-amber-100">
            {isEnglish ? "Hire me" : "İletişime Geç"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
