import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Accordion from "./components/accordion";
import { Link } from "react-router-dom";

const Consultant = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#F4FBFA] py-36 flex justify-center">
        <div className="max-w-[880px] gap-14 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-1">
          <Link to="/consulting" className="text-grayDarkest font-medium">Home</Link>
          <span>{">"}</span>
          <Link to="/consulting/consultant" className="text-[#2BB19C] font-bold">Consultant</Link>
        </div>
          <h1 className="text-[40px] sm:text-[55px] text-center font-bold leading-16 text-transparent bg-clip-text bg-gradient-to-r from-[#111B21] to-[#2BB19C]">
            Join our Network of Expert Consultants
          </h1>
          <p className="text-[#242827] font-light text-center text-xl max-w-[655px]">
            Partner with Expand in Africa and play a key role in transforming
            digital businesses across the continent.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl mx-auto p-6 py-20">
        <h2 className="text-[32px] sm:text-[40px] font-nexa font-bold mb-20 text-center text-black">
          Become a Consultant
        </h2>

        <form className="space-y-6 text-black font-light flex flex-col items-center">
          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="w-full">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium mb-1 text-black placeholder:text-gray-500"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full px-4 py-3 rounded-full border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="linkedinProfile"
                className="block text-sm font-medium mb-1 text-black placeholder:text-gray-200"
              >
                LinkedIn Profile <span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                id="linkedinProfile"
                name="linkedinProfile"
                className="w-full px-4 py-3 rounded-full border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
                placeholder="https://linkedin.com/in/yourprofile"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 w-full">
            <div className="w-full">
              <label
                htmlFor="country"
                className="block text-sm font-medium mb-1"
              >
                Country <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="country"
                name="country"
                className="w-full px-4 py-3 rounded-full border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
                placeholder="Enter your country"
                required
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="sector"
                className="block text-sm font-medium mb-1"
              >
                Sector <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="sector"
                name="sector"
                className="w-full px-4 py-3 rounded-full border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
                placeholder="e.g. Technology, Healthcare, Finance"
                required
              />
            </div>
          </div>

          <div className="w-full">
            <label
              htmlFor="expertise"
              className="block text-sm font-medium mb-1"
            >
              Expertise <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              className="w-full px-4 py-3 rounded-full border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
              placeholder="Your area of expertise"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="additionalNotes"
              className="block text-sm font-medium mb-1"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              className="w-full px-4 py-3 rounded-3xl border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
              placeholder="Share any additional information..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="min-w-56 self-center bg-[#2BB19C] text-white font-nexa font-bold py-3 px-6 rounded-full hover:bg-[#259d8a] transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Accordion */}
      <Accordion />
      <Footer />
    </div>
  );
};

export default Consultant;
