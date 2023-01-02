import React from "react";
import { ThemeContext } from "./Context";

const Button = ({ children, onClick }) => {
  const theme = React.useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
