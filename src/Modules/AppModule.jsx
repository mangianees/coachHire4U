import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import LondonCoachHire from "../Components/Pages/Area/LCH/LondonCoachHire";
import EnglandCoachHire from "../Components/Pages/Area/ECH/EnglandCoachHire";
import EuropeanCoachHire from "../Components/Pages/Area/EUCH/EuropeanCoachHire";
import IrelandCoachHire from "../Components/Pages/Area/ICH/IrelandCoachHire";
import ScotlandCoachHire from "../Components/Pages/Area/SCH/ScotlandCoachHire";
import WalesCoachHire from "../Components/Pages/Area/WCH/WalesCoachHire";
import SeatMiniBux1619 from "../Components/Pages/Fleet/1619SeatMiniBux/SeatMiniBux1619";
import SeatCoach2034 from "../Components/Pages/Fleet/2034SeatCoach/SeatCoach2034";
import SeatCoach5053 from "../Components/Pages/Fleet/5053SeatCoach/SeatCoach5053";
import SeatCoach5361 from "../Components/Pages/Fleet/5361SeatCoach/SeatCoach5361";
import SeatCoach7074 from "../Components/Pages/Fleet/7074SeatCoach/SeatCoach7074";
import AirportTransfers from "../Components/Pages/Service/AirportTransfers/AirportTransfers";
import CoachHireByDestination from "../Components/Pages/Service/CoachHireByDestination/CoachHireByDestination";
import CorporateCoachHire from "../Components/Pages/Service/CorporateCoachHire/CorporateCoachHire";
import EducationCoachHire from "../Components/Pages/Service/EducationCoachHire/EducationCoachHire";
import EventsFestivals from "../Components/Pages/Service/EventsFestivals/EventsFestivals";
import EventsCoachHire from "../Components/Pages/ThingsToDo/EventsCoachHire/EventsCoachHire";
import FestivalCoachHire from "../Components/Pages/ThingsToDo/FestivalCoachHire/FestivalCoachHire";
import SportsCoachHire from "../Components/Pages/ThingsToDo/SportsCoachHire/SportsCoachHire";
import UKToursCoachHire from "../Components/Pages/ThingsToDo/UKToursCoachHire/UKToursCoachHire";
import Blog from "../Components/Pages/About Us/Blog/Blog";
import Careers from "../Components/Pages/About Us/Careers/Careers";
import OurPartners from "../Components/Pages/About Us/OurPartners/OurPartners";

export const AllRoutes = () => {
return(<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LondonCoachHire" element={<LondonCoachHire />} />
    <Route path="/EnglandCoachHire" element={<EnglandCoachHire />} />
    <Route path="/EuropeanCoachHire" element={<EuropeanCoachHire />} />
    <Route path="/IrelandCoachHire" element={<IrelandCoachHire />} />
    <Route path="/ScotlandCoachHire" element={<ScotlandCoachHire />} />
    <Route path="/WalesCoachHire" element={<WalesCoachHire />} />
    <Route path="/SeatMiniBux1619" element={<SeatMiniBux1619 />} />
    <Route path="/SeatCoach2034" element={<SeatCoach2034 />} />
    <Route path="/SeatCoach5053" element={<SeatCoach5053 />} />
    <Route path="/SeatCoach5361" element={<SeatCoach5361 />} />
    <Route path="/SeatCoach7074" element={<SeatCoach7074 />} />
    <Route path="/AirportTransfers" element={<AirportTransfers />} />
    <Route
      path="/CoachHireByDestination"
      element={<CoachHireByDestination />}
    />
    <Route path="/CorporateCoachHire" element={<CorporateCoachHire />} />
    <Route path="/EducationCoachHire" element={<EducationCoachHire />} />
    <Route path="/EventsFestivals" element={<EventsFestivals />} />
    <Route path="/EventsCoachHire" element={<EventsCoachHire />} />
    <Route path="/FestivalCoachHire" element={<FestivalCoachHire />} />
    <Route path="/SportsCoachHire" element={<SportsCoachHire />} />
    <Route path="/UKToursCoachHire" element={<UKToursCoachHire />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Careers" element={<Careers />} />
    <Route path="/OurPartners" element={<OurPartners />} />
  </Routes>
);
}