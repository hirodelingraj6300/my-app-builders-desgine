import React, { useEffect, useState, useRef } from "react";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/img/logo_4.png" alt="" className="logo-img" />
          <span>SreeKrishan Constructions</span>
         
        </div>

        {/* Menu */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>

          {/* Dropdown */}
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropbtn"
              onClick={toggleDropdown}
              aria-expanded={dropdownOpen}
            >
              Products ▾
            </button>
            <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
              <a href="#cement">Cement</a>
              <a href="#steel">Steel</a>
              <a href="#bricks">Bricks</a>
              <a href="#others">Paints</a>
            </div>
          </div>
        </nav>

        {/* Search */}
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
