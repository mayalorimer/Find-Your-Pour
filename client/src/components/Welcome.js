import React from 'react';
import {Link} from 'react-router-dom';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
      <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn ? (
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            //className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/createwine"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
          >
            Create Wine
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/searchwine"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Search Wine
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
          >
            Logout
          </Link>
        </li>
        </ul>        
      ) : (
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            //className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
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
        </ul>
        )
      }
      </div>
  )
    }