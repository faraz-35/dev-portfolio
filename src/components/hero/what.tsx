import Link from "next/link";

const WhatWeDo = () => {
  return (
    <section
      id="what-we-do"
      className="relative h-[100vh] w-full flex flex-col justify-center items-center bg-bg text-pri px-6 py-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pri opacity-20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/2 w-80 h-80 bg-sec opacity-10 rounded-full blur-3xl z-0 animate-spin-slow"></div>

      {/* Heading Section */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:font-extrabold  mb-6 animate-slide-in text-transparent bg-clip-text bg-gradient-to-r from-pri to-sec">
        What We Do
      </h1>

      {/* Subheading Section */}
      <p className="text-lg lg:text-xl max-w-2xl text-center mb-8 animate-fade-up leading-relaxed text-gray-800">
        We specialize in creating intuitive and scalable digital products that
        enhance user experiences.
      </p>

      {/* Call to Action Button */}
      <Link
        href="#services"
        className="relative mt-8 px-8 py-3 bg-sec text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 group"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pri to-sec opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        <span className="relative z-0">Services</span>
      </Link>
    </section>
  );
};

export default WhatWeDo;
