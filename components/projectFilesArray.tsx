import projectArray from "@/projects.json";
import Image from "next/image";
import Link from "next/link";

import React from "react";

function ProjectFilesArray() {
  return (
    <div>
      <h1>Applicatons</h1>
      {projectArray.map((project) => (
        <div key={project.name} className="flex gap-4">
          <Image src={project.imgSrc} alt="" width={200} height={200} />
          <div>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            <Link href={project.link}>GitHub</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectFilesArray;
