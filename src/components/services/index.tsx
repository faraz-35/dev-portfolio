"use client";

import Link from "next/link";

const Services = () => {
  return (
    <section
      id="services"
      className="relative   min-h-[calc(100vh-61px)]   w-full flex flex-col justify-center items-center bg-gradient-to-br from-bg to-white text-pri px-6 py-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-sec opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-pri opacity-30 rounded-full blur-3xl animate-spin-slow"></div>

      {/* Heading Section */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:font-extrabold  mb-4 animate-slide-in text-transparent bg-clip-text bg-gradient-to-r from-pri to-sec">
        Services
      </h1>

      {/* Subheading Section */}
      <p className="text-lg lg:text-xl text-center mb-8 animate-fade-up leading-relaxed text-gray-800 max-w-2xl">
        Unleash innovation with our full-spectrum web and app development
        services. We take your vision from concept to completion, crafting
        exceptional digital solutions using cutting-edge technology to create
        elegant and high-performance websites and mobile apps.
      </p>

      {/* Call to Action Button */}
      <Link
        href="/"
        className="relative mt-8 px-8 py-3 bg-sec text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 group"
        onClick={(e) => {
          e.preventDefault(); // Prevent navigation
          const section = document.getElementById("service-details");

          if (section) {
            const yOffset = -61; // Adjust for navbar height
            const y =
              section.getBoundingClientRect().top + window.scrollY + yOffset;
            window?.scrollTo({ top: y, behavior: "smooth" });
          }
        }}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pri to-sec opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        <span className="relative z-0">Explore Our Services</span>
      </Link>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center animate-bounce">
        <span className="block w-2 h-2 mb-1 bg-pri rounded-full"></span>
        <span className="block w-2 h-2 mb-1 bg-pri rounded-full"></span>
        <span className="block w-2 h-2 bg-pri rounded-full"></span>
      </div>
    </section>
  );
};

export default Services;
