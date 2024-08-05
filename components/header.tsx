import React, { useState, useEffect } from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
import { TypeAnimation } from "react-type-animation";

function Header({
  aboutSectionActive,
  projectsSectionActive,
  setActive,
}: {
  setActive: React.Dispatch<
    React.SetStateAction<{
      aboutSectionActive: boolean;
      projectsSectionActive: boolean;
    }>
  >;
  aboutSectionActive: boolean;
  projectsSectionActive: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image src={profile} className="w-64 h-64" alt="profile picture" />
      <h1 className="font-bold text-[3rem] text-center mt-4">Masoom Wahid</h1>
      <TypeAnimation
        sequence={[
          "Back End Enginner",
          1000,
          "Python Dev",
          1000,
          "Django Expert",
          1000,
          "Rust Dev",
          1000,
        ]}
        wrapper="h3"
        speed={25}
        className="font-bold text-[1.5rem]"
        repeat={Infinity}
      />
      <div className="space-x-4 text-[1.5rem] mt-4">
        <button
          onClick={() =>
            setActive({
              aboutSectionActive: true,
              projectsSectionActive: false,
            })
          }
          className={`${aboutSectionActive && "underline"}`}
        >
          About
        </button>
        <button
          onClick={() =>
            setActive({
              aboutSectionActive: false,
              projectsSectionActive: true,
            })
          }
          className={`${projectsSectionActive && "underline"}`}
        >
          Projects
        </button>
      </div>
    </div>
  );
}

export default Header;
