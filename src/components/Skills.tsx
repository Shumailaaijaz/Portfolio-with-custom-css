import React from "react";
import '../app/styles/Skills.css';
import react from "/public/react.png";
import css from "/public/css.png";
import html from "/public/html.png";
import typescript from "/public/typescript.png";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="container w-[80%] m-auto mt-5" id="skills">
    <div className="skills-container">
      <div className="skills-icons">
        <div className="skills-tag">Skills</div>
        <img
          src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        <img
          src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
          alt="Skill Icon"
          className="skills-image"
        />
        
      </div>
    <div className="mainCard">
    
      <h2>My Skils in</h2>
      <div className="maingrd">
        <div className="desx">
          <Image
            className="picskill"
            alt="html"
            src={html}
            width={1000}
            height={1000}
          />
          <b><u>HTML:</u> </b>
          &quot;Highly skilled in HTML5, I craft semantic and responsive web
          interfaces. With expertise in structuring complex layouts, I
          prioritize web accessibility and SEO. Delivering dynamic web
          applications with clean, valid, and maintainable markup.&quot;
        </div>

        <div className="desx">
          <Image
            className="picskill"
            alt="html"
            src={css}
            width={1000}
            height={1000}
          />
          <b><u>CSS:</u> </b>
          &quot;Expert in CSS3 and Tailwind CSS, crafting responsive interfaces.
          Proficient in layout modeling and efficient styling. Delivering
          scalable and maintainable designs.&quot;
        </div>

        <div className="desx">
          <Image
            className="picskill"
            alt="html"
            src={typescript}
            width={1000}
            height={1000}
          />
          <b><u>TypeScript:</u> </b>
          &quot;Expert in TypeScript, building scalable and maintainable JavaScript
          applications. Utilizing static type checking and interfaces for robust
          code. Delivering efficient and reliable solutions.&quot;
        </div>

        <div className="mn">
          <div className="desx">
            <Image
              className="picskill"
              alt="html"
              src={react}
              width={1000}
              height={1000}
            />
            <b><u>React:</u> </b>
            &quot;Skilled in Nextjs, building reusable UI components and
            scalable applications. Expertise in Hooks, Redux, and context API
            enables efficient state management and seamless data flow.
            Delivering responsive, interactive, and high-performance web
            experiences.&quot;
          </div>
        </div>
      </div>
    </div>
   </div>
</div>
  );
};

export default Skills;