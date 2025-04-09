import React from "react";
import { Link } from "react-router-dom";
import { useGetOrganisationsQuery } from "../features/api/apiSlice";
import { logoPlaceholder } from "../pages/NewOrganisations";

const SimilarOrganizations = ({ sector, currentOrgId, currentOrgName }) => {
  // Use the same query structure as in NewOrganisations.jsx
  const {
    data: organisations = [],
    isLoading,
  } = useGetOrganisationsQuery({
    limit: 5, // Get a few extra to account for filtering out the current org
    page: 1,
    fields: [],
    eq: [
      { field: "sector", value: sector || "" }
    ]
  });

  // Filter out the current organization from results
  const similarOrgs = organisations
    .filter(org => org.id !== currentOrgId && org.name !== currentOrgName)
    .slice(0, 4); // Limit to 4 similar orgs

  if (isLoading) {
    return (
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Organisations similaires</h2>
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
        Organisations similaires dans le secteur <span className="text-primary">{sector}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {similarOrgs.map(org => (
          <Link 
            to={`/database/${org.name}`}
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
                <h3 className="font-medium text-gray-900 truncate">{org.name}</h3>
                <p className="text-xs text-gray-500 truncate">{org.headquarter || "—"}</p>
              </div>
            </div>
            
            {org.description && (
              <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                {org.description}
              </p>
            )}
            
            <div className="mt-3 flex gap-2 flex-wrap">
              {org.tier && (
                <span className="inline-block bg-primary-50 text-primary text-xs px-2 py-1 rounded-full">
                  {org.tier}
                </span>
              )}
              {org.subSector && (
                <span className="inline-block bg-primary-50 text-primary text-xs px-2 py-1 rounded-full">
                  {org.subSector}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SimilarOrganizations;