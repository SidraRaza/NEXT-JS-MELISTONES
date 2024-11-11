'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import './about.css'; // Ensure the path is correct

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS with a default duration
  }, []);

  return (
    <>
     
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
    </>
  );
}

export default About;
