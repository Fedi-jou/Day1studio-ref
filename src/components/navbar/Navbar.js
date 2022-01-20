import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import { Button } from "../../Globalstyle";
import { IconContext } from "react-icons/lib";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar_style";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={handleClick}>
            <img src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon onClick={closeMobileMenu}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about" onClick={closeMobileMenu}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services" onClick={closeMobileMenu}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/ourgames" onClick={closeMobileMenu}>
                Games
              </NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to="/contact">
                  <Button primary>Contact Us</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/sign-up">
                  <Button onClick={closeMobileMenu} fontBig primary>
                    Contact Us
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
