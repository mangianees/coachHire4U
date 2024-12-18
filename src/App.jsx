import React from "react";
import Header from "./Components/Header/Header";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Qoute from "./Components/Qoute/Qoute";
import CPTBanner from "./Components/CPTBanner/CPTBanner";
import Reviews from "./Components/Reviews/Reviews";
import OurFleet from "./Components/OurFleet/OurFleet";
import { useMediaQuery } from 'react-responsive';

function App() {
  // Use the media query hook to check for large screens
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <>
      <Header />
      <MyNavbar />
      <Qoute />
      {isLargeScreen && <CPTBanner />}
      <Reviews />
      <OurFleet />
    </>
  );
}

export default App;
