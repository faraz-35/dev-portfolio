const Services = () => {
  return (
    <div
      id="services"
      className="h-[100vh] w-full flex flex-col justify-center items-center bg-bg text-pri px-6 py-8"
    >
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Services</h1>
      <p className="text-lg max-w-2xl text-center mb-6 animate-slide-up">
        Unleash innovation with our full-spectrum web and app development
        services. We take your vision from concept to completion, crafting
        exceptional digital solutions using cutting-edge technology to create
        elegant and high-performance websites and mobile apps.
      </p>
      <button className="mt-8 px-6 py-2 bg-sec text-white font-semibold rounded-full shadow-md hover:bg-pri transition duration-300">
        Explore Our Services
      </button>
    </div>
  );
};

export default Services;
