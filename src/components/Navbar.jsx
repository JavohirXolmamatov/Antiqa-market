import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        {/* <a
        Link to="/"
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlinLink:to="#bootstrap"></use>
          </svg>
        </a> */}

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 text-white">
              Features
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 text-white">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 text-white">
              FAQs
            </Link>
          </li>
          <li>
            <Link to="#" className="nav-link px-2 text-white">
              About
            </Link>
          </li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div className="text-end">
          <Link to={"/login"} className="btn btn-outline-light me-2">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-warning">
            Sign-up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
