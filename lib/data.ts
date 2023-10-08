import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import clockImg from  "@/public/clock.jpg"
import commuImg from  "@/public/commu.jpg"
import hardImg from  "@/public/hard.jpg"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Identitys",
    hash: "#Identitys",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
    className:"linkk",
  },
] as const;

export const experiencesData = [
  {
    title: "i start leaning web development",
    location: "",
    description:"",
  
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
  {
    title: "Front-End Developer",
    location: "",
    description:
      "I worked as a front-end devel. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack  Developer",
    location: "",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
 
  {
    title: "religous-blog",
    description:
      "it's religious blog website to share and read blogs. It has features like filtering, sorting,login,post,comment and pagination.",
      tags: ["full stack website"],
    imageUrl: rmtdevImg,
    Linkk:"https://aboutquran.vercel.app/"
  },
  {
    title: "Framer motion react personal website",
    description:
      "my portfolio website using react,nextjs and freamer motion.",
      tags: ["full stack website"],
    imageUrl: wordanalyticsImg,
    Linkk:"https://Abdulhakim.vercel.app/"
  },
] as const;
export const identityData = [
  {
    title: "Hardwork",
    description:
      "I am a hardworking web developer who always strives to deliver high-quality and efficient web solutions.",
      tags: ["hardwork","Late nights"],
    imageUrl: hardImg,
  },
  {
    title: "Deadline Respect",
    description:
      "I am a web developer who respects and meets deadlines. I understand that delivering projects on time is crucial for client satisfaction and business success. ",
    tags: ["Faster response time",""],
    imageUrl:clockImg,
  },
  {
    title: "communicative",
    description:
      "I am a web developer who can communicate effectively with clients. I have the ability to listen attentively, understand the requirements and expectations, and explain my ideas clearly and concisely",
    tags: ["communicative",'ability to communicate','interaction'],
    imageUrl: commuImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "mysql",
  "mongoose",
  "Express",
  "laravel",
  "Framer Motion",
] as const;
