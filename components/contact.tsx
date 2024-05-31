import Link from "next/link";
import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <>
      <h1 className="text-[1.5rem] font-bold">Contact Me</h1>
      <div className="flex items-center gap-4">
        <Link href={""}>
          <FiGithub size={48} />
        </Link>
        <Link href={""}>
          <CiLinkedin size={48} />
        </Link>
        <Link href={""}>
          <CiMail size={48} />
        </Link>
      </div>
    </>
  );
}

export default Contact;
