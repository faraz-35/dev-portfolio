"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import classes from "./styles.module.scss";

import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={`${roboto.className} `}>Lightangle Technologies</div>
      <div className={classes.links}>
        <Link href="#about-us">About Us</Link>
        <Link href="#services">Services</Link>
        <Link href="#contact-us">Contact Us</Link>
      </div>
    </div>
  );
};
export default Navbar;
