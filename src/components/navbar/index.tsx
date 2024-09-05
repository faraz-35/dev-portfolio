"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import classes from "./styles.module.scss";
const Navbar = () => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <Image
        src="/images/Logo.png"
        alt="logo"
        width={130}
        height={80}
        className="w-[90px] h-[60px] lg:w-[130px] lg:h-[80px]  img"
      />
      <div className={classes.links}>
        <Link href="/">About Us</Link>
        <Link href="/">Services</Link>
        <Link href="/">Contact Us</Link>
      </div>
    </div>
  );
};
export default Navbar;
