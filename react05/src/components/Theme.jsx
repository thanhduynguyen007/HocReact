import React, { useContext } from "react";
import Toggle from "./Toggle";
import Content from "./Content";
import "./Theme.css";
import { MyContext } from "../App01";

const Theme = () => {
  const { state } = useContext(MyContext);
  return (
    <div className={`main theme-${state.theme}`}>
      <Toggle />
      <Content />
    </div>
  );
};

export default Theme;
