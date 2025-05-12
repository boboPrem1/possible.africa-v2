"use client";
import React from "react";
import { Link } from "react-router-dom";

// @ts-ignore
import client1 from "../../../assets/consulting/1.svg";
// @ts-ignore
import client2 from "../../../assets/consulting/2.svg";
// @ts-ignore
import client3 from "../../../assets/consulting/3.svg";
// @ts-ignore
import client4 from "../../../assets/consulting/4.svg";
// @ts-ignore
import client5 from "../../../assets/consulting/5.svg";
// @ts-ignore
import client6 from "../../../assets/consulting/6.svg";

const clients = [client1, client2, client3, client4, client5, client6];

const Clients = () => {


  return (
    <div className="py-16 px-4 sm:px-6 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col gap-12 justify-center items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] text-center font-bold text-black">
          Client Success Stories
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full ">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="border border-[#DCE4E3] rounded-lg p-4 flex justify-center items-center"
            >
              <img
                src={clients[num - 1]}
                alt={`Client ${num}`}
                className="max-h-12 md:max-h-20 object-contain"
              />
            </div>
          ))}
        </div>

        <Link
          to="/consulting/clients"
          className="px-8 py-3 sm:px-10 sm:py-4 border border-[#2BB19C] text-[#2BB19C] rounded-full text-lg sm:text-xl lg:text-2xl font-bold cursor-pointer"
        >
          See all Clients
        </Link>
      </div>
    </div>
  );
};

export default Clients;
