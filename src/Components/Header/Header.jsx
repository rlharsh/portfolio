import React, { useContext } from "react";
import { ThemeContext } from "../../Hooks/ThemeContentProvider";

const Header = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useContext must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div className="header-main">
      <div className="avatar-image"></div>
      <div className="header-links">
        <a href="http://#" target="_blank" rel="noopener noreferrer" tabIndex="1" aria-label="View my LinkedIn profile.">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="http://#" target="_blank" rel="noopener noreferrer" tabIndex="2" aria-label="View GitHub profile.">
          <i className="fa-brands fa-github-alt"></i>
        </a>
        <a href="http://#" target="_blank" rel="noopener noreferrer" tabIndex="3" aria-label="View my personal blog.">
          <i className="fa-solid fa-blog"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;