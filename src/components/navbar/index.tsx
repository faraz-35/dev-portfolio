"use client";

import { useState } from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"], // Specify the weights you want to use
  subsets: ["latin"], // Specify the subsets you need
});

import { CgClose, CgMenu } from "react-icons/cg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-[100vw] bg-white shadow-md z-50">
      <div className=" flex justify-between items-center h-[61px] px-6 md:px-8 lg:px-20">
        <h1
          className={`${roboto.className} text-pri font-bold text-base lg:text-lg uppercase`}
        >
          Lightangle Tech
        </h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-pri focus:outline-none">
            {isOpen ? <CgClose /> : <CgMenu />}
          </button>
        </div>
        <div className="hidden lg:flex items-center gap-4 lg:gap-8 text-xs sm:text-sm lg:text-base text-pri uppercase">
          <MenuItems />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden transition-max-height duration-300 lg:hidden`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-xs sm:text-sm lg:text-base text-pri uppercase">
          <MenuItems onClick={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

const MenuItems = ({ onClick }: { onClick?: () => void }) => (
  <>
    <Link
      href="/"
      className="hover:text-sec transition duration-200 font-semibold"
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        onClick?.();
      }}
    >
      About Us
    </Link>
    <Link
      href="/"
      className="hover:text-sec transition duration-200 font-semibold"
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation
        const section = document.getElementById("services");

        if (section) {
          const yOffset = -61; // Adjust for navbar height
          const y =
            section.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
        onClick?.();
      }}
    >
      Services
    </Link>
    <Link
      href="/"
      className="hover:text-sec transition duration-200 font-semibold"
      onClick={(e) => {
        e.preventDefault(); // Prevent navigation
        const section = document.getElementById("contact-us");

        if (section) {
          const yOffset = -61; // Adjust for navbar height
          const y =
            section.getBoundingClientRect().top + window.scrollY + yOffset;
          window?.scrollTo({ top: y, behavior: "smooth" });
        }
        onClick?.();
      }}
    >
      Contact Us
    </Link>
  </>
);

export default Navbar;
