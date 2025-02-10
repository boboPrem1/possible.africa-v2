import { Header } from "./Landing";
import MediaImg from "../assets/media_img.png";
import { useEffect, useReducer, useState } from "react";
import { useGetOrganisationsQuery } from "../features/api/apiSlice";
import NoData from "../utils/NoData";
import Loader from "../assets/icons/loader.svg";

const countries = {
  all: [
    "Algeria",
    "Egypt",
    "Libya",
    "Tunisia",
    "Benin",
    "Burkina Faso",
    "Cape Verde",
    "Ivory Coast",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Liberia",
    "Mali",
    "Mauritania",
    "Niger",
    "Nigeria",
    "Senegal",
    "Sierra Leone",
    "Togo",
    "Cameroun",
    "Central African Republic",
    "Republic of the Congo",
    "Democratic Republic of the Congo",
    "Gabon",
    "Equatorial Guinea",
    "Sao Tome and Principe",
    "Chad",
    "Burundi",
    "Comoros",
    "Djibouti",
    "Ethiopia",
    "Kenya",
    "Madagascar",
    "Malawi",
    "Mauritius",
    "Mozambique",
    "Rwanda",
    "Seychelles",
    "Somalia",
    "South Sudan",
    "Tanzania",
    "Uganda",
    "Angola",
    "Botswana",
    "Lesotho",
    "Namibia",
    "South Africa",
    "Swaziland",
    "Zambia",
    "Zimbabwe",
  ],
  north: ["Algeria", "Egypt", "Libya", "Tunisia"],
  west: [
    "Benin",
    "Burkina Faso",
    "Cape Verde",
    "Ivory Coast",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Liberia",
    "Mali",
    "Mauritania",
    "Niger",
    "Nigeria",
    "Senegal",
    "Sierra Leone",
    "Togo",
  ],
  central: [
    "Cameroun",
    "Central African Republic",
    "Republic of the Congo",
    "Democratic Republic of the Congo",
    "Gabon",
    "Equatorial Guinea",
    "Sao Tome and Principe",
    "Chad",
  ],
  east: [
    "Burundi",
    "Comoros",
    "Djibouti",
    "Ethiopia",
    "Kenya",
    "Madagascar",
    "Malawi",
    "Mauritius",
    "Mozambique",
    "Rwanda",
    "Seychelles",
    "Somalia",
    "South Sudan",
    "Tanzania",
    "Uganda",
  ],
  southern: [
    "Angola",
    "Botswana",
    "Lesotho",
    "Namibia",
    "South Africa",
    "Swaziland",
    "Zambia",
    "Zimbabwe",
  ],
};

