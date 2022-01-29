import React from 'react';
import "./Header.scss"
import logo from "../../img/zooLogo.png"
import { NavLink } from 'react-router-dom';

function Header() {
  return (


      <section className='header-section'>

        <div className="container">
          <header className='header'>
          <img className='header-logo' src={logo} alt="logo" width={100} height={100} />

          <ul className="header-list">
            <li className="header-item"><NavLink className='header-link' to={"/"}> Bosh sahifa </NavLink> </li>
            <li className="header-item"> <NavLink className='header-link' to={"/order"}> Buyurtma qilish </NavLink> </li>
            <li className="header-item"> <NavLink className='header-link' to={"/about"}> Biz haqimizda </NavLink> </li>
            <li className="header-item"> <NavLink className='header-link' to={"/contact"}> Biz bilan bog'lanish </NavLink> </li>
          </ul>

          <i class="fa-solid fa-magnifying-glass icon-search"></i>

          <select className='header-select'>
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>

          <i class="fa-regular fa-sun icon-sunn"></i>
          <i class="fa-solid fa-moon icon-moonn"></i>
          </header>
            

        </div>
       

      </section>


  );
}

export default Header;
