import Image from "next/image";
import React from "react";
import profile from "@/public/profile.png";

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
    <div className="flex flex-col items-center ">
      <Image src={profile} className="w-48 h-48" alt="profile picture" />
      <h1 className="font-bold text-[2rem]">Brian Yu</h1>
      <div className="space-x-4 text-[1.5rem]">
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
