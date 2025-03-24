import React, { useState, useEffect } from "react";
import darkPng from "../assets/website/dark-mode-button.png";
import lightPng from "../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative w-12">
      <img
        src={theme === "dark" ? darkPng : lightPng}
        alt="Toggle Dark Mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-12 cursor-pointer drop-shadow-md transition-opacity duration-300"
      />
    </div>
  );
};

export default DarkMode;
