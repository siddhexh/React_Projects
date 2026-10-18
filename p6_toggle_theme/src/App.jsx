import { useEffect, useState } from "react";
import { ThemeProvider } from "./components/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.querySelector("html");

    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  const isDark = themeMode === "dark";

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div
        className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
          isDark ? "bg-[#111111]" : "bg-[#f5f5f7]"
        }`}
      >
        <div
          className={`w-full max-w-sm rounded-[28px] border p-7 shadow-sm transition-colors duration-300 ${
            isDark
              ? "border-white/10 bg-[#1c1c1e]"
              : "border-black/[0.04] bg-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Appearance
            </span>

            <button
              onClick={isDark ? lightTheme : darkTheme}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                isDark
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </div>

          <div className="mt-10">
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl ${
                isDark ? "bg-orange-400" : "bg-orange-50"
              }`}
            >
              {isDark ? "☾" : "☀"}
            </div>

            <h1
              className={`text-3xl font-semibold tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Good design.
            </h1>

            <p
              className={`mt-3 text-[15px] leading-6 ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              A little less clutter. A little more clarity.
              Make your space feel right.
            </p>
          </div>

          <div
            className={`mt-8 rounded-2xl p-5 ${
              isDark ? "bg-[#2c2c2e]" : "bg-[#f5f5f7]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={`text-sm font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {isDark ? "Dark appearance" : "Light appearance"}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {isDark
                    ? "Easy on the eyes"
                    : "Clean and comfortable"}
                </p>
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full shadow-sm ${
                  isDark ? "bg-[#3a3a3c]" : "bg-white"
                }`}
              >
                <span className="text-lg">
                  {isDark ? "☾" : "☼"}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={isDark ? lightTheme : darkTheme}
            className="mt-6 w-full rounded-full bg-[#007aff] py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#0066d6] active:scale-[0.98]"
          >
            Switch to {isDark ? "light" : "dark"} mode
          </button>

          <p
            className={`mt-5 text-center text-xs ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Simple by design.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
