import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header>
      <div className="container hero-content">
        <div className="logo">
          <img src="/assets/images/logo.png" alt="InfiniteSpace Logo" />
        </div>

        <nav>
          <ul>
            <li><a href="#landing">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#data">Data Exploration</a></li>
            <li><a href="#contact">Talk To Us</a></li>
          </ul>
        </nav>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
};

export default Header;