import React, { createContext } from "react";
import UseContextUse from "./useContextUse";

export const UserContext = createContext();
export const ThemeContext = createContext();

export default function TextUseContext() {
  return (
    <div>
      <UserContext.Provider value={{ name: "Json", age: 24 }}>
        <ThemeContext.Provider value={{ name: "check" }}>
          <UseContextUse value={{ color: "blue", change: "world" }} />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
