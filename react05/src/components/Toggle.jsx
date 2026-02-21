import React, { useContext } from "react";
import { MyContext } from "../App01";
const Toggle = () => {
  const { state, setTheme } = useContext(MyContext);
  return (
    <button
      onClick={() => {
        setTheme(state.theme === "light" ? "dark" : "light");
      }}
    >
      Toggle {state.theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default Toggle;
