import React from "react";
import Header from "./Components/Header/Header";
import MyNavbar from "./Components/MyNavbar/MyNavbar";
import Footer from "./Components/Footer/Footer";
import { AllRoutes } from "./Modules/AppModule";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MyNavbar />
        {AllRoutes()}
        <Footer />
      </div>
    </>
  );
}

export default App;
