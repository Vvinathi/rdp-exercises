import React, { useState } from "react";
import SignUp from "./signup";
import CommitMessage from "./commitmessage";
import Tabmenu from "./tabmenu";



function Home() {
  const [activeComponent, setActiveComponent] = useState(null);

  
  const toggleComponent = (componentName) => {
    setActiveComponent(componentName === activeComponent ? null : componentName);
  };

  return (
    <div className=" bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Home Page</h1>
        <ul className="list-disc pl-4 space-y-2">
          <li>
            <button
              className={`text-blue-500 hover:underline ${
                activeComponent === "signup" ? "font-semibold" : ""
              }`}
              onClick={() => toggleComponent("signup")}
            >
              Sign Up
            </button>
          </li>
          <li>
            <button
              className={`text-blue-500 hover:underline ${
                activeComponent === "commit" ? "font-semibold" : ""
              }`}
              onClick={() => toggleComponent("commit")}
            >
              Commit Message
            </button>
          </li>
          <li>
            <button
              className={`text-blue-500 hover:underline ${
                activeComponent === "menu" ? "font-semibold" : ""
              }`}
              onClick={() => toggleComponent("menu")}
            >
              Tab Menu
            </button>
          </li>
        </ul>
        <div className="mt-4">
          {activeComponent === "signup" && <SignUp />}
          {activeComponent === "commit" && <CommitMessage />}
          {activeComponent === "menu" && <Tabmenu />}
        </div>
      </div>
    </div>
  );
}

export default Home;
