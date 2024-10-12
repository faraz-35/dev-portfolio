"use client";

import { apiUrl } from "@/utils/constants";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  budget?: string;
  message?: string;
}

interface ModalState {
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState = {
  name: "",
  email: "",
  budget: "",
  message: "",
};

const initialModalState: ModalState = {
  loading: false,
  error: null,
  success: null,
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [modalState, setModalState] = useState<ModalState>(initialModalState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCheckboxChange = (range: string) => {
    setFormData((prevData) => ({
      ...prevData,
      budget: prevData.budget === range ? "" : range,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      budget: "",
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setModalState({ loading: true, error: null, success: null });

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setFormData(initialState);
      setModalState({
        loading: false,
        error: null,
        success: "Your message has been sent successfully.",
      });
    } catch (error) {
      setModalState({
        loading: false,
        error: "Error submitting form.",
        success: null,
      });
      console.error("Error submitting form:", error);
    }
  };

  const closeModal = () => {
    setModalState(initialModalState); // Reset the modal state
  };

  return (
    <section
      id="contact-us"
      className="relative h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-br from-bg to-white text-pri px-6 py-8 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sec opacity-30 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-pri opacity-40 rounded-full blur-3xl z-0 animate-spin-slow"></div>

      {/* Heading Section */}
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:font-extrabold  mb-4 animate-slide-in text-transparent bg-clip-text bg-gradient-to-r from-pri to-sec">
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
            className={`border-b-2 bg-transparent p-2 focus:outline-none transition duration-300 placeholder-transparent group-focus-within:placeholder:text-pri ${
              errors.name ? "border-red-500" : "border-pri focus:border-sec"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
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
            className={`border-b-2 bg-transparent p-2 focus:outline-none transition duration-300 placeholder-transparent group-focus-within:placeholder:text-pri ${
              errors.email ? "border-red-500" : "border-pri focus:border-sec"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>

        {/* Budget Range */}
        <div className="flex flex-col md:col-span-2">
          <label className="mb-4 font-semibold">
            What&rsquo;s your budget range?
          </label>
          <div className="flex gap-4 flex-wrap">
            {[
              "Low Budget",
              "$3,000 - $10,000",
              "$10,000 - $20,000",
              "$20,000+",
            ].map((range) => (
              <label
                key={range}
                className={`border-2 p-2 rounded cursor-pointer flex items-center justify-center transition group ${
                  formData.budget == range
                    ? "bg-sec text-white border-sec"
                    : "border-pri hover:bg-sec hover:text-white"
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.budget == range}
                  onChange={() => handleCheckboxChange(range)}
                />
                <span className="group-hover:text-white transition">
                  {range}
                </span>
              </label>
            ))}
          </div>
          {errors.budget && (
            <span className="text-red-500 text-sm mt-1">{errors.budget}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col md:col-span-2 relative group">
          <label className="mb-2 font-semibold group-focus-within:text-sec transition-colors duration-300">
            Message
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`border-b-2 bg-transparent p-2 focus:outline-none transition duration-300 placeholder-transparent group-focus-within:placeholder:text-pri ${
              errors.message ? "border-red-500" : "border-pri focus:border-sec"
            }`}
            placeholder="Write your message"
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-fit mx-auto mt-6 px-6 py-3 bg-sec text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 group md:col-span-2"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pri to-sec opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
          <span className="relative z-0">Submit</span>
        </button>
      </form>

      {/* Success/Error Modal */}
      {(modalState.loading || modalState.error || modalState.success) && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6  max-w-md text-center">
            {(modalState.success || modalState.error) && (
              <h2 className="text-2xl font-bold mb-4">
                {modalState.success ? "Success!" : "Sorry"}
              </h2>
            )}
            {modalState.loading && (
              <div className="flex justify-center mb-4">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-sec "></div>
              </div>
            )}
            {modalState.error && <p className="">{modalState.error}</p>}
            {modalState.success && <p className="">{modalState.success}</p>}
            {!modalState.loading && (
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-sec text-white rounded hover:bg-sec-dark transition"
              >
                Close
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
