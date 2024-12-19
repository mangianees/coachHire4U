import React from "react";
import Header from "./Components/Header/Header";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Quote from "./Components/Quote/Quote";
import CPTBanner from "./Components/CPTBanner/CPTBanner";
import Reviews from "./Components/Reviews/Reviews";
import OurFleet from "./Components/OurFleet/OurFleet";
import { useMediaQuery } from 'react-responsive';

function App() {
  // Use the media query hook to check for large screens
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });

  return (
    <>
    <div className="App">

      <Header />
      <MyNavbar />
      <Quote />
      {isLargeScreen && <CPTBanner />}
      <Reviews />
      <OurFleet />
    </div>
    </>
  );
}

export default App;
