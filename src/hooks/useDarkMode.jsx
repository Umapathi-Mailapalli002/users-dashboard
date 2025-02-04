"use client";
import { useEffect, useState } from "react";

function useDarkMode() {
  // Default to false to prevent SSR mismatches
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Read theme only on the client
  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setIsDarkMode(storedTheme === "dark");
      } else {
        setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    } catch (err) {
      console.error("Failed to access localStorage:", err);
    }
  }, []);

  // Update theme class and localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}

export default useDarkMode;
