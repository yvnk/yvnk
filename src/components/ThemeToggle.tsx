"use client";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    // Initialize state from localStorage or system preference synchronously
    if (typeof window === "undefined") return false; // SSR guard

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return true;

    if (!savedTheme) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark((prev) => {
      const newDark = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newDark ? "dark" : "light");
      }
      return newDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
};
