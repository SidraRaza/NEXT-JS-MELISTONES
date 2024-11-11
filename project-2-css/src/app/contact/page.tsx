'use client';
import { useEffect } from 'react';
import React from 'react';
import "./contact.css";
import { FaLocationArrow, FaPhone, FaEnvelope, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS with a default duration
  }, []);
  return (
    <>
   

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

export default Contact
