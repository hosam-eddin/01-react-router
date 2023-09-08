import React from "react";

export default function Footer() {
  return (<>
  
    <footer className="paddingSection bgNav">
      <div className="container">
        <div className="row text-white text-center justify-content-center">
          <div className="div1 col-md-4">
            <h4 className="h2">LOCATION</h4>
            <h6 className="mb-3 fw-lighter">2215 John Daniel Drive</h6>
            <p>Clark, MO 65243</p>
          </div>
          <div className="div2 col-md-4 ">
            <h3 className="mb-3 h2">AROUND THE WEB</h3>
            <ul className=" list-unstyled d-flex flex-row justify-content-center align-items-center column-gap-5">
              <li className="rounded-pill paddingLi border row justify-content-center align-items-center">
                <i class="fa-brands fa-facebook pt-1"></i>
              </li>
              <li className="rounded-pill paddingLi border row justify-content-center align-items-center">
                <i class="fa-brands fa-twitter pt-1"></i>
              </li>
              <li className="rounded-pill paddingLi border row justify-content-center align-items-center">
                <i class="fa-brands fa-linkedin-in pt-1"></i>
              </li>
              <li className="rounded-pill paddingLi border row justify-content-center align-items-center">
                <i class="fa-solid fa-globe pt-1"></i>
              </li>
            </ul>
          </div>
          <div className="div3 col-md-4">
            <h4 className="h2">ABOUT FREELANCER</h4>
            <p className="text-white-50">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </footer>
    <div className="bottomFooter bgDarker text-center py-3 text-white">Copyright © Your Website 2021</div>
  </>
  );
}
