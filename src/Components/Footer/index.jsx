import React from "react";
import LOGO from "../../assets/LOGO2.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <img className="footer__logo" alt="" src={LOGO} />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
