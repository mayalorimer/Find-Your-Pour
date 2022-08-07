import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Tab,
  NavDropdown,
} from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import Auth from "../utils/auth";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './pages/Navbar';
import CreateWine from './pages/CreateWine';
import WineSearch from './pages/WineSearch';

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
              <Navbar.Brand as={Link} to="/">Find Your Pour</Navbar.Brand>
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
                  {/* <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/" onClick={Auth.logout}>
            Logout
          </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/winesearch">
              <WineSearch />
            </Route>
            <Route path="/createwine">
              <CreateWine />
            </Route>
          </Routes>
          {/* <Nav.Link to="/">Home</Nav.Link>
          <Nav.Link to="/winesearch">Search Wine</Nav.Link> */}
        </>
      ) : (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
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
                  <Nav.Link as={Link} to="/login">Vineyard Login</Nav.Link>
                  <Nav.Link as={Link} to="/signup">Vineyard Signup
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/" onClick={Auth.logout}>
            Logout
          </Nav.Link> */}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/winesearch">
              <WineSearch />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
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
