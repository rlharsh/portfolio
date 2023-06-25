import React, { createContext } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext(null);

ThemeContext.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};
