import Link from "next/link";

const WhoWeAre = () => {
  return (
    <div
      id="about-us"
      className="relative h-[100vh] w-full flex flex-col justify-center items-center bg-gradient-to-br from-bg to-white text-pri px-6 py-8 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-sec opacity-20 rounded-full blur-2xl z-0 animate-pulse"></div>
      <div className="absolute -bottom-4 right-1/4 w-40 h-40 bg-pri opacity-30 rounded-full blur-3xl z-0 animate-spin-slow"></div>

      {/* Heading Section */}
      <h1 className="text-6xl font-extrabold mb-6 animate-slide-in text-transparent bg-clip-text bg-gradient-to-r from-pri to-sec leading-tight">
        Lightangle Technologies
      </h1>

      {/* Subheading Section */}
      <p className="text-xl max-w-2xl text-center mb-8 animate-fade-up leading-relaxed text-gray-800">
        A creative technology firm driven by innovation and excellence in web
        and mobile development.
      </p>

      {/* Call to Action Button */}
      <Link
        href="#what-we-do"
        className="relative mt-8 px-8 py-3 bg-sec text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 group"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pri to-sec opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        <span className="relative z-0">Learn more</span>
      </Link>
    </div>
  );
};

export default WhoWeAre;
