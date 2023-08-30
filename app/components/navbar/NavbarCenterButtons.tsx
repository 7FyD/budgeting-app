"use client";

import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const NavbarCenterButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className="
            hidden
            md:block
            px-6
            mr-[16px]      
            border-[1px] 
            w-full 
            md:w-auto 
            py-2
            rounded-md
            shadow-sm
            hover:shadow-md 
            transition
            cursor-pointer
          "
      >
        Who are we?
      </div>
      {isOpen && (
        <div
          className={`
            absolute 
            rounded-sm
            shadow-md
            w-[40vw]
            md:w-[200px]
            bg-white 
            overflow-hidden
            text-sm
            text-center
            left-12
            popup-animation
        `}
        >
          <div
            className="
            flex flex-col cursor-pointer
          "
          >
            <MenuItem label="About Us" onClick={() => {}} />
            <MenuItem label="What can we offer you?" onClick={() => {}} />
            <MenuItem label="Why choose us?" onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarCenterButtons;
