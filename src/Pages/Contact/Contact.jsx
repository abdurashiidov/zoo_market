import React from 'react';
import "./Contact.scss"
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import logo from "../../img/zooLogo.png"

function Contact() {
  return (
    <>
      <Header />
        <div className='contact'>
          <div className="container">
            <div className="wrap-contact">
              <img className='contact-logo' src={logo} alt="logo" width={300} height={300} />
              <div className="contact__wrap-wrapper">
                <h2 className="contact__heading">Murojat uchun: </h2>
                <div className="contact__wrap-number">
                    <a className='contact__wrap-number__tel' href="tel:+998977332811"> <i class="fa-solid fa-phone"></i> +998977332811</a>
                    <a className='contact__wrap-number__tel' href="tel:+998977331128"> <i class="fa-solid fa-phone"></i> +998977331128</a>
                </div>
                <div className="contact__wrap_ins">
                  <a href="#" className="contact__wrap_ins__link"> <i class="fa-brands fa-instagram"></i> Instagram </a>
                  <a href="#" className="contact__wrap_ins__link"> <i class="fa-brands fa-telegram"></i> Telegram </a>
                  <a href="#" className="contact__wrap_ins__link"> <i class="fa-brands fa-twitter"></i> Twitter </a>
                  <a href="#" className="contact__wrap_ins__link"> <i class="fa-brands fa-facebook"></i> Facebook </a>
                  <a href="#" className="contact__wrap_ins__link"> <i class="fa-brands fa-linkedin"></i> Linkedin </a>
                </div>

                <iframe src="https://yandex.uz/maps/-/CCU5UPX1TA" frameborder="0">https://yandex.uz/maps/-/CCU5UPX1TA</iframe>
                

              </div>
            </div>
          </div>
        </div>
      <Footer />  
    </>
  );
}

export default Contact;
