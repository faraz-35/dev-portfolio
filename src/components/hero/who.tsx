const WhoWeAre = () => {
  return (
    <div
      id="about-us"
      className="h-[100vh] w-full flex flex-col justify-center items-center bg-bg text-pri"
    >
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
        Lightangle Technologies
      </h1>
      <p className="text-lg max-w-xl text-center mb-6 animate-slide-up">
        A creative technology firm driven by innovation and excellence in web
        and mobile development.
      </p>
      <button className="mt-8 px-6 py-2 bg-sec text-white font-semibold rounded-full shadow-md hover:bg-pri transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default WhoWeAre;
