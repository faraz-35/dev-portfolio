import classes from "./styles.module.scss";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* <InfoSection /> */}
      <BottomBar />
    </>
  );
};
export default Footer;

const InfoSection = () => {
  return (
    <div
      className={` lg:mt-[20px] mx-[5%] lg:mx-[10%] py-[20px] lg:py-[40px] flex flex-col lg:flex-row  justify-between items-start  gap-10 lg:gap-1 border-t border-gray-300 ${classes.container} `}
    >
      <div className="flex flex-col gap-[21px] w-full lg:w-[30%]">
        <Image
          src={"/images/Logo.png"}
          alt="logo"
          width={170}
          height={99}
          className="mx-auto lg:mr-auto"
        />
        <p className="text-[#939393]">
          We make software and stuff you know. Just buy it from us please.
        </p>
      </div>
      <ul className="flex flex-col gap-[21px] w-full lg:w-1/6">
        <h4 className="text-[#707070] text-[18px] leading-[27px] font-semibold">
          Useful links
        </h4>

        <Link href="/aboutUs">Blog</Link>
        <Link href={"/"}>Trips</Link>
        <Link href={"/"}>Become an affiliate</Link>
        <Link href={"/"}>Terms & Conditions</Link>
      </ul>
      <ul className="flex flex-col gap-[21px] w-full lg:w-1/6">
        <h4 className="text-[#707070] text-[18px] leading-[27px] font-semibold">
          Privacy
        </h4>

        <Link href={"/aboutUs"}>About Us</Link>
        <Link href={"/aboutUs"}>Contact Us</Link>
        <Link href={"/faq"}>FAQs</Link>
        <Link href={"/privacyPolicy"}>Privacy Policy</Link>
      </ul>
      <ul className="flex flex-col gap-[21px] w-full lg:w-1/6">
        <h4 className="text-[#707070] text-[18px] leading-[27px] font-semibold">
          Contact Us
        </h4>

        <li className="flex gap-2 items-start  ">
          <Image
            src={"/icons/mail.svg"}
            width={16}
            height={16}
            alt="mail"
            className="pt-1"
          />
          <p>Lightangle@gmail.com</p>
        </li>
        <li className="flex gap-2 items-start  ">
          <Image
            src={"/icons/phone.svg"}
            width={16}
            height={16}
            alt="phone"
            className="pt-1"
          />
          <p> +92 348 330 3591</p>
        </li>
        <li className="flex gap-2 items-start  ">
          <Image
            src={"/icons/map-pin.svg"}
            width={16}
            height={16}
            alt="map"
            className="pt-1"
          />
          <p>Bollengen Tower, Islamabad, Pakistan</p>
        </li>
      </ul>
    </div>
  );
};

const BottomBar = () => {
  return (
    <div className="w-full h-[70px] lg:h-[90px] px-[1%] lg:px-[10%] py-2 lg:py-0 flex flex-col lg:flex-row  justify-between items-center bg-black text-white">
      <p className="text-[#B1B1B1] text-[12px] lg:text-[14px]">
        ©2024 Copyright Lightangle Technologies Pvt Ltd. All rights reserved
      </p>
      <div className="flex space-x-2 ">
        <Image
          src={"/icons/facebook.svg"}
          alt="facebook"
          width={35}
          height={35}
          className="w-6 h-6 lg-w-[35px] lg-h-[35px]"
        />
        <Image
          src={"/icons/twitter.svg"}
          alt="twitter"
          width={35}
          height={35}
          className="w-6 h-6 lg-w-[35px] lg-h-[35px]"
        />
        <Image
          src={"/icons/facebook.svg"}
          alt="facebook"
          width={35}
          height={35}
          className="w-6 h-6 lg-w-[35px] lg-h-[35px]"
        />
      </div>
    </div>
  );
};
