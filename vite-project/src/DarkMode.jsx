import { useState, useEffect } from "react";

function DarkMode() {
  const [isDark, setIsDark] = useState(false);

  // When the component loads, check if user had a preference saved
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  // This runs every time isDark changes
  function handleToggle() {
    const newValue = !isDark;
    setIsDark(newValue);

    if (newValue) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }

  return (
    <button onClick={handleToggle} className="dark-mode-btn">
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkMode;