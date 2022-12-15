import React from "react";
import "./style.css";
import Principal from "./Components/Pages/Principal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/Web-site-jc" element={<Principal />} />
    </Routes>
  );
}

export default App;
