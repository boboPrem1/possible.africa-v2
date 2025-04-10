import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { GrowingEnterAnimation } from "../components/for_database/animations";
import Popover from "../components/popover";
const companies = [
  {
    id: 1,
    logo: "/path-to-logo1.png",
    name: "Banque nationale du Rwanda",
    sector: "Financial Services",
    location: "Rwanda",
    contacts: ["D.I", "M.", "L.S", "C.M"],
    extraContacts: 1,
  },
  {
    id: 2,
    logo: "/path-to-logo2.png",
    name: "Banque du Ghana",
    sector: "Financial Services",
    location: "Ghana",
    contacts: ["C.I", "S.I", "S.D"],
    extraContacts: 1,
  },
  {
    id: 3,
    logo: "/path-to-logo3.png",
    name: "Koya App",
    sector: "Education",
    location: "Nigeria",
    contacts: ["C.I", "S.B"],
    extraContacts: 3,
  },
];

const ApplicantList = () => {
  const [filter, setFilter] = useState("");
  const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const tableId = import.meta.env.VITE_AIRTABLE_TABLE_ID;
  const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        const candidateData = response.data.records;
        setData(candidateData);
        console.log("Data fetched successfully:", candidateData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="py-12 text-2xl font-medium">
          List of Yperlink applicant
        </h1>
        <div className=" bg-white w-full rounded-lg shadow">
          <div className="h-10"></div>
          <div className="flex gap-4 w-full mb-4">
            <input
              type="text"
              placeholder="Entrez le nom de l'organisat"
              className="border p-2 rounded focus:outline-none placeholder:font-medium w-1/3"
              onChange={(e) => setFilter(e.target.value)}
            />
            <select className="border font-medium focus:outline-none placeholder:font-medium p-2 rounded w-1/3">
              <option className="font-medium">Choisissez une région</option>
            </select>
            {/* <select className="border focus:outline-none p-2 font-medium rounded w-1/3">
              <option>Choisissez un siège</option>
            </select> */}
            <button className="bg-[#2BB19C] font-medium rounded-3xl text-white px-8 py-2">
              Filtrer
            </button>
            <button className="border border-[#2BB19C] rounded-3xl font-medium text-[#2BB19C] px-8 py-2">
              Reset
            </button>
          </div>
          <GrowingEnterAnimation>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 text-left">
                    <input type="checkbox" />
                  </th>
                  <th className="p-2 text-left">Applicante Name</th>
                  <th className="p-2 text-left">Company</th>
                  <th className="p-2 text-left">pays</th>
                  <th className="p-2 text-left">Sector</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data
                  .map((record) => record.fields)
                  .filter((applicant) =>
                    applicant["Nom complet"]
                      .toLowerCase()
                      .includes(filter.toLowerCase())
                  )
                  .map((applicant, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-2">
                        <input className="focus:outline-none" type="checkbox" />
                      </td>
                      <td className="p-2 flex items-center gap-2 font-medium">
                        {applicant["Nom complet"]}
                      </td>
                      <td className="p-2 font-medium">
                        {" "}
                        <img
                          src={applicant.logo || "/default-avatar.png"}
                          alt={applicant["Nom complet"]}
                          className="w-8 h-8 inline-block rounded-full"
                        />
                        {applicant["Nom de l’entreprise"]}
                      </td>
                      <td className="p-2 font-medium">Togo</td>
                      <td className="p-2 font-medium">
                        {applicant["Secteur d’activité"]}
                      </td>
                      <td className="p-2 font-medium">
                        <Popover btnTitle="Actions">
                          <div className="w-full flex flex-col gap-0">
                            <a
                              className="inline-flex w-full"
                              href="/waitlist"
                              target="_blank"
                            >
                              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                                {/* {_.database_action_contact} */}
                                contacter
                              </span>
                            </a>
                            <a className="inline-flex w-full" href="/waitlist">
                              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                                {/* {_.database_action_add_to_leads} */}
                                voir fiche{" "}
                              </span>
                            </a>
                            <a className="inline-flex w-full" href="/waitlist">
                              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                                {/* {_.database_action_see} */}
                                Voir articles
                              </span>
                            </a>
                            {/* {org.website && ( */}
                            <a
                              className="inline-flex w-full"
                              href={
                                applicant["Site Web ou lien vers le pitch deck"]
                              }
                              target="_blank"
                            >
                              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                                {/* {_.database_action_visite_website} */}
                                voir website
                              </span>
                            </a>
                            {/* )} */}
                          </div>
                        </Popover>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </GrowingEnterAnimation>
        </div>
      </div>
    </div>
  );
};

export default ApplicantList;
