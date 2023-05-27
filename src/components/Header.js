import React from 'react';

const Header = () => {
  return (
    <header id="header" class='Header'>
      <nav className="navbar navbar-expand-lg sticky-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/images/logo/mainlogo.png" className="logo-light" style={{maxWidth: '140px'}} alt="logo" />
            <img src="assets/images/logo/mainlogo.png" className="logo-dark" style={{maxWidth: '120px' }} alt="logo" />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="menu-lines"><span></span></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto">
              <li className="nav__item with-dropdown">
                <a href="/" className="dropdown-toggle nav__item-link active">Home</a></li>
              <li className="nav__item with-dropdown">
                <a href="#/" className="dropdown-toggle nav__item-link">Who We Are</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="/about" className="nav__item-link">About Us</a></li>
                  <li className="nav__item"><a href="/why-us" className="nav__item-link">Why Evermore</a></li>
                  <li className="nav__item"><a href="/leadership" className="nav__item-link">Leadership</a></li>
                </ul>
              </li>
              <li class="nav__item with-dropdown">
                <a href="#/" className="dropdown-toggle nav__item-link">Services</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="/consulting" className="nav__item-link">Consulting Services</a></li>
                  <li className="nav__item"><a href="/delivery" className="nav__item-link">Service Delivery &amp; Property Service</a></li>
                  <li className="nav__item"><a href="/integrated" className="nav__item-link">Project Management</a></li>
                </ul>
              </li>
              <li className="nav__item with-dropdown">
                <a href="#/" className="dropdown-toggle nav__item-link">HSE</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="/hse" className="nav__item-link">HSE</a></li>
                  <li className="nav__item"><a href="/report" className="nav__item-link">Report and Obervations</a></li>
                </ul>
              </li>
              <li className="nav__item with-dropdown">
                <a href="#/" className="dropdown-toggle nav__item-link">Media</a>
                <i className="fa fa-angle-right" data-toggle="dropdown"></i>
                <ul className="dropdown-menu">
                  <li className="nav__item"><a href="/newsevent" className="nav__item-link">News &amp; Event</a></li>
                </ul>
              </li>
              <li className="nav__item with-dropdown">
                <a href="/products" className="dropdown-toggle nav__item-link">Products</a>
              </li>
              <li className="nav__item">
                <a href="/contact-us" className="nav__item-link">Contacts Us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-modules">
            <ul className="list-unstyled d-flex align-items-center modules__btns-list">
              {/* <li className="d-none d-lg-block">
                <div className="module__btn module__btn-phone d-flex align-items-center">
                  <i className="fa fa-lock"></i>
                  <a href="tel:5565454117">login</a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
