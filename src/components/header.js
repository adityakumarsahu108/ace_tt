import React, { } from "react";


function Header() {
  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-lg-between">

          <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              {/* <li><a className="nav-link scrollto active" href="#hero">Home</a></li> */}
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto " href="#portfolio">Achievements</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>

              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>{/* .navbar */}
          <a href="#hero" className="get-started-btn scrollto">Home</a>
        </div>
      </header>{/* End Header */}

    </>
  );
}

export default Header;
