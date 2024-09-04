"use client";

import Link from "next/link";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

import classes from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { User } from "@/utils/types";
import { FaStar } from "react-icons/fa6";
import usePostApi from "@/hooks/usePostApi";
import { useScreenContext } from "@/context/screenContext";

const Navbar = () => {
  const router = useRouter();
  const { user: userContext, updateUser } = useContext(UserContext);
  const { setScreen } = useScreenContext();
  const [user, setUser] = useState<User | null>(userContext);
  useEffect(() => {
    if (user == null) {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    }
  }, [userContext]);

  const { postData } = usePostApi(`users/${user?._id}/affilliate`);
  const joinAsAffiliate = async () => {
    const data = await postData({
      affiliateType: "Secondary",
      commissionPercentage: 15,
    });
    updateUser({ tracking: data.tracking, isAffiliate: true });
    setScreen("referralProgram");
    router.push("/referralProgram");
  };

  return (
    <div className={classes.container}>
      <Image
        src="/images/BaydaarLogo.png"
        alt="logo"
        width={130}
        height={80}
        className="w-[90px] h-[60px] lg:w-[130px] lg:h-[80px]  img"
      />
      <div className={classes.links}>
        <Link href="/"> Home</Link>
        <Link href="aboutUs">About Us</Link>

        <Link href="login">{user ? "Logout" : "Sign in"}</Link>
        {user?.referrer && !user.isAffiliate && (
          <div
            className="flex items-center  gap-4 bg-brand px-4 h-[61px] cursor-pointer "
            onClick={joinAsAffiliate}
          >
            <FaStar
              color="white"
              size={16}
              className="w-fit"
              style={{ margin: 0 }}
            />
            <p className="text-white hover:text-white hidden lg:inline">
              JOIN US AS AFFILIATE
            </p>
          </div>
        )}
        {user && (
          <Link href="profile">
            <IoPersonOutline size={20} />
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
