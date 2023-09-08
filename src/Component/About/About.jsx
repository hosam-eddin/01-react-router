import React from "react";
import "./About.css"

export default function About() {
  return (
    <>
      <div className="bgMain paddingSectionAbout">
        <div className="container row justify-content-center align-items-center m-auto py-4">
          <h2
            className="navbar-brand text-white fw-bolder fs-1 text-center"
            to="Home"
          >
            ABOUT COMPONENT
          </h2>
          <div className=" d-flex justify-content-center align-items-center py-4">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="line ms-3"></div>
          </div>
          <div className="row">
            <p className="col-md-6 text-white h5 fw-normal">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="col-md-6 text-white h5 fw-normal">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
