import React from 'react'
import { Link } from 'react-scroll'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Menu from './Menu'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we are serious about is quality and taste</p>
          </div>
          <p className='mid'>If you are looking for authentic taste of all cuisines and best place to have a treat, then think no more. Toast is the best place to find all the delicacies.Hyderabadi biryani, which is the go-to food for everyone who wishes to fill their mighty stomach and are particular about flavor can head into the Toast.We serve Continental, italian, French, Indian,Chinese, Middle-eastern cuisines.
           </p>          
          <Link to="menu" spy={true} smooth={true} duration={500}>
            Explore Menu <span><HiOutlineArrowNarrowRight/></span>
          </Link>
          
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>

    </section>
  )
}

export default About