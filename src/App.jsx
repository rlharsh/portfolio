import { useContext, useState, useEffect } from "react";
import "./assets/css/app.css";

import { ThemeContext } from "./Hooks/ThemeContentProvider";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="application-container">
        <Header />
        <Body />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
