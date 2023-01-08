import "./App.css";
import React from "react";
import MainView from "./components/MainView/MainView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Newsletter from "./components/Newsletter/Newsletter";
import Offer from "./components/Offer/Offer";
import Realizations from "./components/Realizations/Realizations";

function App() {

  return (
    <div className="App">
      {/* <MainView/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<MainView />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/realizations" element={<Realizations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
