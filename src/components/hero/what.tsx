const WhatWeDo = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center bg-bg text-pri">
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
        What We Do
      </h1>
      <p className="text-lg max-w-xl text-center mb-6 animate-slide-up">
        We specialize in creating intuitive and scalable digital products that
        enhance user experiences.
      </p>
      <button className="mt-8 px-6 py-2 bg-sec text-white font-semibold rounded-full shadow-md hover:bg-pri transition duration-300">
        Our Services
      </button>
    </div>
  );
};

export default WhatWeDo;
