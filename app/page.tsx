"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/public/profile.png";
import Bio from "@/components/bio";

function Page() {
  const [{ about, projects }, setActive] = useState({
    about: true,
    projects: false,
  });
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center ">
        <Image src={profile} className="w-48 h-48" alt="profile picture" />
        <h1 className="font-bold text-[2rem]">Brian Yu</h1>
        <div className="space-x-4 text-[1.5rem]">
          <button
            onClick={() => setActive({ about: true, projects: false })}
            className={`${about && "underline"}`}
          >
            About
          </button>
          <button
            onClick={() => setActive({ about: false, projects: true })}
            className={`${projects && "underline"}`}
          >
            Projects
          </button>
        </div>
      </div>

      <Bio />
    </div>
  );
}

export default Page;
