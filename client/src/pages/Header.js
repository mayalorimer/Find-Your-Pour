import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
    <header>
      {/* <div className="container flex-column justify-space-between-lg justify-center align-center text-center"> */}
        <div>
        <Link to="/">
          Home
        </Link>
        {Auth.loggedIn() ?
        (
          <>
          <Link to="/createwine">Create Wine</Link>
          <Link to="/winesearch">Search Wine</Link>
          <Link onClick={logout}>Logout</Link>
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
    </header>
  );
};

export default Header;
