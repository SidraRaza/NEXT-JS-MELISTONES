'use client';
import { useState } from 'react';

import './Home.css';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
<<<<<<< HEAD
import {  FaArrowUp, FaEnvelope, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa';
=======
import { FaArrowUp, FaEnvelope, FaLinkedin, FaLocationArrow, FaPhone } from 'react-icons/fa';
>>>>>>> daa78b245a5a27e29c16da6b7b9f995098c5f1b1
import Typewriter from 'typewriter-effect';
export default function Home() {
  useState(() => {
    const initAOS =async () => {
      await import('aos');
      AOS.init({
        duration:1000,
        easing: 'ease',
        once:true,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();
  })
  return (
    <>
 
      <div className="background-image">
        <div className="content-container">
          <div className="content-inner">
            <div className='rotate'><h1 className="heading" data-aos="zoom-in" ><Typewriter options={{ strings: ['Hello! I am Sidra Raza'], autoStart: true, loop: true }} /></h1></div>
            <p className="description" data-aos="zoom-in" data-aos-duration="400" data-aos-anchor-placement="top-bottom">
              &quot;Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
              With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries
              of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection 
              of technology and innovation together!&quot;
            </p>
          </div>
        </div>
      </div>
      <div className='bg'  >
    <div id='about'>  <h1 className="about-header-title" data-aos="fade-up">About Us</h1></div>
       
      <div className="about-header-container" >
        <div className="about-header-image" data-aos="fade-left" data-aos-duration="500">
        
          <Image src="/o1.jpg" alt="About Us" className="image" width={450} height={300} />
        </div>
        <div className="about-header-content" data-aos="fade-right" data-aos-duration="500">
          
          <p className="about-header-description" id='about-description'>
            &quot;Hello! I&apos;m a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
            With expertise in web development and a keen interest in AI and cloud technology, I&apos;m always looking to push the boundaries
            of what&apos;s possible. Plus, I&apos;m also a graphic designer, bringing a creative touch to my work. Let&apos;s explore the intersection 
            of technology and innovation together!&quot;
          </p>
        </div>
      </div>
      </div>
      <div className="skills-body">
      <section id="Skills"></section>
      <h1 className="skill-heading" data-aos="fade-up" data-aos-duration="500">My Skills</h1>
      <div className="skills-area" data-aos="fade-up" data-aos-duration="500">
        <div className="skill">
          <div className="skill-title">HTML</div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '80%' }}>
              <span className="skill-percent">80%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">CSS</div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '85%' }}>
              <span className="skill-percent">85%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">Python</div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '65%' }}>
              <span className="skill-percent">65%</span>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-title">Typescript</div>
          <div className="skill-bar">
            <div className="skill-fill" style={{ width: '90%' }}>
              <span className="skill-percent">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="contact-section">
        <div className="content" data-aos="fade-up">
          <h1 className="contact-heading"><section id="Contact"></section>Contact Us</h1>
          <p className="contact-para">Below are the details to reach out to me!</p>
      
          <div className="contact-container">
            <div className="contact-inf">
              <div className="box">
                <div className="icon"><FaLocationArrow/></div>
                <div className="text">
                  
                  <p>Mehran Town Karachi</p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><FaPhone/></div>
                <div className="text">
                 
                  <p>+923112242143</p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><FaEnvelope/></div>
                <div className="text">
                 
                  <p>ahed880011@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <div className="icon"><FaLinkedin/></div>
                <div className="text">
                  <h3 className="Address"><a  className="link" href="https://www.linkedin.com/in/sidra-raza-9442132b9">linkedIn</a></h3>
                </div>
              </div>
            </div>
      
            <div className="contactform">
              <form>
                <h2 className="form-heading">Send Message</h2>
                <div className="input-box">
                  <input type="text" id="name" name="" required/>
                  <span>Full Name</span>
                </div>
                <div className="input-box">
                  <input type="email" id="email" name="" required/>
                  <span>Email</span>
                </div>
                <div className="input-box">
                  <textarea required></textarea> 
                  <span>Type Your Message...</span>
                </div>
                <div className="input-box">
                  <input type="submit" id="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <a href="#" id="backToTopBtn"><FaArrowUp /></a>
    
    
      </section>
    </>
  );
}
