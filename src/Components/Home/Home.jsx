import Quote from "../../Components/Quote/Quote";
import CPTBanner from "../../Components/CPTBanner/CPTBanner";
import Reviews from "../../Components/Reviews/Reviews";
import OurFleet from "../../Components/OurFleet/OurFleet";
import ThingsToDo from "../../Components/ThingsToDo/ThingsToDo";
import { useMediaQuery } from "react-responsive";
import MobileAppBanner from "../../Components/MobileAppBanner/MobileAppBanner";
import TrustBanner from "../../Components/TrustBanner/TrustBanner";

function Home() {
  // Use the media query hook to check for large screens
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });

  return (
    <>
      <Quote />
      {isLargeScreen && <CPTBanner />}
      <Reviews />
      <OurFleet />
      <ThingsToDo />
      <MobileAppBanner />
      <TrustBanner />
    </>
  );
}

export default Home;
