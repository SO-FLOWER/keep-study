import { UseContain, UseHooks } from "./useHookSelf";
import { useContext } from "react";

function useUserToken() {
  const user = useContext(UseContain);
  const token = useContext(UseHooks);

  return [user, token];
}
export default useUserToken;
