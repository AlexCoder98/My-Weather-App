import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";

import ReactSwitch from "react-switch";

import "../styles/Switcher.css";

const Switcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="switcher">
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "dark"}
        offColor="#81B7C2"
        onColor="#015a6b"
      />
      <label className="switcher-label">
        {theme === "light" ? "Light mode" : "Dark mode"}
      </label>
    </div>
  );
};

export default Switcher;
