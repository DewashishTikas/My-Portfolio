import Earth from './Background';
import SkillCard from './SkillsCard';
import { motion, useScroll, useSpring, useTransform, } from "motion/react"
import html from "../assets/images/HTML5.svg"
import css from "../assets/images/CSS3.svg"
import js from "../assets/images/javascript.svg"
import tailwind from "../assets/images/Tailwind_CSS.svg"
import react from "../assets/images/React.svg"
import node from "../assets/images/Nodejs.svg"
import express from "../assets/images/Express.svg"
import mongo from "../assets/images/MongoDB.svg"
import { useRef } from 'react';

export default function HomePage() {
  const techSkill = [
    {
      image: html,
      text: "HTML"
    },
    {
      image: css,
      text: "CSS"
    },
    {
      image: js,
      text: "JavaScript"
    },
    {
      image: tailwind,
      text: "Tailwind CSS"
    },
    {
      image: react,
      text: "React"
    },
    {
      image: node,
      text: "Node.js"
    },
    {
      image: express,
      text: "Express.js"
    },
    {
      image: mongo,
      text: "MongoDB"
    },

  ]
  const myRef = useRef()
  console.log(window.innerWidth);
  const { scrollYProgress } = useScroll({ target: myRef, offset: ["0.5 1 ","1 0"] })

  function giveOutputRange(){
    if (window.innerWidth > 768) {
      return "-140%";
    }
    else {
      return "-280%";
    }
  }
  const rawX = useTransform(scrollYProgress, [0, 0.6], ["10%", giveOutputRange()])
  const x = useSpring(rawX, {
    stiffness: 100,
    damping: 20,
  })
  return (
    <>
      <div className="relative w-full " style={{ minHeight: 'calc(100vh - 92px)' }}>
        <div className="absolute inset-0">
          <Earth />
        </div>

        <div className="intro relative z-10 top-24  text-center  h-full  text-white">
          <h1 className="md:text-5xl text-2xl font-bold ">Hi, I am Dewashish Tikas</h1>
          <p className="md:text-3xl text-lg mt-4">A Full Stack Web Developer</p>

        </div>
        <div className="relative z-10 mt-28  text-center  h-[100vh]  text-white " ref={myRef}>
          <div className="sticky  top-50 overflow-hidden"><h1 className="md:text-4xl text-xl font-bold ">Tech Skills</h1>
            <motion.div className="grid grid-flow-col md:auto-cols-[calc(80%/3)] auto-cols-[calc(80%/2)] mt-5 gap-10 px-2 md:px-5" style={{ x }}>
              {
                techSkill.map((skill, index) => (
                  <SkillCard key={index} image={skill.image} text={skill.text} />
                ))
              }</motion.div>
          </div>
        </div>

      </div>
      
    </>
  );
}
