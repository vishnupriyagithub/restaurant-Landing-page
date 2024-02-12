import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <section className='heroSection' id='HeroSection'>
      <Navbar/>
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className='tagline'>Where every tells a story</h1>
            <h1 className='tagline'>Our Priority is..</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="/hero1.png" alt="hero1" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className='title'>Quality</h1>
                <h1 className='title'>Taste</h1>
                <h1 className='title'>Service</h1>
                <img src="/threelines.svg" alt="three" />
              </div>
              {/* <img src='/cutlery.svg' alt='logo' className='logo'/> */}
              {/* <img src="/logo.svg" alt="logo" className='logo' /> */}
            </div>
          </div>
        </div>
        
        <div className="banner">
          <div className="imagebox">
            <img src="/hero2.png" alt="hero2" />
          </div>
          {/* <h1 className='title dishes_title'>Dishes</h1> */}
        </div>
      </div>
    </section>
  )
}

export default HeroSection;