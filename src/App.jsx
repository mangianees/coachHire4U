import React from "react";
import Header from "./Components/Header/Header";
import MyNavbar from "./Components/MyNavbar/MyNavbar";

import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LondonCoachHire from "./Components/Pages/LCH/LondonCoachHire";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LondonCoachHire" element={<LondonCoachHire />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
