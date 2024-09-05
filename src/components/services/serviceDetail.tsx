import { services } from "@/utils/constants";

const ServiceDetail = () => {
  return (
    <>
      {services.map(({ name, heading, features }) => (
        <div
          key={name}
          className="h-[100vh] flex flex-col items-center justify-center bg-bg text-pri px-6 py-8"
        >
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">{name}</h1>
          <p className="text-lg max-w-2xl text-center mb-6 animate-slide-up">
            {heading}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl animate-fade-in">
            {features.map(({ heading, text }) => (
              <div
                key={text}
                className="bg-white text-pri p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <h4 className="text-xl font-semibold mb-2">{heading}</h4>
                <p className="text-base">{text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceDetail;
