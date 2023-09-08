import React from "react";
import pic1 from "../assets/poert1.png";
import pic2 from "../assets/port2.png";
import pic3 from "../assets/port3.png";
import "./Portfolio.css";
export default function Contact() {
  return (
    <>
      <div className="bg-white  ">
        <div className="container row justify-content-center align-items-center m-auto py-4">
          <h2 className="fs-10 textDark fw-bolder text-center" to="Home">
            PORTFOLIO COMPONENT
          </h2>
          <div className=" d-flex justify-content-center align-items-center pt-4 ">
            <div className="lineDark me-3"></div>
            <i class="fa-solid fa-star textDark"></i>
            <div className="lineDark ms-3"></div>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="cardY rounded-3 overflow-hidden position-relative">
                <img src={pic1} alt="" className="w-100 rounded-3" />
                <div className="cardBg position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cardY rounded-3 overflow-hidden position-relative">
                <img src={pic2} alt="" className="w-100 rounded-3" />
                <div className="cardBg position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cardY rounded-3 overflow-hidden position-relative">
                <img src={pic3} alt="" className="w-100 rounded-3" />
                <div className="cardBg position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cardY rounded-3 overflow-hidden position-relative">
                <img src={pic1} alt="" className="w-100 rounded-3" />
                <div className="cardBg position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                  >
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cardY rounded-3 overflow-hidden position-relative">
                <img src={pic2} alt="" className="w-100 rounded-3" />
                <div className="cardBg position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="cardY rounded-3 overflow-hidden position-relative">
                <img src={pic3} alt="" className="w-100 rounded-3" />
                <div className="cardBg position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                <button
                    type="button"
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                  >
                    <i className="fas fa-plus text-white fa-6x"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

{/* Modalsssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
          <div>
            <div
              className="modal fade"
              id="exampleModal1"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog row justify-content-center pt-5 mt-5">
                <img src={pic1} alt="" className="w-100 mt-5" />{" "}
              </div>
            </div>
          </div>

          <div>
            <div
              className="modal fade"
              id="exampleModal3"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog row justify-content-center pt-5 mt-5">
                <img src={pic3} alt="" className="w-100 mt-5" />{" "}
              </div>
            </div>
          </div>

          <div>
            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog row justify-content-center pt-5 mt-5">
                <img src={pic2} alt="" className="w-100 mt-5" />{" "}
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
