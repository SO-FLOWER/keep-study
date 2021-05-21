import React, { createContext } from "react";
import UseSelfhook from "./useSelfhook";

export const UseContain = createContext();
export const UseHooks = createContext();

export default function UseHookSelf() {
  return (
    <div>
      <UseContain.Provider value={{ name: "jaon", age: 24 }}>
        <UseHooks.Provider value={{ name: "jaon", age: 24 }}>
          <UseSelfhook />
        </UseHooks.Provider>
      </UseContain.Provider>
    </div>
  );
}
