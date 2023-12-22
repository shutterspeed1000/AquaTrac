import Header from "./assets/component/header.jsx";
import { Outlet } from "react-router-dom";
import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bkgrd">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
