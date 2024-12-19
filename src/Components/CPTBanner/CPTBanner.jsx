import bannerImage from "../../images/CPTBanner.png";
import "./CPTBanner.css";
function CPTBanner() {
  return (
    <>
      <br />
      <div>
        <img src={bannerImage} alt="CPT Banner" className=".banner-container responsive-banner"/>
      </div>
    </>
  );
}

export default CPTBanner;
