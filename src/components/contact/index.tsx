const ContactForm = () => {
  return (
    <div
      id="contact-us"
      className="h-[100vh] w-full flex flex-col items-center justify-center bg-bg text-pri px-6 py-8"
    >
      <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
        Contact Us
      </h1>
      <p className="text-lg max-w-xl text-center mb-6 animate-slide-up">
        Choose us for our commitment to quality, innovation, and delivering
        results that exceed expectations.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl animate-fade-in">
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Name</label>
          <input
            type="text"
            className="border-b-2 border-pri bg-transparent p-2 focus:outline-none focus:border-sec transition duration-300"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 font-semibold">Email</label>
          <input
            type="email"
            className="border-b-2 border-pri bg-transparent p-2 focus:outline-none focus:border-sec transition duration-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col col-span-2">
          <label className="mb-4 font-semibold">
            What&rsquo;s your budget range?
          </label>
          <div className="flex gap-4 flex-wrap">
            <label className="border border-pri p-2 rounded cursor-pointer flex items-center justify-center hover:bg-sec hover:text-white transition">
              <input type="checkbox" className="hidden" />
              <span>Low Budget</span>
            </label>
            <label className="border border-pri p-2 rounded cursor-pointer flex items-center justify-center hover:bg-sec hover:text-white transition">
              <input type="checkbox" className="hidden" />
              <span>$5,000 - $10,000</span>
            </label>
            <label className="border border-pri p-2 rounded cursor-pointer flex items-center justify-center hover:bg-sec hover:text-white transition">
              <input type="checkbox" className="hidden" />
              <span>$10,000 - $20,000</span>
            </label>
            <label className="border border-pri p-2 rounded cursor-pointer flex items-center justify-center hover:bg-sec hover:text-white transition">
              <input type="checkbox" className="hidden" />
              <span>$20,000+</span>
            </label>
          </div>
        </div>
        <div className="flex flex-col col-span-2">
          <label className="mb-2 font-semibold">Message</label>
          <textarea
            rows={4}
            className="border-b-2 border-pri bg-transparent p-2 focus:outline-none focus:border-sec transition duration-300"
            placeholder="Write your message"
          ></textarea>
        </div>
      </div>
      <button className="mt-6 px-6 py-3 bg-sec text-white font-semibold rounded-full shadow-lg hover:bg-pri transition duration-300">
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
