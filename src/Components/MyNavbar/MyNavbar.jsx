
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import coachHireLogo from '../../images/CoachHireLogo.png';
import './MyNavbar.css'; 

function MyNavbar() {
  return (
    <Navbar expand="lg" className="moveToRight">
      <Container fluid >
        <Navbar.Brand href="#">
          <img
            alt="Coach Hire Logo"
            src={coachHireLogo}
            width="400"
            height="100"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ width: '100%' }}>
          <Nav
            // className="moveToRight"
            style={{ maxHeight: '100px' }}
            navbarScroll
          > 
        
            <NavDropdown title="Area" id="area">
              
              <NavDropdown.Item href="#action3">London Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">England Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Ireland Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Scotland Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Wales Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">European Coach Hire</NavDropdown.Item>
            
            </NavDropdown>
            <NavDropdown title="Service" id="service">
              <NavDropdown.Item href="#action3">Airport Transfer</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Event / Festival</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Education Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Coach Hire by Destination</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Corporate Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Fleet" id="fleet">
              <NavDropdown.Item href="#action3">16-19 Mini Bus</NavDropdown.Item>
              <NavDropdown.Item href="#action3">20-34 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">50-53 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">53-61 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">70-74 Seat Coach</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Cheap Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Things To Do" id="thingstodo">
              <NavDropdown.Item href="#action3">Festival Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Events Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sports Coach Hire</NavDropdown.Item>
              <NavDropdown.Item href="#action3">UK Tours Coach Hire</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="aboutUs">
              <NavDropdown.Item href="#action3">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Career</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Partners</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
