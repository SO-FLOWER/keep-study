import React, { useContext, createContext } from "react";
import { Navbar } from "./index_2";

export const TestContext = createContext();

const Messages = () => {
  const { username } = useContext(TestContext);

  return (
    <div className="messages">
      <p>1 message for {username}</p>
    </div>
  );
};

export default function App() {
  return (
    <TestContext.Provider
      value={{
        username: "superawesome",
        age: 24,
      }}
    >
      <div className="test">
        <Navbar />
        <Messages />
      </div>
    </TestContext.Provider>
  );
}
