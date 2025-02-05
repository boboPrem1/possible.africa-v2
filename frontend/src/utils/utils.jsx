import React from 'react'

export const COUNTRIES = {
  "": [],
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

export const SUB_SECTORS = {
  "": [],
  "Agribusiness": [
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
  "Climat": [
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
  "Data": [
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
  "Education": [
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
  "Energy": [
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
  "Financial services": [
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
  "FMCG": [
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
  "Health": [
    "Pharma/Biotech",
    "Health Tech",
    "Medical Device",
    "Provider",
    "Health Payer",
    "Health Consulting",
    "Health Finance",
    "Health Care Innovation & Entrepreneurship",
  ],
  "Hub": [
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
  "Hospitality": [
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
  "Logistic": [
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
  "Mobility": [
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
  "media": [
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
  "Retail": [
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
  "telecom": [
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
  "VC": [
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
};

export const TIERS = [
  "Global",
  "Panafrican",
  "Startups",
  "Local SMEs"
]

const capitalizeFirstLetter = (str) =>
  str ? str[0].toUpperCase() + str.slice(1).toLowerCase() : "";

export const getCountriesOptionsFromRegion = (
  countryKey
) => {
  const options = COUNTRIES[countryKey].map((c) => {
    const capitalized = capitalizeFirstLetter(c);
    return (
      <option key={c} value={c}>
        {capitalized}
      </option>
    );
  });

  return options;
};

export const getAllCountriesOptions = () => {
  const options = COUNTRIES.all.map((c) => {
    const capitalized = capitalizeFirstLetter(c);
    return (
      <option key={c} value={c}>
        {capitalized}
      </option>
    );
  });

  return options;
};

export const getAllSectorsOptions = () => {
  const options = Object.keys(SUB_SECTORS).map((s) => {
    
    const capitalized = capitalizeFirstLetter(s);
    return (
      <option key={s} value={s}>
        {capitalized ? capitalized : "Choose sector"}
      </option>
    );
  });

  return options;
};

export const getSubSectorsOptionsFromSector = (
  sectorKey
) => {
  const options = SUB_SECTORS[sectorKey].map((s) => {
    const capitalized = capitalizeFirstLetter(s);
    return (
      <option key={s} value={s}>
        {capitalized}
      </option>
    );
  });

  return options;
};
export const getAllRegionsOptions = () => {
  const options = Object.keys(COUNTRIES).map((r) => {
    const capitalized = capitalizeFirstLetter(r);
    return (
      <option key={r} value={r}>
        {capitalized ? capitalized : "Choose Region"}
      </option>
    );
});

  return options;
};


export const getAllTiersOptions = () => {
  const options = TIERS.map((t) => {
    const capitalized = capitalizeFirstLetter(t);
    return (
      <option key={t} value={t}>
        {capitalized}
      </option>
    );
  });

  return options;
};



export const calculateDaysFromNow = (targetDate) => {
  // Convertir la date cible en un objet Date
  const target = new Date(targetDate);

  // Vérifier si la date est valide
  if (isNaN(target)) {
    throw new Error("Invalid date format. Please provide a valid ISO date.");
  }

  // Obtenir la date actuelle
  const now = new Date();

  // Calculer la différence en millisecondes
  const diffInMilliseconds = target - now;

  // Convertir la différence en jours
  const diffInDays = Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));

  return diffInDays;
};