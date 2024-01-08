"use client";

import Link from "next/link";
import { Icon } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ThemeModeToggle } from "../theme-modal-toggle";

const NavBar = () => {
  return (
    <MaxWidthWrapper className="w-full flex justify-between items-center py-4 border-b border-gray-200">
      <div>
        <Link href={"/"}>
          <Icon.logo size={20} />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <div>Generate Resume</div>
        <div>
          <ThemeModeToggle />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default NavBar;
