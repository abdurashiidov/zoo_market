import React from 'react';
import "./Header.scss"
import logo from "../../img/logo-exam.png"
import logo2 from "../../img/logo.jpg"

function Header() {
  return (
    <div>
      <header>
        {/* Header */}
        <img src={logo} alt="logo" width={150} height={150} />
        <img src={logo2} alt="logo" width={300} height={150} />

        <ul className="header-list">
          <li className="header-item">Bosh sahifa</li>
          <li className="header-item">Biz haqimizda</li>
          <li className="header-item">Buyurtma</li>
        </ul>
      </header>

    </div>
  );
}

export default Header;
