import {
  ContactInformation,
  FollowAndShare,
  SiteMap,
  UsefulLinks,
} from "./FooterModule";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {SiteMap()}
        {UsefulLinks()}
        {ContactInformation()}
        {FollowAndShare()}
      </div>
    </footer>
  );
};

export default Footer;
