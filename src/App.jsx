import React from "react";
import Header from "./Components/Header/Header";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Quote from "./Components/Quote/Quote";
import CPTBanner from "./Components/CPTBanner/CPTBanner";
import Reviews from "./Components/Reviews/Reviews";
import OurFleet from "./Components/OurFleet/OurFleet";
import ThingsToDo from "./Components/ThingsToDo/ThingsToDo";
import { useMediaQuery } from 'react-responsive';
import MobileAppBanner from "./Components/MobileAppBanner/MobileAppBanner";

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
      <ThingsToDo />
      <MobileAppBanner />
    </div>
    </>
  );
}

export default App;
