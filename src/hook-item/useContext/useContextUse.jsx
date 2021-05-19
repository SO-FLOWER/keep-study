import React, { useContext } from "react";
import { UserContext, ThemeContext } from "./textUseContext";

export default function UseContextUse(props) {
  const name = useContext(UserContext);
  const thmere = useContext(ThemeContext);
  console.log(name);
  console.log(thmere);
  console.log(props);
  return <div>ContextHook</div>;
}
