import React from 'react';
import "./Footer.scss"
import logo from "../../img/zooLogo.png"

function Footer() {
  return (
    <section className='footer-section'>

      <div className="container">
        <footer>
          <img className='footer-logo' src={logo} alt="logo" width={100} height={100} />
        </footer>
      </div>

    </section>
  );
}

export default Footer;
