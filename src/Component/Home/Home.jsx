import React from "react";
import homeImg from "../assets/avataaars.png";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="bgMain paddingSection">
        <div className="container row justify-content-center align-items-center m-auto py-4">
          <img src={homeImg} alt="" className="col-3 mb-5" />
          <h2
            className="navbar-brand text-white fw-bolder fs-1 text-center"
            to="Home"
          >
            START FRAMEWORK
          </h2>
          <div className=" d-flex justify-content-center align-items-center py-4">
            <div className="line me-3"></div>
            <i class="fa-solid fa-star text-white"></i>
            <div className="line ms-3"></div>
          </div>
          <h3 className="text-white fw-light h4 text-center">Graphic Artist - Web Designer - Illustrator</h3>
        </div>
      </div>
    </>
  );
}
