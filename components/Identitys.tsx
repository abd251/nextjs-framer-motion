"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { identityData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Identity from "./Identity";

export default function Identitys() {
  const { ref } = useSectionInView("Identitys", 0.5);

  return (
    <section ref={ref} id="Identitys" className="scroll-mt-28 mb-28 ">
      <SectionHeading>My Identitys</SectionHeading>
      <div className=" ">
        {identityData.map((project, index) => (
          <React.Fragment key={index}>
            <Identity {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
