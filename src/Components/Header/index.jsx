import React from "react";
import LOGO from "../../assets/LOGO.png";
import "./header.css";

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
