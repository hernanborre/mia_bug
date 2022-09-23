import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Redirect from "./Redirect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/redirect" element={<Redirect url="http://yahoo.com"/>} ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
