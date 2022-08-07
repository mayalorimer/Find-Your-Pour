import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab} from 'react-bootstrap';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import Auth from '../utils/auth';

const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div>
{/* <ul className="nav nav-tabs"> */}
        {Auth.loggedIn() ?
        (
          <>
          <Link to ="/">Home</Link>
          <Link to="/createwine">Create Wine</Link>
          <Link to="/winesearch">Search Wine</Link>
          {/* <Link to="login">Logout</Link> */}
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
          </>  
        ) : (
          <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/winesearch">Search Wine</Link>
          </>
        )
}
</div>
  );
};
  export default NavTabs;

      {/* <li className="nav-item">
        <Link to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          // className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/signup"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/winesearch"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Search Wine
        </Link>
      </li>
      {/* <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
</li> */}
