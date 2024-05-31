import projectArray from "@/projects.json";
import Image from "next/image";
import Link from "next/link";
import { LuGithub } from "react-icons/lu";

function Projects() {
  return (
    <div className="">
      <h1 className="text-[2rem] font-bold mb-6">Applicatons</h1>
      <div className="space-y-8">
        {projectArray.map((project) => (
          <div
            key={project.name}
            className="flex gap-4 bg-white shadow-lg py-4 px-8 rounded-lg"
          >
            <Image src={project.imgSrc} alt="" width={200} height={200} />
            <div className="">
              <h3 className="text-[2rem] font-semibold ">{project.name}</h3>
              <p className="text-[1.25rem]">{project.desc}</p>

              <Link
                href={project.link}
                className="flex items-center  rounded-full w-fit px-4 py-2 bg-gray-900 text-white gap-2 mt-4"
              >
                <LuGithub size={24} />
                <span className="text-[1.25rem] ">GitHub</span>
              </Link>

              <div className="flex gap-2 mt-4">
                {project.tech.map((item) => (
                  <p key={item} className="bg-cyan-300 p-2 rounded-full">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
