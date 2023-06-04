import React from "react";
import { BilibiliIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from ".";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavbarIcons = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row gap-1.5">
        <YoutubeIcon />
        <BilibiliIcon />
        {/* <RedbookIcon /> */}
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <ThemeToggle />
    </>
  );
};

export default NavbarIcons;
