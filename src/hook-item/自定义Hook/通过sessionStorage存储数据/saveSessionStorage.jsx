import React from "react";
import useCommitem from "./usecommit";
export default function SaveSessionStorage() {
  const [name, setName] = useCommitem("name");
  return (
    <div>
      <h2>dataStoreHook:{name}</h2>
      <button onClick={(e) => setName("Jsong")}>设置name</button>
    </div>
  );
}