const subSectors = {
  health: [
    "Pharma/Biotech",
    "Health Tech",
    "Medical Device",
    "Provider",
    "Health Payer",
    "Health Consulting",
    "Health Finance",
    "Health Care Innovation & Entrepreneurship",
  ],
  education: [
    "Early Childhood Education",
    "Primary and Secondary Education",
    "Higher Education",
    "Vocational Training and Technical Education",
    "Online Education and E-Learning",
    "Educational Materials and Publishing",
    "Educational Technology and Software",
    "Tutoring and Test Preparation Services",
    "International Education and Study Abroad Programs",
    "Special Education Services",
    "Educational Consulting",
    "Continuing Education and Professional Development",
    "Language Schools and Services",
    "Educational Nonprofits and NGOs",
  ],
  mobility: [
    "Automotive Manufacturing",
    "Electric Vehicles and Charging Infrastructure",
    "Public Transportation Systems",
    "Ride-Sharing and Carpooling Services",
    "Bicycle and Scooter Sharing Systems",
    "Aerial Mobility",
    "Rail Transport Manufacturing and Services",
    "Maritime and Shipping Industries",
    "Logistics and Supply Chain Solutions",
    "Mobility as a Service - MAAS",
    "Autonomous Vehicles and Technologies",
    "Mobility Infrastructure",
    "Vehicle Rental and Leasing Services",
    "Mobility Data Analytics and Software Solutions",
  ],
  logistic: [
    "Freight Transportation",
    "Warehousing and Storage",
    "Courier and Express Delivery Services",
    "Third-Party Logistics (3PL)",
    "Supply Chain Management",
    "Maritime Logistics",
    "Air Freight and Logistics",
    "Rail Logistics",
    "Road Transportation and Trucking",
    "Customs Brokerage and Freight Forwarding",
    "Inventory Management and Control",
    "E-commerce Logistics",
    "Cold Chain Logistics",
    "Reverse Logistics",
  ],
  telecom: [
    "Mobile Network Operators",
    "Fixed-Line Telephony Services",
    "Internet Service Providers",
    "Satellite Communications",
    "Cable TV Providers",
    "Broadband and High-Speed Internet Services",
    "Voice Over Internet Protocol (VoIP) Services",
    "Wireless Communications",
    "Telecommunications Equipment Manufacturing",
    "Telecommunications Infrastructure",
    "Cloud Communications and Services",
    "Data Center Services",
    "Value-Added Services",
    "Telecommunications Consulting and Management Services",
  ],
  energy: [
    "Oil and Gas Exploration and Production",
    "Renewable Energy",
    "Nuclear Energy",
    "Electric Power Generation",
    "Electric Transmission and Distribution",
    "Natural Gas Distribution",
    "Energy Trading and Marketing",
    "Energy Efficiency Solutions",
    "Biofuels and Biomass Energy",
    "Energy Storage Solutions",
    "Coal Mining and Production",
    "Utility Services",
    "Energy Equipment and Services",
    "Environmental and Clean Tech Energy",
  ],
  financialServices: [
    "Banking Services",
    "Investment Banking",
    "Asset Management",
    "Wealth Management",
    "Insurance Services",
    "Retirement and Pension Planning",
    "Consumer Finance",
    "Mortgage Lending",
    "Credit Card Services",
    "Payment Processing Services",
    "Financial Advisory Services",
    "Foreign Exchange Services",
    "Fintech and Digital Finance",
    "Private Equity and Venture Capital",
  ],
  fmcg: [
    "Food and Beverages",
    "Personal Care and Beauty Products",
    "Household Cleaning Products",
    "Packaged Foods and Snacks",
    "Dairy Products",
    "Baked Goods",
    "Confectionery and Chocolates",
    "Beverages (Alcoholic and Non-Alcoholic)",
    "Tobacco Products",
    "Pet Foods and Pet Care Products",
    "Baby Products",
    "Health and Wellness Products",
    "Textiles and Apparel",
    "Consumer Electronics",
  ],
  hospitality: [
    "Hotels and Resorts",
    "Restaurants and Food Service",
    "Travel and Tourism",
    "Event Planning and Management",
    "Bars and Nightclubs",
    "Cruise Lines",
    "Casinos and Gaming",
    "Theme Parks and Attractions",
    "Vacation Rentals",
    "Spa and Wellness Centers",
    "Catering Services",
    "Conference and Convention Centers",
    "Leisure and Recreation Services",
    "Hospitality Technology and Services",
  ],
  media: [
    "Broadcasting (Television and Radio)",
    "Film and Movie Production",
    "Music Production and Distribution",
    "Publishing (Books, Magazines, Newspapers)",
    "Digital Media and Streaming Services",
    "Advertising and Marketing Services",
    "Social Media Platforms",
    "Video Games and Interactive Entertainment",
    "Animation and Special Effects",
    "Media Equipment and Technology",
    "Media Research and Analytics",
    "Event Promotion and Management",
    "Content Creation and Distribution",
    "Media Consulting and Management Services",
  ],
  retail: [
    "Apparel and Footwear Retail",
    "Grocery Stores and Supermarkets",
    "Department Stores",
    "Consumer Electronics Retail",
    "Home Improvement and Hardware Stores",
    "Furniture and Home Decor Stores",
    "Health and Beauty Stores",
    "Specialty Stores",
    "Sporting Goods Stores",
    "Auto Parts and Accessories Retail",
    "Jewelry and Luxury Goods Stores",
    "Online Retail and E-commerce",
    "Pet Stores and Pet Supplies",
    "Bookstores and Music Stores",
  ],
  climate: [
    "Renewable Energy",
    "Carbon Capture and Storage",
    "Climate Research and Consulting",
    "Sustainable Agriculture",
    "Environmental Nonprofits and NGOs",
    "Green Building and Sustainable Design",
    "Climate Finance and Investment",
    "Emissions Trading and Offset",
    "Climate Policy and Advocacy",
    "Environmental Education and Training",
    "Climate Technology and Innovation",
    "Sustainable Transportation",
    "Waste Management and Recycling",
    "Water Conservation and Management",
  ],
  vc: [
    "Early Stage Financing",
    "Seed Funding",
    "Series A Funding",
    "Series B Funding",
    "Series C Funding and Beyond",
    "Growth Equity",
    "Corporate Venture Capital",
    "Venture Debt",
    "Angel Investing",
    "Incubators and Accelerators",
    "Cross-Border Venture Capital",
    "Vertical-Specific Investing (e.g., Tech, Healthcare)",
    "Impact Investing",
    "Exit Strategies (e.g., Acquisitions, IPOs)",
  ],
  hub: [
    "Incubators",
    "Accelerators",
    "Co-working Spaces",
    "Competitions and Challenges",
    "Grant Programs",
    "Fellowship Programs",
    "Mentorship Programs",
    "Angel Networks",
    "Corporate Sponsorship Programs",
    "University-Linked Programs",
    "Government-Backed Initiatives",
    "Bootcamps and Workshops",
    "Crowdfunding Platforms",
  ],
  data: [
    "Data Analytics",
    "Data Management",
    "Data Integration",
    "Data Visualization",
    "Data Governance",
    "Data Security",
    "Data Engineering",
    "Data Science",
    "Data Monetization",
    "Data Privacy",
    "Data Infrastructure",
    "Data Quality",
    "Data Cataloging and Metadata Management",
    "Data Warehousing",
  ],
  agriculture: [
    "Agricultural Finance and Insurance",
    "Agricultural Real Estate",
    "Farm Management and Consulting",
    "Agricultural Equipment Manufacturing",
    "Agricultural Supply Retail",
    "Agricultural Marketing and Trading",
    "Food Processing and Packaging",
    "Agricultural Research and Development",
    "Agri-Tech (Agricultural Technology)",
    "Feed and Nutrition",
    "Crop Protection and Fertilizers",
  ],
};

