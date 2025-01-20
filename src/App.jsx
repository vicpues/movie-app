import React from "react";
// Components
import SideBar from "./components/SideBar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="flex flex-col-reverse h-screen sm:flex-row">
      <SideBar />
      <Main />
    </div>
  );
};

export default App;
