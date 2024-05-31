import Link from "next/link";
import React from "react";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

function Contact() {
  return (
    <section className="mt-8">
      <h1 className="text-[2rem] font-bold pb-4">Contact Me</h1>
      <div className="flex items-center gap-6">
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
    </section>
  );
}

export default Contact;
