
import Image from 'next/image';
import './about.css'; // Ensure the path is correct
import Header from '@/app/component/Header';

export default function AboutHeader() {
  return (
    <>
      <Header />
      <div className='bg'>
      <div className="about-header-container">
        <div className="about-header-image">
          <Image src="/o1.jpg" alt="About Us" className="image" width={450} height={300} />
        </div>
        <div className="about-header-content">
          <h1 className="about-header-title">About Us</h1>
          <p className="about-header-description">
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
