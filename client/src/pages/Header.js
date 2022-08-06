import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Home</h1>
          </Link>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/createwine">
                Create Wine
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/winesearch">
                Search Wine
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/winesearch">
                Search Wine
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;


// import React from 'react';
// import {Link} from 'react-router-dom';

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <Link to="/"
//           // This is a conditional (ternary) operator that checks to see if the current page is "Home"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           //className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
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
//       </li> */}
//     </ul>
//   );
// }

// export default NavTabs;
