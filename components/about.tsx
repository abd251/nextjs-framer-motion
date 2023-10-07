"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="a bg-gradient-to-r from-cyan-500 to-blue-500  mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a creative and passionate full-stack web developer with a computer science degree and experience in building responsive and user-friendly websites. I have a strong knowledge of HTML, CSS, JavaScript, Laravel,  NextJS, React, and various modern frameworks and libraries. I enjoy learning new technologies and applying them to solve real-world problems. I am also a team player who values collaboration, feedback, and continuous improvement.
      </p>

  
    </motion.section>
  );
}
