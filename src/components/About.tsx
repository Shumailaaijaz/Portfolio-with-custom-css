import React from "react";
import '@/app/styles/About.css';
import Image from "next/image";

const About = () => {
  return (
    <div className="main-container">
      <div className="about-sidebar">
        <div className="about-sidebar-container">
          <div>
            <Image
              src="/profile.png"
              alt="Shumaila"
              width={150}
              height={150}
              className="about-sidebar-image"
            />
            <nav className="about-sidebar-nav">
              <ul>
                <li className="about-sidebar-item">
                  <a href="#home">Home</a>
                </li>
                <li className="about-sidebar-item">
                  <a href="#about">About</a>
                </li>
                <li className="about-sidebar-item">
                  <a href="#projects">Projects</a>
                </li>
                <li className="about-sidebar-item">
                  <a href="#skills">Skills</a>
                </li>
                <li className="about-sidebar-item">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    

      <div className="container" id="about">
      <div className="about-border">
      <h1 className="about-title">about me</h1>
      </div>
      <div className="content">
      <p className="about-intro">
      I'm <span className="bold">Shumaila Aijaz</span>, Web Developer </p>
      <div className="about-card">
      <div className="tag">About</div>
      <ul>
      <li className="about-li">
        Dedicated web and app developer with a passion for crafting innovative digital solutions.
      </li>
      <li className="about-li">
        Proficient in React.js, Next.js, React Native, and Node.js to build high-performance applications.
      </li>
      <li className="about-li">
        Committed to delivering exceptional user experiences through clean code and efficient development practices.
      </li>
    </ul>
    </div>
    </div>
    </div>
    </div>
  );
};

export default About;
