import React, { useContext } from "react";
import { TestContext } from "./index";
export const Navbar = () => {
  const username = useContext(TestContext);
  console.log(username);
  return <div className="navbar">{/* <p>{username}</p> */}</div>;
};
