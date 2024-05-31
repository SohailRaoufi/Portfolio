"use client";
import React, { useState } from "react";
import Bio from "@/components/bio";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Header from "@/components/header";

function Page() {
  const [{ aboutSectionActive, projectsSectionActive }, setActive] = useState({
    aboutSectionActive: true,
    projectsSectionActive: false,
  });
  return (
    <div className="max-w-4xl mx-auto">
      <Header
        aboutSectionActive={aboutSectionActive}
        projectsSectionActive={projectsSectionActive}
        setActive={setActive}
      />

      {aboutSectionActive && (
        <>
          <Bio />
          <Contact />
        </>
      )}

      {projectsSectionActive && <Projects />}
    </div>
  );
}

export default Page;
