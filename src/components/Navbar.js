import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  let history = useNavigate();
  let location = useLocation();

  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-2" to="/">
          SkyNote
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className={`nav-link mx-2 ${
                  location.pathname === '/' ? 'active' : ''
                } `}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                } `}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? (
            <form
              className="d-flex container-fluid"
              style={{ marginRight: '0px', width: '224px' }}
            >
              <Link className="btn btn-success mx-2" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-2" to="/signup" role="button">
                SignUp
              </Link>
            </form>
          ) : (
            <button
              style={{ marginLeft: 'auto' }}
              className="btn btn-primary"
              onClick={() => {
                localStorage.removeItem('token');
                history('/login');
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
