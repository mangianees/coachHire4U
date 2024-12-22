import { Navbar, Container, Row } from "react-bootstrap";
import { ContactInformation, LanguageAndSocialMedia } from "./HeaderModul";

function Header() {
  return (
    <Navbar className="navbar bgColor py-2">
      <Container>
        <Row className="align-items-center w-100 ">
          {ContactInformation()}
          {LanguageAndSocialMedia()}
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
