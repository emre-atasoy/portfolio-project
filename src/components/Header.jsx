function Header({ darkMode, setDarkMode, isEnglish, setIsEnglish }) {
  return (
    <header className="flex items-center justify-between px-36 py-5">
      {/* Sol Logo */}
      <div className="flex items-center">
        <div className="text-2xl -ml-26 mt-7 w-15 h-15 rounded-full bg-purple-100 flex items-center justify-center">
          <span className="text-[#3730A3] font-bold pl rotate-30">A</span>
        </div>
      </div>

      {/* Sağ Menü */}
      <div className="flex flex-col items-end gap-7 text-sm text-gray-600">
        {/* Üst satır */}
        <div className="flex items-center gap-6">
          {/* Dark Mode Toggle */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="w-12 h-5 bg-[#3730A3] rounded-full flex items-center px-1">
              <div
                className={`w-4 h-4 bg-yellow-400 rounded-full transition-transform duration-300 ${
                  darkMode ? 'translate-x-7' : ''
                }`}
              ></div>
            </div>
            <span className="uppercase text-xs font-medium">Dark Mode</span>
          </div>

          <span>I</span>

          {/* Dil Değiştir */}
          <div
            className="cursor-pointer"
            onClick={() => setIsEnglish(!isEnglish)}
          >
            <span className="text-[#3730A3] font-bold">
              {isEnglish ? 'Türkçe' : 'English'}
            </span>
            <span className="text-gray-600">
              {isEnglish ? '’ye Geç' : '’ye Geç'}
            </span>
          </div>
        </div>

        {/* Alt satır */}
        <div className="flex items-center gap-18">
          <a href="#skills" className="hover:text-purple-500">
            {isEnglish ? 'Skills' : 'Beceriler'}
          </a>
          <a href="#projects" className="hover:text-purple-500">
            {isEnglish ? 'Projects' : 'Projeler'}
          </a>
          <button className="px-6 py-2 border font-bold border-[#3730A3] rounded-md text-[#3730A3] hover:bg-purple-50">
            {isEnglish ? 'Hire me' : 'İletişime Geç'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
