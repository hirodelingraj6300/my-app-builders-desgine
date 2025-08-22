import React, { useEffect, useState, useRef } from "react";


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

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
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains("hamburger")
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src="/img/logo_4.png" alt="Logo" className="logo-img" />
          <span>SreeKrishan Constructions</span>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`nav-links ${menuOpen ? "active" : ""}`}
          ref={menuRef}
        >
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
              Services ▾
            </button>
            <div
              className={`dropdown-content ${dropdownOpen ? "show" : ""}`}
            >
              <a href="#cement">Villas</a>
              <a href="#steel">Interiors</a>
              <a href="#bricks">Vastu</a>
              
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