const socialMedias = [
  "https://api.possible.africa/storage/logos/wwwlinkedincom.jpg",
  "https://api.possible.africa/storage/logos/linkedincom.jpg",
  "https://api.possible.africa/storage/logos/wwwtwittercom.jpg",
  "https://api.possible.africa/storage/logos/twittercom.jpg",
  "https://api.possible.africa/storage/logos/wwwfacebookcom.jpg",
  "https://api.possible.africa/storage/logos/facebookcom.jpg",
  "https://api.possible.africa/storage/logos/wwwinstagramcom.jpg",
  "https://api.possible.africa/storage/logos/instagramcom.jpg",
  "https://logo.clearbit.com/",
  "https://api.possible.africa/storage/logos/wwwredditcom.jpg",
];
const logoPlaceholder =
  "https://api.possible.africa/storage/logos/placeholder_org.jpeg";

function pageEqReducer(state, action) {
  switch (action.field) {
    case "name":
      state[0] = { ...state[0], value: action.value };
      break;
    case "region":
      state[2] = { ...state[2], value: action.value };
      break;
    case "headquarter":
      state[3] = { ...state[3], value: action.value };
      break;
    case "operatingCountries":
      state[4] = { ...state[4], value: action.value };
      break;
    case "sector":
      state[5] = { ...state[5], value: action.value };
      break;
    case "subSector":
      state[6] = { ...state[6], value: action.value };
      break;
    case "tier":
      state[10] = { ...state[10], value: action.value };
      break;
    case "reset":
      state = [
        { field: "name", value: "" },
        { field: "source", value: "" },
        { field: "region", value: "" },
        { field: "headquarter", value: "" },
        { field: "operatingCountries", value: "" },
        { field: "sector", value: "" },
        { field: "subSector", value: "" },
        { field: "active", value: "" },
        { field: "fundraising", value: "" },
        { field: "amountFundraised", value: "" },
        { field: "tier", value: "" },
        { field: "website", value: "" },
      ];
      break;
    default:
      console.log("undefined action");
      break;
  }
  return [...state];
}

