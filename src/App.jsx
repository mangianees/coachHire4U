import React from "react";
import Header from "./Components/Header";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Qoute from "./Components/Qoute/Qoute";
import CPTBanner from "./Components/CPTBanner/CPTBanner";
import Reviews from "./Components/Reviews/Reviews";
import OurFleet from "./Components/OurFleet/OurFleet";

function App() {
  return (
    <div className="App">
      <Header />
      <MyNavbar />
      <Qoute />
      <CPTBanner />
      <Reviews />
      <OurFleet />
    </div>
  );
}

export default App;
