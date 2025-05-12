import React from "react";

// @ts-ignore
import peopleImg from "../../../assets/consulting/people-img.png";

export default function TestimonialCard() {
  return (
    <div className="bg-white rounded-xl p-6 max-w-sm shadow-sm">
      <p className="text-gray-800 text-sm leading-relaxed">
        "With Expand in Africa managing our accounting, I can dedicate my time
        to scaling the business and leading my team. Their precision and
        reliability have made financial management effortless."
      </p>
      <hr className="my-4 border-gray-200" />
      <div className="flex items-center gap-3">
        <img
          src={peopleImg}
          alt="John Doe"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-900">John Doe</p>
          <p className="text-xs text-gray-600">CEO & Founder of Company</p>
        </div>
      </div>
    </div>
  );
}
