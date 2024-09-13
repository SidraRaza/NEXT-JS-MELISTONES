import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-[url('/12.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="relative min-h-[550px] h-auto md:h-[550px] p-4 md:p-10 flex justify-center items-center text-center z-0">
          <div className="relative z-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold  md:pt-10 bg-gradient-to-r from-yellow-400 to-orange-700 bg-clip-text text-transparent">
              Hello, I Am Sidra Raza
            </h1>
            <p className="sm:text-lg md:text-2xl text-white pt-4 md:pt-10 text-justify lg:px-20 md:px-10">
            &quot;Hello! I'm a web developer and future Generative Cloud AI Engineer with a passion for building cutting-edge solutions. 
             With expertise in web development and a keen interest in AI and cloud technology, I'm always looking to push the boundaries
             of what's possible.  Plus, I'm also a graphic designer, bringing a creative touch to my work. Let's explore the intersection 
              of technology and innovation together!&quot;</p>
          </div>
        </div>
      </div>
      
    </>
  );
}
