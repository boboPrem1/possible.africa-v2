import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import { Link } from "react-router-dom";

const Client = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#F4FBFA] py-36 flex justify-center">
        <div className="max-w-[750px] gap-12 flex flex-col justify-center items-center">
        <div className="flex flex-row gap-1">
          <Link to="/consulting" className="text-grayDarkest font-medium">Home</Link>
          <span>{">"}</span>
          <Link to="/consulting/clients" className="text-[#2BB19C] font-bold">Clients</Link>
        </div>
          <h1 className="text-[40px] sm:text-[55px] text-center font-bold leading-16 text-transparent bg-clip-text bg-gradient-to-r from-[#111B21] to-[#2BB19C]">
            Our Clients
          </h1>
          <p className="text-[#242827] font-light text-center text-xl max-w-[655px]">
            We support a great variety of clients: private firms, public
            institutions, marketing and event agencies, and Non-Governmental
            Organizations.
          </p>
        </div>
      </div>

      {/* Clients Section */}
      <section className="px-6 py-20 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-7xl">
          {Array.from({ length: 18 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Client;
