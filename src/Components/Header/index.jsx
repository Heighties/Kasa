import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import styled from "styled-components";
import LOGO from "../../assets/LOGO.png";
// import { StyledLink } from '../../utils/style/Atom'
// import colors from "../../utils/style/colors";
import "./header.css";

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const HomeLogo = styled.img`
//   height: 70px;
//   @media screen and (max-width: 960px) {
//     width: 130px;
//     height: 40px;
//   }
// `;

// const NavContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding-top: 20px;
//   padding-bottom: 40px;
//   width: 1240px;
//   @media screen and (max-width: 960px) {
//     width: 100%;
//   }
// `;

const CustomLink = ({ href, children, ...props }) => {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href} {...props}>
        {children}
      </a>
    </li>
  );
};

function Header() {
  return (
    <div className="wrapper">
      <nav className="nav__container">
        <img className="home__logo" alt="" src={LOGO} />
        <div className="nav">
          <CustomLink href="/">Accueil</CustomLink>
          <CustomLink href="/about">A Propos</CustomLink>
        </div>
      </nav>
    </div>
  );
}

export default Header;
