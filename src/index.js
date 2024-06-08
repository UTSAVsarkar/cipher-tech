import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CustomNavbar from "./component/CustomNavbar/CustomNavbar";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Solutions from "./component/Solutions/Solutions";
import Services from "./component/Services/Services";
import Contact from "./component/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomNavbar />
    <div style={{ marginTop: "4%" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/cipher-tech" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
