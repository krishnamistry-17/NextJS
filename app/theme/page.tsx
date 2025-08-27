"use client";

import { useLayoutEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldUseDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);

    root.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    root.classList.toggle("dark", newTheme === "dark");
    setIsDark(newTheme === "dark");
  };

  return (
    <button onClick={toggleTheme} className="px-4 py-2">
      {!isDark ? "☀️" : "🌙"}
    </button>
  );
}
