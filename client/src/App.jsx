import Header from "./assets/component/header.jsx";
import { Outlet } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
