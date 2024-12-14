import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import facebook from '../images/facebook.png';
import x from '../images/x.png';
import instagram from '../images/instagram.png';
import linkedin from '../images/linkedin.png';

// Import FontAwesome properly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
      <Navbar className="bgColor">
        <Container>
          <Navbar.Brand href="#home" className="header-brand">
            <span style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FontAwesomeIcon icon={faPhone} /> 0800 783 3243
              <FontAwesomeIcon icon={faEnvelope} /> sales@coachhire4u.com
            </span>
          </Navbar.Brand>
          <div className="social-icons-container">
            <a
              className="header-logo"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Facebook"
                src={facebook}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </a>
            <a
              className="header-logo"
              href="https://www.x.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="X"
                src={x}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </a>
            <a
              className="header-logo"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Instagram"
                src={instagram}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </a>
            <a
              className="header-logo"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="LinkedIn"
                src={linkedin}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
