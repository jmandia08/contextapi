import React from "react";
import Form from "./Form";
import Button from "./Button";

export const ThemeContext = React.createContext("light");

const Context = () => {
  const [theme, setTheme] = React.useState("light");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
        <Button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Toggle theme
        </Button>
      </ThemeContext.Provider>
    </>
  );
};

export default Context;
