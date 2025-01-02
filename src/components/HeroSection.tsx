import React from "react";
import Image from "next/image";
import '@/app/styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Sidebar Menu */}
      <header className="sidebar">
        <ul className="menu">
          <li className="menu-item">
            <a href="#home">
              <i className="fa fa-home" aria-hidden="true"></i>
            </a>
          </li>
          <li className="menu-item">
            <a href="#about">
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects">
              <i className="fa fa-code" aria-hidden="true"></i>
            </a>
          </li>
          <li className="menu-item">
            <a href="#skills">
              <i className="fa fa-cog" aria-hidden="true"></i>
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact">
              <i className="fa fa-address-book" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </header>

      {/* Main Content */}
      <section className="home" id="home">
        <div className="left">
          <h3>Hi There!</h3>
          <h1>
            I&apos;m <span>Shumaila Aijaz</span>
          </h1>
          <p>
            <mark>Frontend developer</mark>
          </p>
          <p>
            I&apos;m a frontend developer specializing in crafting dynamic and
            user-centric applications using cutting-edge technologies.
          </p>
          <div className="social_icons">
            <p className="sicons">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </p>
            <p className="sicons">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </p>
            <p className="sicons">
              <i className="fa fa-github" aria-hidden="true"></i>
            </p>
          </div>
          <a href="#about">
            <button>More About Me</button>
          </a>
        </div>
        <div className="right">
        <Image src="/profile.png" 
        alt="Profile Image" 
            width={750} // Specify width
            height={1080} // Specify height
            className="object-cover"
          />
        </div>
      </section>

    </div>
  );
};

export default HeroSection;
