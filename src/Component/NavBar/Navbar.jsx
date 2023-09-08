import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {

  const [navbar, setNavbar] = useState(false);

  const changePadding = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changePadding);

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg bgNav py-2 sticky-top"
            : "navbar navbar-expand-lg bgNav py-4 sticky-top"
        }
      >
        <div className="container-fluid px-5">
          <Link className="navbar-brand text-white fw-bolder fs-2" to="">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder column-gap-3">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fs-6"
                  aria-current="page"
                  to="about"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fs-6"
                  aria-current="page"
                  to="portfolio"
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white fs-6"
                  aria-current="page"
                  to="contact"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
