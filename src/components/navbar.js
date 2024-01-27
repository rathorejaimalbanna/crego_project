import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from '../App.module.css';
import SwitchExample from "./switch";

// Navbar with dark mode button
function NavBar(props) {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#home" style={{color:"rgb(13,202,240)",fontWeight:600,fontSize:"1.6rem"}}>React-Expression UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'70%'}}>
          <Nav className="me-auto">
            <SwitchExample handleSwitchChange={props.handleSwitchChange}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
