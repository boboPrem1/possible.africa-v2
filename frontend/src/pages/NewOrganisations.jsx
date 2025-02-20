import { Header } from "./Landing";
import MediaImg from "../assets/media_img.png";
import { useContext, useEffect, useReducer, useState } from "react";
import { useGetOrganisationsQuery } from "../features/api/apiSlice";
import NoData from "../utils/NoData";
import Loader from "../assets/icons/loader.svg";
import Popover from "../components/popover";
import { Button } from "@chakra-ui/react";
import { LangTransContext } from "../langTransContext";
import Input from "../components/Input";
import CustumSelect from "../components/Select";

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

function Organisations({ withoutHeader }) {
  const langTrans = useContext(LangTransContext);
  const lang = langTrans.lang;
  const _ = langTrans._;
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

  useEffect(() => {
    // console.log(organisations);
    if (page != pageS || pageEq.length) {
      refetch();
      // console.log(page, pageS);
    } else {
      // console.log(page, pageS);
    }
  }, [isLoading, page, pageS]);

  if (isLoading) {
    return (
      <>
        <Header page="/news" />
        <div className="flex justify-center">
          <div className="flex flex-col w-11/12">
            <div className="h-[400px] w-full m-auto flex justify-center items-center">
              <img
                src={Loader}
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

  if (withoutHeader) {
    return (
      <div className="flex justify-center items-start">
        <div className="flex flex-col justify-start w-11/12">
          <div className="min-h-[80vh] flex flex-col justify-start overflow-y-scroll">
            <div className="w-full flex justify-start gap-4 overflow-x-scroll">
              <Input
                label="Rechercher par nom"
                placeholder="Entrez le nom de l'organisation ."
                type="text"
                value={pageEq[0].value}
                onChange={(e) => {
                  dispatch({ field: "name", value: e.target.value });
                }}
              />
              <CustumSelect
                label="Région d'appartenance"
                placeholder="Choisissez une région."
                // value={pageEq[3].value}
                value={pageEq[2].value}
                onChange={(e) => {
                  dispatch({ field: "region", value: e.target.value });
                }}
              >
                <option value="">Choisissez une région</option>
                <option value="All">All</option>
                <option value="North Africa">North Africa</option>
                <option value="West Africa">West Africa</option>
                <option value="Central Africa">Central Africa</option>
                <option value="East Africa">East Africa</option>
                <option value="Southern Africa">Southern Africa</option>
              </CustumSelect>
              <CustumSelect
                label="Siège de l'organisation"
                placeholder="Choisissez un pays."
                // value={pageEq[3].value}
                value={pageEq[3].value}
                onChange={(e) => {
                  dispatch({ field: "headquarter", value: e.target.value });
                }}
              >
                <option value="">Choisissez un pays</option>
                {/* <option value="All">All</option> */}
                {pageEq[2].value === "All"
                  ? countries.all.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[2].value === "North Africa"
                  ? countries.north.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[2].value === "West Africa"
                  ? countries.west.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[2].value === "Central Africa"
                  ? countries.central.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[2].value === "East Africa"
                  ? countries.east.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[2].value === "Southern Africa"
                  ? countries.southern.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : null}
              </CustumSelect>
              <CustumSelect
                label="Pays couverts"
                placeholder="Choisissez un pays."
                // value={pageEq[3].value}
                value={pageEq[4].value}
                onChange={(e) => {
                  dispatch({
                    field: "operatingCountries",
                    value: e.target.value,
                  });
                }}
              >
                <option value="">Choisissez un pays</option>
                <option value="All">All</option>
                <option value="South Africa">South Africa</option>
                <option value="Algeria">Algeria</option>
                <option value="Angola">Angola</option>
                <option value="Benin">Benin</option>
                <option value="Botswana">Botswana</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Comoros">Comoros</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Egypt">Egypt</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Ghana">Ghana</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Haiti">Haiti</option>
                <option value="Kenya">Kenya</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Mali">Mali</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Namibia">Namibia</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Democratic Republic of the Congo">
                  Democratic Republic of the Congo
                </option>
                <option value="Republic of the Congo">
                  Republic of the Congo
                </option>
                <option value="Rwanda">Rwanda</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Senegal">Senegal</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Somalia">Somalia</option>
                <option value="Sudan">Sudan</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Chad">Chad</option>
                <option value="Togo">Togo</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Uganda">Uganda</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </CustumSelect>
              <CustumSelect
                label="Filtrer par secteur"
                placeholder="Choisissez un secteur."
                // value={pageEq[3].value}
                value={pageEq[5].value}
                onChange={(e) => {
                  dispatch({ field: "sector", value: e.target.value });
                }}
              >
                <option value="">Choisissez un secteur</option>
                <option value="All">All</option>
                <option value="Secteur">Secteur</option>
                <option value="Health">Health</option>
                <option value="Agribusiness">Agribusiness</option>
                <option value="Education">Education</option>
                <option value="Mobility">Mobility</option>
                <option value="Logistic">Logistic</option>
                <option value="telecom">Telecom</option>
                <option value="Energy">Energy</option>
                <option value="Financial services">Financial services</option>
                <option value="FMCG">FMCG</option>
                <option value="Hospitality">Hospitality</option>
                <option value="media">media</option>
                <option value="Retail">Retail</option>
                <option value="Climat">Climat</option>
                <option value="Data">Data</option>
                <option value="VC">VC</option>
                <option value="Hub">Hub</option>
              </CustumSelect>
              <CustumSelect
                label="Filtrer par sous secteur"
                placeholder="Choisissez un sous secteur."
                // value={pageEq[3].value}
                value={pageEq[6].value}
                onChange={(e) => {
                  dispatch({ field: "subSector", value: e.target.value });
                }}
              >
                <option value="">Choisissez un sous secteur</option>
                {pageEq[5].value === "Health"
                  ? subSectors.health.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Education"
                  ? subSectors.education.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Mobility"
                  ? subSectors.mobility.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Logistic"
                  ? subSectors.logistic.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Telecom"
                  ? subSectors.telecom.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Energy"
                  ? subSectors.energy.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Financial services"
                  ? subSectors.financialServices.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "FMCG"
                  ? subSectors.fmcg.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Hospitality"
                  ? subSectors.hospitality.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "media"
                  ? subSectors.media.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Retail"
                  ? subSectors.retail.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Climat"
                  ? subSectors.climate.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Data"
                  ? subSectors.data.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "VC"
                  ? subSectors.vc.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : pageEq[5].value === "Hub"
                  ? subSectors.hub.map((c) => {
                      return (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      );
                    })
                  : null}
              </CustumSelect>
              <CustumSelect
                label="Filtrer par tier"
                placeholder="Choisissez un tier."
                // value={pageEq[3].value}
                value={pageEq[10].value}
                onChange={(e) => {
                  dispatch({ field: "tier", value: e.target.value });
                }}
              >
                <option value="">Choisissez un tier</option>
                <option value="Global">Global</option>
                <option value="Panafrican">Panafrican</option>
                <option value="Startups">Startups</option>
                <option value="Local SMEs">Local SMEs</option>
              </CustumSelect>
              <div className="flex justify-start gap-2 items-center sticky right-0 bg-white">
                <button
                  className="w-full min-w-[150px] h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                  onClick={() => {
                    setPageEqS([...pageEq]);
                    setTimeout(() => {
                      setMobileFilterIsVisible(false);
                    }, 2000);
                  }}
                >
                  Filtrer
                </button>

                <button
                  className="w-full min-w-[150px] h-[45px] bg-transparent rounded-full text-lg text-primary border-2 border-primary hover:text-white font-bold hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 transition-all duration-300"
                  onClick={() => {
                    setPageEqS([
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
                    dispatch({ field: "reset", value: "" });
                    setTimeout(() => {
                      setMobileFilterIsVisible(false);
                    }, 2000);
                  }}
                >
                  Resset
                </button>
              </div>
            </div>
            <table className="min-w-full mt-5">
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
                    {_.database_company_name}
                  </th>
                  <th className="text-start text-nowrap px-10">
                    {_.database_sector}
                  </th>
                  <th className="text-start text-nowrap px-10">
                    {_.database_location}
                  </th>
                  <th className="text-start text-nowrap px-10">
                    {_.database_contact_person}
                  </th>
                  <th className="text-start text-nowrap px-10"></th>
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
                  return <Tr org={organisation} date={date} _={_} />;
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full md:flex md:justify-center">
            <button
              className="w-full h-[45px] bg-primary rounded-full text-lg font-bold text-white hover:bg-gradient-to-r hover:from-primary hover:to-darkPrimary hover:border-none active:scale-95 md:w-6/12 lg:w-5/12 transition-all duration-300 my-2"
              onClick={() => {
                setPageS((s) => s + 1);
                setPage((s) => s + 1);
              }}
            >
              {isFetching && (
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
              {_.load_more_results}
            </button>
          </div>
        </div>
      </div>
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
                    {_.database_company_name}
                  </th>
                  <th className="text-start text-nowrap px-10">
                    {_.database_sector}
                  </th>
                  <th className="text-start text-nowrap px-10">
                    {_.database_location}
                  </th>
                  <th className="text-start text-nowrap px-10">
                    {_.database_contact_person}
                  </th>
                  <th className="text-start text-nowrap px-10"></th>
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
          <div className="w-full md:flex md:justify-center">
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
              {_.load_more_results}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Organisations;

function Tr({ org, date, _ }) {
  const names = [
    "Jean Dupont",
    "Marie Martin",
    "Pierre Lefèvre",
    "Sophie Moreau",
    "Antoine Dubois",
    "Camille Laurent",
    "Thomas Garnier",
    "Émilie Rousseau",
    "Nicolas Petit",
    "Claire Durand",
    "Lucie Simon",
    "Hugo Fontaine",
    "Alice Renault",
    "Gabriel Caron",
    "Manon Robert",
    "Lucas Mercier",
    "Chloé Marchand",
    "Maxime Bernard",
    "Simon Boucher",
    "Juliette Blanchard",
    "Alexandre Girard",
    "Élise Faure",
    "Benjamin Roux",
    "Cécile Morin",
    "Arthur Dumas",
    "Léa Lambert",
    "Mathieu Renaud",
    "Clara Dupuis",
    "Vincent Masson",
    "Anaïs Perrin",
    "Kevin Robin",
    "Sarah Vidal",
    "Florian Olivier",
    "Amélie Lefebvre",
    "Romain Carpentier",
    "Inès Charpentier",
    "Sébastien Perrot",
    "Julie Denis",
    "Guillaume Marchal",
    "Marion Chevalier",
    "Jérémy Morel",
    "Emilie Perrier",
    "Mathieu Chabert",
    "Caroline Blanc",
    "François Millet",
    "Isabelle Aubert",
    "David Pelletier",
    "Valérie Guerin",
    "Olivier Barre",
    "Sandrine Dufour",
  ];

  function randomName() {
    const initialLengthRand = Math.floor(Math.random() * 6);
    const plusLengthRand = Math.floor(Math.random() * 4);
    const initialLength = initialLengthRand >= 2 ? initialLengthRand : 2;
    const plusLength = plusLengthRand >= 1 ? plusLengthRand : 1;
    const initials = [];

    console.log(initialLength, plusLength);

    for (let i = 0; i < initialLength; i++) {
      const name = names[Math.floor(Math.random() * names.length)];
      initials.push(`${name.split(" ")[0][0]}.${name.split(" ")[1][0]}`);
    }
    return {
      plusLength,
      initials,
    };
  }

  const { plusLength, initials } = randomName();
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
            src={org?.logo}
            alt=""
            height={40}
            width={40}
            className="w-10 h-10 rounded-md"
            srcset=""
          />
          <span className="flex flex-col">
            <span className="font-medium">{org.name}</span>
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
        <span className="flex items-center justify-start gap-2">
          <span className="flex justify-start items-center">
            {initials.length > 0 &&
              initials.map((initial) => {
                return (
                  <span className="-m-1.5 w-8 h-8 border-2 rounded-full font-semibold text-center text-xs flex flex-col justify-center bg-white">
                    {initial}
                  </span>
                );
              })}
          </span>

          <span className="pb-3 font-medium">+{plusLength}</span>
        </span>
      </td>
      <td className="px-10">
        <Popover btnTitle="Actions">
          <div className="w-full flex flex-col gap-0">
            <a className="inline-flex w-full" href="/waitlist">
              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                {_.database_action_contact}
              </span>
            </a>
            <a className="inline-flex w-full" href="/waitlist">
              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                {_.database_action_add_to_leads}
              </span>
            </a>
            <a className="inline-flex w-full" href="/waitlist">
              <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                {_.database_action_see}
              </span>
            </a>
            {org.website && (
              <a
                className="inline-flex w-full"
                href={org.website}
                target="_blank"
              >
                <span className="bg-white hover:bg-[#2BB19C] text-[#248b7c] hover:text-white font-bold py-2 px-3 w-full transition duration-300">
                  {_.database_action_visite_website}
                </span>
              </a>
            )}
          </div>
        </Popover>
      </td>
    </tr>
  );
}
