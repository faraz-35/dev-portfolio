import { services } from "@/utils/constants";

const ServiceDetail = () => {
  return (
    <div
      id="service-details"
      className="min-h-screen bg-bg text-pri px-6 py-12 space-y-20"
    >
      {services.map(({ name, heading, features }, index) => (
        <section
          id={`service-${index}`}
          key={name}
          className={`relative p-10 lg:p-16 flex flex-col  lg:flex-row items-center justify-between gap-10 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Heading Section */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-6xl font-extrabold tracking-wide animate-slide-in">
              {name}
            </h1>
            <p className="text-2xl leading-relaxed max-w-2xl animate-fade-up">
              {heading}
            </p>
          </div>

          {/* Unified Feature Display */}
          <div className="relative w-1/2 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-md ">
            <div
              className={`absolute top-0 ${
                index % 2 === 0 ? "left-0" : "right-0"
              } w-64 h-64 bg-sec opacity-10 rounded-full blur-2xl -z-0 transform rotate-45`}
            ></div>
            {features.map(({ heading, text }, featureIndex) => (
              <div key={text} className="mb-8 last:mb-0">
                <h4 className="text-xl font-bold text-sec mb-2 animate-slide-left">
                  {`${featureIndex + 1}. ${heading}`}
                </h4>
                <p className="text-lg leading-relaxed text-black">{text}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServiceDetail;
