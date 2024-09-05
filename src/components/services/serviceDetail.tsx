import { services } from "@/utils/constants";

const ServiceDetail = () => {
  return (
    <>
      {services.map(({ name, heading, features }) => (
        <div
          key={name}
          className="h-[100vh] flex flex-col items-center justify-center"
        >
          <h1>{name}</h1>
          <p>{heading}</p>
          <div>
            {features.map(({ heading, text }) => (
              <div key={text}>
                <h4>{heading}</h4>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default ServiceDetail;
