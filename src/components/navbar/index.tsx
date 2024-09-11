import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[61px] bg-white shadow-md flex justify-between items-center px-6 lg:px-20 z-50">
      <div className="text-pri font-bold text-lg ">Lightangle Technologies</div>
      <div className="flex items-center gap-4 lg:gap-8 text-sm lg:text-base text-pri uppercase">
        <Link
          href="#about-us"
          className="hover:text-sec transition duration-200 text-sm font-semibold"
        >
          About Us
        </Link>
        <Link
          href="#services"
          className="hover:text-sec transition duration-200 text-sm font-semibold"
        >
          Services
        </Link>
        <Link
          href="#contact-us"
          className="hover:text-sec transition duration-200 text-sm font-semibold"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
