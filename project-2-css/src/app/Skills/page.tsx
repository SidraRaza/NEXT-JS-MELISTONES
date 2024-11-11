'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './skill.css';

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 500 }); // Initialize AOS with a default duration
  }, []);

  return (
    <div className="skills-body">
      <section id="Skills"></section>
      <h1 className="skill-heading" data-aos="zoom-in" data-aos-duration="500">My Skills</h1>
      <div className="skills-area" data-aos="zoom-in" data-aos-duration="500">
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
  );
}

export default Skill;
