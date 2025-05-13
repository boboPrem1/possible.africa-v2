import React from "react";
// @ts-ignore
import peopleImg from "../../../assets/consulting/people-img.png";

interface TestimonialCardProps {
  quote: string;
  imageSrc: string;
  name: string;
  headline: string;
}

export default function TestimonialCard({
  quote,
  imageSrc,
  name,
  headline,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-3 sm:p-6 max-w-xs sm:max-w-sm shadow-sm">
      <p className="text-gray-800 text-sm leading-relaxed">
        "
        {quote ||
          "With Expand in Africa managing our accounting, I can dedicate my time to scaling the business and leading my team. Their precision and reliability have made financial management effortless."}
        "
      </p>
      <hr className="my-4 border-gray-200" />
      <div className="flex items-center gap-3">
        <img
          src={imageSrc || peopleImg}
          alt={name || "John Doe"}
          width={40}
          height={40}
          className="rounded-full"  
        />
        <div>
          <p className="text-sm font-medium text-gray-900">
            {name || "John Doe"}
          </p>
          <p className="text-xs text-gray-600">
            {headline || "CEO & Founder of Company"}
          </p>
        </div>
      </div>
    </div>
  );
}
