import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Tab,
  NavDropdown,
} from "react-bootstrap";
import './FindYourPourLogo.png';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import Auth from "../utils/auth";
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import CreateWine from './CreateWine';
import WineSearch from './WineSearch';
import winelogo from './FindYourPourLogo.png';

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Router>
    <div>
      {/* <ul className="nav nav-tabs"> */}
      {Auth.loggedIn() ? (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              
              <Navbar.Brand as={Link} to="/">
              <div>
              <img src= {winelogo} alt="find-your-pour logo wineglass and magnifying glass" height={30} width={30} />            
              </div>
              Find Your Pour
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/winesearch">Search Wine</Nav.Link>
                  {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                  <NavDropdown title="Edit Wines" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/createwine">
                      Post New Wine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Update Wine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Delete Wine
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
                <Nav>
                <NavDropdown title={Auth.getUser().data.username} id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/" onClick={Auth.logout}>Logout
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item as={Link} to="/signup">Signup
                    </NavDropdown.Item> */}
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/winesearch" element={<WineSearch />}></Route>
            <Route path="/createwine" element={<CreateWine />}></Route>
          </Routes>
        </>
      ) : (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <div>
              <img src= {winelogo} alt="find-your-pour logo wineglass and magnifying glass" height={30} width={30} className="wineLogo"/>            
              </div>
              <Navbar.Brand as={Link} to="/">Find Your Pour</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/winesearch">Search Wine</Nav.Link>
                  {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                  {/* <NavDropdown title="Edit Wines" id="collasible-nav-dropdown">
                    <NavDropdown.Item to="/createwine">
                      Post New Wine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Update Wine
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Delete Wine
                    </NavDropdown.Item> */}
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item> */}
                  {/* </NavDropdown> */}
                </Nav>
                <Nav>
                <NavDropdown title="Industry Professionals" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/login">Login
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/signup">Signup
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/winesearch" element={<WineSearch />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
          </Routes>
          {/* <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/winesearch">Search Wine</Nav.Link> */}
          {/* <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/winesearch">Search Wine</Link> */}
        </>
      )}
    </div>
    </Router>
  );
}
export default NavTabs;

//   function CollapsibleExample() {
//     return (
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#features">Features</Nav.Link>
//               <Nav.Link href="#pricing">Pricing</Nav.Link>
//               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               <Nav.Link href="#deets">More deets</Nav.Link>
//               <Nav.Link eventKey={2} href="#memes">
//                 Dank memes
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }

//   export default CollapsibleExample;

//       {/* <li className="nav-item">
//         <Link to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           // className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
//         >
//           Home
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/login"
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           // className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
//         >
//           Login
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/signup"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           // className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
//         >
//           Signup
//         </Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/winesearch"
//           // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           // className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
//         >
//           Search Wine
//         </Link>
//       </li>
//       {/* <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
// </li> */}
