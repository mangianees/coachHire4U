import CPTBanner from "./Components/CPTBanner/CPTBanner";
import Header from "./Components/Header"
import MyNavbar from "./Components/MyNavbar/MyNavbar"
import Qoute from "./Components/Qoute/Qoute";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="App"> 
      <Header />
      <MyNavbar />
      <Qoute />
      <CPTBanner />
      <Reviews />
      
    </div>
  );
}

export default App;
