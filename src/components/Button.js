import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme : {theme}
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}>
        Set Theme
      </button>
    </div>
  );
}

export default Button;
