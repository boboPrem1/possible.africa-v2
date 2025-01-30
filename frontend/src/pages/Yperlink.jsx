import React from "react";
import { useState } from "react";
import yperLinkLogo from "../assets/yperlink-logo.svg";
import YnavBar from "../components/YnavBar";
import Yheader from "../components/Yheader";
import Participate from "../components/participate";
import Apply from "../components/Apply";
import EligibilityCriteria from "../components/EligibilityCriteria";
import ZeroToOne from "../components/ZeroToOne";
import Yfooter from "../components/Yfooter";
import RegistrationForm from "../components/RegistrationForm";

const Yperlink = () => {
  return (
    <div className="font-nexaRegular">
      <div>
        <YnavBar />
        <div className="py-10 mt-16 lg:mt-0 bg-gray-100">
          <Yheader />
        </div>
        <div className="bg-white">
          <Participate />
        </div>
        <div className="py-10">
          <Apply />
        </div>
        {/* <EligibilityCriteria /> */}
        <RegistrationForm />
        <div className="py-10">
          <ZeroToOne />
        </div>
        <div></div>
        <Yfooter />
      </div>
    </div>
  );
};

export default Yperlink;
