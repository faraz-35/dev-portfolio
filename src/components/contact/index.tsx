"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  budget: string[];
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    budget: [],
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (range: string) => {
    setFormData((prevData) => {
      const newBudget = prevData.budget.includes(range)
        ? prevData.budget.filter((item) => item !== range)
        : [...prevData.budget, range];
      return {
        ...prevData,
        budget: newBudget,
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div
      id="contact-us"
      className="relative h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-bg to-white text-pri px-6 py-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sec opacity-30 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-pri opacity-40 rounded-full blur-3xl z-0 animate-spin-slow"></div>

      {/* Heading Section */}
      <h1 className="text-6xl font-extrabold mb-4 animate-slide-in text-transparent bg-clip-text bg-gradient-to-r from-pri to-sec">
        Contact Us
      </h1>
      <p className="text-lg max-w-xl text-center mb-8 animate-fade-up leading-relaxed text-gray-800">
        Choose us for our commitment to quality, innovation, and delivering
        results that exceed expectations.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl animate-fade-in"
      >
        {/* Name Field */}
        <div className="flex flex-col relative group">
          <label className="mb-2 font-semibold group-focus-within:text-sec transition-colors duration-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-b-2 border-pri bg-transparent p-2 focus:outline-none focus:border-sec transition duration-300 placeholder-transparent group-focus-within:placeholder:text-pri"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col relative group">
          <label className="mb-2 font-semibold group-focus-within:text-sec transition-colors duration-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-pri bg-transparent p-2 focus:outline-none focus:border-sec transition duration-300 placeholder-transparent group-focus-within:placeholder:text-pri"
            placeholder="Enter your email"
          />
        </div>

        {/* Budget Range */}
        <div className="flex flex-col col-span-2">
          <label className="mb-4 font-semibold">
            What&rsquo;s your budget range?
          </label>
          <div className="flex gap-4 flex-wrap">
            {[
              "Low Budget",
              "$5,000 - $10,000",
              "$10,000 - $20,000",
              "$20,000+",
            ].map((range) => (
              <label
                key={range}
                className={`border-2 border-pri p-2 rounded cursor-pointer flex items-center justify-center transition group ${
                  formData.budget.includes(range)
                    ? "bg-sec text-white"
                    : "hover:bg-sec hover:text-white"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.budget.includes(range)}
                  onChange={() => handleCheckboxChange(range)}
                />
                <span className="group-hover:text-white transition">
                  {range}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Message Field */}
        <div className="flex flex-col col-span-2 relative group">
          <label className="mb-2 font-semibold group-focus-within:text-sec transition-colors duration-300">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 border-pri bg-transparent p-2 focus:outline-none focus:border-sec transition duration-300 placeholder-transparent group-focus-within:placeholder:text-pri"
            placeholder="Write your message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-fit mx-auto mt-6 px-6 py-3 bg-sec text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 group col-span-2"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pri to-sec opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          <span className="relative z-0">Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
