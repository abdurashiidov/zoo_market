import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./Home.scss"
function Home() {
  return (
    <>
          <Header/>
            <div className='main-home'>
              Home
            </div>
         <Footer/>
    </>
  );
}

export default Home;