function Organisations() {
  const initialPageEq = [
    { field: "name", value: "" },
    { field: "source", value: "" },
    { field: "region", value: "" },
    { field: "headquarter", value: "" },
    { field: "operatingCountries", value: "" },
    { field: "sector", value: "" },
    { field: "subSector", value: "" },
    { field: "active", value: "" },
    { field: "fundraising", value: "" },
    { field: "amountFundraised", value: "" },
    { field: "tier", value: "" },
    { field: "website", value: "" },
  ];

  const [page, setPage] = useState(1);
  const [mobileFilterIsVisible, setMobileFilterIsVisible] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [pageS, setPageS] = useState(page + 1);

  const [pageEq, dispatch] = useReducer(pageEqReducer, [
    { field: "name", value: "" },
    { field: "source", value: "" },
    { field: "region", value: "" },
    { field: "headquarter", value: "" },
    { field: "operatingCountries", value: "" },
    { field: "sector", value: "" },
    { field: "subSector", value: "" },
    { field: "active", value: "" },
    { field: "fundraising", value: "" },
    { field: "amountFundraised", value: "" },
    { field: "tier", value: "" },
    { field: "website", value: "" },
  ]);
  const [pageEqS, setPageEqS] = useState([
    { field: "name", value: "" },
    { field: "source", value: "" },
    { field: "region", value: "" },
    { field: "headquarter", value: "" },
    { field: "operatingCountries", value: "" },
    { field: "sector", value: "" },
    { field: "subSector", value: "" },
    { field: "active", value: "" },
    { field: "fundraising", value: "" },
    { field: "amountFundraised", value: "" },
    { field: "tier", value: "" },
    { field: "website", value: "" },
  ]);

  const {
    data: organisations = [],
    isLoading,
    isFetching,
    isError,
    isSuccess,
    error,
    refetch,
  } = useGetOrganisationsQuery({
    limit: firstLoad ? 10 * page : 10 * (page + 1),
    page: firstLoad ? page : page + 1,
    fields: [],
    eq: pageEqS,
  });

  const {
    data: organisationsLength,
    isLoading: organisationsLengthIsLoading,
    isFetching: organisationsLengthIsFetching,
    refetch: refechOrganisationsLength,
  } = useGetOrganisationsQuery({
    fields: [],
    eq: pageEqS,
  });

  useEffect(() => {
    // console.log(organisations);
    if (page != pageS || pageEq.length) {
      refetch();
      // console.log(page, pageS);
    } else {
      // console.log(page, pageS);
    }
  }, [isLoading, page, pageS]);

  if (isLoading || organisationsLengthIsLoading) {
    return (
      <>
        <Header page="/news" />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <div className="h-[400px] w-full m-auto flex justify-center items-center">
              <img
                src={Loader}
                style={{
                  transformOrigin: "bottom center",
                  translate: "-100px 0",
                }}
                alt="Loader possible"
                className="w-16 animate-[loading_1s_ease-in-out_infinite_alternate]"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  if (isError || error) {
    return (
      <>
        <Header page="/news" />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <NoData />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header page="/organisations" />
      <div className="flex justify-center border-2">
        <div className="flex flex-col justify-start w-11/12">
          <div className="h-[80vh] flex justify-start overflow-y-scroll">
            <table className="min-w-full mt-10">
              <thead className="bg-[#F9FAFB]">
                <tr className="h-11">
                  <th className="px-10">
                    <span className="flex justify-center">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="h-5 w-5"
                      />
                    </span>
                  </th>
                  <th className="text-start text-nowrap px-10">
                    Name of The Company
                  </th>
                  <th className="text-start text-nowrap px-10">Sector</th>
                  <th className="text-start text-nowrap px-10">Location</th>
                  <th className="text-start text-nowrap px-10">Contact Person</th>
                  <th className="text-start text-nowrap px-10">Option</th>
                  <th className="text-start text-nowrap px-10">Action</th>
                </tr>
              </thead>
              <tbody>
                {organisations.map((organisation, index) => {
                  const createdAt = new Date(organisation?.dateAdded);
                  // transform date to french format
                  const date =
                    createdAt.getDate() +
                    "/" +
                    (createdAt.getMonth() + 1) +
                    "/" +
                    createdAt.getFullYear();
                  return <Tr org={organisation} date={date} />;
                })}
              </tbody>
            </table>
          </div>
          <div
            className="w-full md:flex md:justify-center"
          >
            <button
              className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 md:w-6/12 lg:w-5/12 transition-all duration-300 my-2"
              onClick={() => {
                setPageS((s) => s + 1);
                setPage((s) => s + 1);
              }}
            >
              {(isFetching || organisationsLengthIsFetching) && (
                <img
                  src={Loader}
                  style={{
                    transformOrigin: "bottom center",
                    translate: "-35px 0",
                  }}
                  alt="Loader possible"
                  className="ml-24 w-8 animate-[loading_1s_ease-in-out_infinite_alternate]"
                />
              )}
              Charger plus de résultats
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organisations;

function Tr({ org, date }) {
  return (
    <tr className="border border-[#EAECF0] h-20">
      <td className="px-10">
        <span className="w-full flex justify-center">
          <input type="checkbox" name="" id="" className="mx-auto h-5 w-5" />
        </span>
      </td>
      <td className="px-10">
        <span className="flex justify-start gap-x-3 items-center">
          <img
            src={
              socialMedias.includes(org?.logo)
                ? logoPlaceholder
                : `https://logo.clearbit.com/${org.website}`
            }
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-md"
            srcset=""
          />
          <span className="flex flex-col">
            <span className="font-medium">{org.name}</span>
            <span>
              <a href={org.website} target="_blank" rel="noopener noreferrer">
                {/* {org.website} */}
                {org.website.length > 20
                  ? org.website.slice(0, 20) + " . . ."
                  : org.website}
              </a>
            </span>
          </span>
        </span>
      </td>
      <td className="font-medium px-10">
        {org.sector.length > 20
          ? org.sector.slice(0, 20) + " . . ."
          : org.sector}
      </td>
      <td className="px-10">{org.headquarter || "-"}</td>
      <td className="px-10">
        <span className="flex justify-start gap-x-3 items-center">
          <span className="inline-block w-8 h-8 border-2 rounded-full"></span>
          <span>Kristin Watson</span>
        </span>
      </td>
      <td className="px-10">
        <input type="radio" name="" id="" className="h-5 w-5" />
      </td>
      <td className="px-10">...</td>
    </tr>
  );
}
