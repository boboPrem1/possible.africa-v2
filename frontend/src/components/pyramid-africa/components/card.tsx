import React from "react";
import tolbi from "../../../assets/consulting/tolbi.png";

interface ClientCardProps {
  src: string;
  name: string;
  country: string;
  sector: string;
  description: string;
  website: string;
}

export default function ClientCard({
  src,
  name,
  country,
  sector,
  description,
  website,
}: ClientCardProps) {
  return (
    <div className="bg-white flex flex-col rounded-xl p-6 shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12)] max-w-sm w-full">
      <div className="flex gap-4 items-start">
        <img
          src={src || tolbi}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="rounded-md object-contain"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {name || "tolbi"}
          </p>
          <p className="text-sm text-gray-600">{country || "Senegal"}</p>
          <p className="text-sm text-gray-600">{sector || "Agriculture"}</p>
        </div>
      </div>

      <p className="mt-4 text-sm flex-grow text-gray-700 leading-relaxed">
        {description ||
          "Tolbi is a cutting-edge agricultural analysis platform that helps businesses in West Africa make informed decisions and improve their performance."}
      </p>

      <a
        href={website || "https://tolbi.ai/"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-sm font-medium text-[#2BB19C] hover:underline"
      >
        View website →
      </a>
    </div>
  );
}
