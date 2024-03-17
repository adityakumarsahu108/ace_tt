import React, { useEffect } from "react";
import '../Navbar.css';

function Header() {
  const mobileNavToggleHandler = () => {
    const navbar = document.querySelector('#navbar');
    navbar.classList.toggle('navbar-mobile');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    mobileNavToggle.classList.toggle('bi-list');
    mobileNavToggle.classList.toggle('bi-x');
  };

  const mobileNavDropdownHandler = (e) => {
    const navbar = document.querySelector('#navbar');
    if (navbar.classList.contains('navbar-mobile')) {
      e.preventDefault();
      e.currentTarget.nextElementSibling.classList.toggle('dropdown-active');
    }
  };

  const scrollToHandler = (e) => {
    const targetHash = e.currentTarget.hash;
    const targetElement = document.querySelector(targetHash);
    if (targetElement) {
      e.preventDefault();
      const navbar = document.querySelector('#navbar');
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        const navbarToggle = document.querySelector('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (event.target.matches('.mobile-nav-toggle')) {
        mobileNavToggleHandler(event);
      } else if (event.target.matches('.navbar .dropdown > a')) {
        mobileNavDropdownHandler(event);
      } else if (event.target.matches('.scrollto')) {
        scrollToHandler(event);
      }
    });

    return () => {
      document.removeEventListener('click', mobileNavToggleHandler);
      document.removeEventListener('click', mobileNavDropdownHandler);
      document.removeEventListener('click', scrollToHandler);
    };
  }, []);

  return (
    <>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center justify-content-lg-between">

          <a href="index.html" className="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
             
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto " href="#portfolio">Achievements</a></li>
              <li><a className="nav-link scrollto" href="#team">Team</a></li>

              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle" /> */}
          </nav>{/* .navbar */}
          <a href="#hero" className="get-started-btn scrollto">Home</a>
        </div>
      </header>{/* End Header */}

    </>
  );
}

export default Header;
