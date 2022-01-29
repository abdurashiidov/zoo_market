import React from 'react';
import "./Header.scss"
import logo from "../../img/zooLogo.png"

function Header() {
  return (


      <section className='header-section'>

        <div className="container">
          <header className='header'>
          <img className='header-logo' src={logo} alt="logo" width={100} height={100} />

          <ul className="header-list">
            <li className="header-item"><a className='header-link' href="#"> Bosh sahifa </a> </li>
            <li className="header-item"> <a className='header-link' href="#"> Buyurtma qilish </a> </li>
            <li className="header-item"> <a className='header-link' href="#"> Biz haqimizda </a> </li>
            <li className="header-item"> <a className='header-link' href="#"> Biz bilan bog'lanish </a> </li>
          </ul>

          <i class="fa-solid fa-magnifying-glass icon-search"></i>

          <select name="" id="">
            <option value="uz">uz</option>
            <option value="ru">ru</option>
            <option value="en">en</option>
          </select>

          <i class="fa-regular fa-sun icon-sunn"></i>
          <i class="fa-solid fa-moon"></i>
          </header>
            

        </div>
       

      </section>


  );
}

export default Header;
