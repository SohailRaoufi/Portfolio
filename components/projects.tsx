import projectArray from "@/projects.json";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="">
      <h1 className="text-[2rem] font-bold mb-8 text-center lg:text-left">
        Applicatons
      </h1>
      <motion.div transition={{ staggerChildren: 0.5 }} className="space-y-8">
        {projectArray.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.6 }}
            key={project.name}
            className="flex gap-8 bg-white shadow-lg p-8 rounded-lg flex-wrap lg:flex-nowrap"
          >
            <Image
              src={project.imgSrc}
              alt=""
              width={200}
              height={200}
              className="object-cover"
            />
            <div className="">
              <h3 className="text-[2rem] font-semibold">{project.name}</h3>
              <p className="text-[1.25rem] text-gray-600">{project.desc}</p>

              <div className="flex  gap-2">
                {project.link && (
                  <Link
                    href={project.link}
                    className="flex items-center  rounded-full w-fit px-4 py-2 bg-gray-900 text-white gap-2 my-6"
                  >
                    <LuGithub size={24} />
                    <span className="text-[1.25rem]">GitHub</span>
                  </Link>
                )}
              </div>
              <div className="flex gap-2 ">
                {project.tech.map((item) => (
                  <p key={item} className="bg-cyan-300 p-2 rounded-full">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
