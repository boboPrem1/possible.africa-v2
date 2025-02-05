// import { useRouter } from "next/navigation";
import React from "react";
import { CustomIconSpiner } from "./icons";
// import { useFormStatus } from "react-dom";

// Handle buttons props like onClick, type, etc

export function Button({
  children,
  icon,
  icon_position,
  icon_only,
  className,
  disabled,
  link,
  onlyAsLink,
  full,
  onClick,
  destination,
  preventDefault,
  white,
  transparent,
  small,
  type,
}) {
  const { pending } = useFormStatus();
  
  disabled = pending ? pending : disabled
  const min_width = icon_only ? "min-w-10" : "min-w-[132px]";
  const min_height = small ? "min-h-10" : "min-h-11";
  let label_padding = icon_position === "right" ? "pr-3" : "pl-3";

  const { replace } = useRouter();

  if (!icon) {
    label_padding = "";
  }

  function navigateToLink() {
    if (destination) {
      replace(destination);
    }
  }
  if (link) {
    return (
      <a
        href={destination || "#"}
        className="bg-transparent text-primary hover:text-secondary active:text-secondary-400 active:bg-transparent visited:text-secondary underline"
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        onClick={(e) => {
          onClick?.();
          destination ? navigateToLink() : null;
          preventDefault ? e.preventDefault() : null;
        }}
        type={type}
        disabled={pending || disabled || false}
        className={`${min_height} ${
          !disabled ? "bg-primary" : ""
        } text-custom-white rounded-full ${!icon_only ? "px-5" : null} ${
          icon ? "flex justify-center items-center" : null
        } ${disabled ? "bg-gray-light-100 text-gray-light-500" : null} ${
          onlyAsLink
            ? "bg-transparent text-primary hover:text-secondary active:text-secondary-400 active:bg-transparent visited:text-secondary underline inline"
            : null
        } ${white ? "bg-white text-gray-darkest" : null}  ${
          transparent ? "bg-transparent text-gray-darkest" : null
        } ${full ? "w-full" : null} ${
          icon_only ? "w-10 h-10" : null
        } ${min_width} ${className} transition-all`}
      >
        {icon_position && icon_position === "left" && (
          <div className="min-w-[18px] min-h-[18px]">{icon}</div>
        )}
        {pending ? <div className={`min-w-[18px] min-h-[18px] ${label_padding}`}>{icon}</div> : null}
        {!icon_only && <div className={label_padding}>{children}</div>}
        {icon_only && <div className="">{icon}</div>}
        {icon_position && icon_position != "left" && (
          <div className="min-w-[18px] min-h-[18px]">{icon}</div>
        )}
      </button>
    );
  }
}
