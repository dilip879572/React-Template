import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CiSearch } from 'react-icons/ci';
import {AiFillBell} from 'react-icons/ai';

function Header() {
  return (
    <Navbar className='nav' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7-ozb-oFxe7W49nZjQ89lJGz6lF2dZ8z_Q&usqp=CAU" alt="images" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <NavDropdown  className='fon' title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='fon' href="#action2">Teach</Nav.Link>
            <Nav.Link  className='fon' href="#action2">Contact Us</Nav.Link>
            <Nav.Link  className='fon' href="#action2">About Us</Nav.Link>
          
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2  search-input"
              aria-label="Search"/>
            <CiSearch className="logo1"/>
            <img className='img' src="https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=" alt="images" />
            <b className='name'>DilipKumar</b>
            <AiFillBell className='bell'/>
           </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;