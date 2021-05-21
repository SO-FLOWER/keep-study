import React from "react";
import useUserToken from "./useFunction";
// import { UseContain, UseHooks } from "./useHookSelf";

export default function UseSelfhook() {
  //   const user = useContext(UseContain);
  //   const hook = useContext(UseHooks);
  const [user, hook] = useUserToken();
  console.log(user, hook);
  return <div>123</div>;
}
