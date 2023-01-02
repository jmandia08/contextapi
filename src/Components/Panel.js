import React from "react";
import { ThemeContext } from "./Context";

const Panel = ({ title, children }) => {
  const theme = React.useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
