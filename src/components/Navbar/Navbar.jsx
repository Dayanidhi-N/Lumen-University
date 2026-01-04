import React, { useEffect, useState } from "react";
import { Link, Element, ScrollLink } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobilemenu, setMobilemenu] = useState(true);
  const togglemenu = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let D = window.scrollY;
      console.log(D);
      D > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="D-code" className="logo" />
        <ul className={mobilemenu ? "mobile-menu" : ""}>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="program" smooth={true} offset={-260} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-260} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-260} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-260}
              duration={500}
              className="btn"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <img
          src={menu_icon}
          alt="mobile-nav"
          className="menu-icon"
          onClick={togglemenu}
        />
      </nav>
    </>
  );
};

export default Navbar;
