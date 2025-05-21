import React from "react";
import { Link } from "react-router-dom";
import { useGetOrganisationsQuery } from "../features/api/apiSlice";


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
  "https://api.possible.africa/storage/logos/workspacegooglecom.jpg",
  "https://api.possible.africa/storage/logos/myaccountgooglecom.jpg",
  "https://api.possible.africa/storage/logos/wwwyoutubecom.jpg",
  "https://api.possible.africa/storage/logos/youtubecom.jpg",
  "https://api.possible.africa/storage/logos/wwwtiktokcom.jpg",
  "https://api.possible.africa/storage/logos/tiktokcom.jpg",
  "https://api.possible.africa/storage/logos/iriswhoint.jpg",
];
const logoPlaceholder =
  "https://api.possible.africa/storage/logos/placeholder_org.jpeg";

const SimilarOrganizations = ({ sector, currentOrgId, currentOrgName }) => {
  // Use the same query structure as in NewOrganisations.jsx
  const { data: organisations = [], isLoading } = useGetOrganisationsQuery({
    limit: 5, // Get a few extra to account for filtering out the current org
    page: 1,
    fields: [],
    eq: [{ field: "sector", value: sector || "" }],
  });

  // Filter out the current organization from results
  const similarOrgs = organisations
    .filter((org) => org.id !== currentOrgId && org.name !== currentOrgName)
    .slice(0, 4); // Limit to 4 similar orgs

  if (isLoading) {
    return (
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Organisations similaires
        </h2>
        <div className="flex justify-center items-center h-40">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
        </div>
      </div>
    );
  }

  if (!similarOrgs || similarOrgs.length === 0) {
    return null; // Don't show anything if no similar organizations
  }

  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Organisations similaires dans le secteur{" "}
        <span className="text-primary">{sector}</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {similarOrgs.map((org) => (
          <Link
            to={`/network/${org.name}`}
            key={org.id}
            className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md p-4 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex items-center mb-3">
              <div className="bg-primary-50 rounded-full p-2 mr-3 flex-shrink-0">
                <img
                  src={org.logo}
                  alt={`${org.name}'s logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-contain"
                  onError={(e) => {
                    e.target.src = logoPlaceholder;
                  }}
                />
              </div>
              <div className="overflow-hidden">
                <h3 className="font-medium text-gray-900 truncate">
                  {org.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {org.headquarter || "—"}
                </p>
              </div>
            </div>

            {org.description && (
              <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                {org.description}
              </p>
            )}

            <div className="mt-3 flex flex-col items-start gap-2 flex-wrap">
              <div>
                {org.tier ? (
                  <span className="inline-flex bg-primary-50 text-primary text-xs px-2 py-1 rounded-full">
                    {org?.tier?.length > 35
                      ? org?.tier?.slice(0, 35) + "..."
                      : org?.tier}
                  </span>
                ) : (
                  <span className="inline-flex bg-primary-50 text-primary text-xs px-2 py-1 rounded-full">
                    -
                  </span>
                )}
              </div>
              <div>
                {org.subSector ? (
                  <span className="inline-flex bg-primary-50 text-primary text-xs px-2 py-1 rounded-full">
                    {org?.subSector?.length > 35
                      ? org?.subSector?.slice(0, 35) + "..."
                      : org?.subSector}
                  </span>
                ) : (
                  <span className="inline-flex bg-primary-50 text-primary text-xs px-2 py-1 rounded-full">
                    -
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarOrganizations;
