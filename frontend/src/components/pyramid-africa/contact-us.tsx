import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Header page="https://expand-in-africa.com/" />
      <div className="bg-[#F4FBFA] py-28 flex justify-center">
        <div className="max-w-[880px] gap-14 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-1">
          <Link to="https://expand-in-africa.com/" className="text-grayDarkest font-medium">Home</Link>
          <span>{">"}</span>
          <Link to="https://expand-in-africa.com//contact" className="text-[#2BB19C] font-bold">Contact Us</Link>
        </div>
        <h1 className="text-[40px] sm:text-[55px] text-center font-bold leading-16 text-transparent bg-clip-text bg-gradient-to-r from-[#111B21] to-[#2BB19C]">
          Contact Us
          </h1>
          <p className="text-[#242827] font-light text-center text-xl max-w-[655px]">
          Reach out. Let's create impact together. We're excited to hear from you and explore what we can build.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl mx-auto p-6 py-20">
        {/* <h2 className="text-[32px] sm:text-[40px] font-nexa font-bold mb-20 text-center text-black">
        Contact
        </h2> */}

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
                htmlFor="email"
                className="block text-sm font-medium mb-1 text-black placeholder:text-gray-200"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-full border border-[#2BB19C] focus:outline-none focus:ring-2 focus:ring-[#2BB19C] focus:border-[#2BB19C]"
                placeholder="votre@email.com"
                required
              />
            </div>
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
      <Footer />
    </div>
  );
};

export default Contact;
