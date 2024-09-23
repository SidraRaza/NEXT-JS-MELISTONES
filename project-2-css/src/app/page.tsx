import Header from '@/app/component/Header';
import './Home.css';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <div className="background-image">
        <div className="content-container">
          <div className="content-inner">
            <h1 className="heading">Hello, I Am Sidra Raza</h1>
            <p className="description">
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
