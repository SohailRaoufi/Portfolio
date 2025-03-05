import Link from "next/link";
import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <section className="">
      <h1 className="text-[2rem] font-bold pb-4">Contact Me</h1>
      <div className="flex items-center gap-6">
        <Link href={"https://github.com/SohailRaoufi"}>
          <FiGithub size={48} />
        </Link>
        <Link href={"https://www.linkedin.com/in/sohailraoufi"}>
          <CiLinkedin size={48} />
        </Link>
        <Link href={"mailto:sohailraufi19@gmail.com"}>
          <CiMail size={48} />
        </Link>
      </div>
    </section>
  );
}

export default Contact;
